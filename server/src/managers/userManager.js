const User = require('../models/User.js')
const bcrypt = require('bcrypt')
const jwt = require('../lib/jwtPromise.js')
const SECRET = require('../configs/config.js')

const usernameLength = 5
const emailLength = 7
const passwordLength = 5

function validate(userData, rePassword) {
    if (userData.email.length < emailLength) {
        throw new Error(`Email should be at least ${emailLength} characters long.`)
    }

    if (userData.username) {
        if (userData.username.length < usernameLength) {
            throw new Error(`Username should be at least ${usernameLength} characters long.`)
        }
    }

    if (userData.password.length < passwordLength) {
        throw new Error(`Password should be at least ${passwordLength} characters long.`)
    }

    if (rePassword) {
        if (rePassword !== userData.password) {
            throw new Error('Passwords do not match')
        }
    }
}

exports.register = async (userData, rePassword) => {
    try {
        validate(userData, rePassword)

        userData.password = await bcrypt.hash(userData.password, 10)

        const user = await User.create(userData)

        return getAuthResult(user)
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.login = async (userData) => {
    try {
        const user = await User.findOne({ email: userData.email })

        if (user) {
            const isValid = await bcrypt.compare(userData.password, user.password)

            if (!isValid) {
                throw new Error('Email or password do not match!')
            }

            return getAuthResult(user)
        } else {
            throw new Error('Email or password do not match!')
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.addToCreated = (userId, reviewId) => User.findByIdAndUpdate(userId, { $push: { createdReviews: reviewId }})

exports.addToLiked = async (userId, reviewId) => {
    const user = await User.findById(userId)

    if(!user.likedReviews.includes(reviewId)) {
        user.likedReviews.push(reviewId)
    }
    return user.save()
}

exports.getUserData = (userId) => User.findById(userId, {username: 1, email: 1})

exports.getCreatedReviews = (userId) => User.findById(userId, {createdReviews: 1}).populate('createdReviews')

exports.getLikedReviews = (userId) => User.findById(userId, {likedReviews: 1}).populate('likedReviews')

async function getAuthResult(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        username: user.username
    }

    const token = await jwt.sign(payload, SECRET)

    return [payload, token]
}