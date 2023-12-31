const Review = require('../models/Review.js')

const titleLength = 6
const summaryLength = 10
const descriptionLength = 20

function validate(reviewData) {
    if(reviewData.title.length < titleLength) {
        throw new Error(`Title should be at least ${titleLength} characters long`)
    }
    if (!reviewData.imageUrl.startsWith('http://') && !reviewData.imageUrl.startsWith('https://')) {
        throw new Error('Please provie a valid image URL')
    }
    if(reviewData.summary.length < summaryLength) {
        throw new Error(`Summary should be at least ${summaryLength} characters long`)
    }
    if(reviewData.description.length < descriptionLength) {
        throw new Error(`Description should be at least ${descriptionLength} characters long`)
    }
}

exports.getAll = () => Review.find()

exports.getAllWithoutDescription = () => Review.find({}, { title: 1, imageUrl: 1, summary: 1, createdAtTime: 1})

exports.getLast2 = () => Review.find({}, { title: 1, imageUrl: 1, summary: 1, likes: 1 }).sort({$natural: -1}).limit(2)

exports.getReviewsByTitle = (title) => Review.find({'title': new RegExp(`${title}`, 'i')})

exports.getReviewOwner = (reviewId) => Review.findById(reviewId, { owner: 1 })

exports.getOneDetails = (reviewId) => {
    const review = Review.findById(reviewId, { title: 1, imageUrl: 1, description: 1, owner: 1, likes: 1, createdAtTime: 1, updatedAtTime: 1 }).lean()

    if(!review) {
        throw new Error('Review not found')
    }

    return review
}

exports.getOneComments = (reviewId) => {
    const review = Review.findById(reviewId, { comments: 1 }).populate({ path: 'comments.owner', select: 'username _id' }).lean()

    if (!review) {
        throw new Error('Review not found')
    }

    return review
}

exports.getOneAllData = (reviewId) => {
    const review = Review.findById(reviewId)

    if (!review) {
        throw new Error('Review not found')
    }

    return review
}

exports.createReview = (reviewData) => {
    try {
        validate(reviewData)

        return Review.create(reviewData)
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.updateReview = (reviewData, reviewId) => {
    try {
        validate(reviewData)

        return Review.findByIdAndUpdate(reviewId, reviewData)
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.deleteReview = (reviewId) => {
    const review = Review.findByIdAndDelete(reviewId)

    if (!review) {
        throw new Error('Review not found')
    }

    return review
}

exports.likeReview = async (reviewId, userId) => {
    const review = await Review.findById(reviewId, {likes: 1, owner: 1})

    if(!review.likes.includes(userId) && review.owner != userId) {
        return Review.findByIdAndUpdate(reviewId, { $push: { likes: userId } })
    }
}

exports.addComment = (reviewId, commentData) => Review.findByIdAndUpdate(reviewId, {$push: {comments: commentData}}, {returnDocument: 'after', projection: {comments: {$slice: -1}, fieldToReturn: 1}}).lean()
.populate({path: 'comments.owner', select: 'username _id'})

exports.getComment = async (reviewId, commentId) => {
    let comments = await Review.findById(reviewId, {comments:1}).lean()
    comments = comments.comments

    return comments.find(comment => comment._id == commentId)
}

exports.deleteComment = (reviewId, commentId) => Review.findByIdAndUpdate(reviewId, {$pull: {comments: {_id: commentId}}})

exports.likeComment = (reviewId, userId, commentId) => Review.updateOne({"_id": reviewId, "comments._id": commentId}, {$addToSet: {"comments.$.likes": userId}})