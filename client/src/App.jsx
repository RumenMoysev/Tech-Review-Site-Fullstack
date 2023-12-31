import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"

import { AuthProvider } from "./contexts/AuthContext.jsx"

import Articles from "./components/Reviews/Reviews.jsx"
import Details from "./components/Details/Details.jsx"
import Header from "./components/Header/Header.jsx"
import Home from "./components/Home/Home.jsx"
import Login from "./components/Login/Login.jsx"
import Register from "./components/Register/Register.jsx"
import Edit from "./components/EditReview/EditReview.jsx"
import AddReview from "./components/AddReview/AddReview.jsx"
import Page404 from "./components/404/404.jsx"
import Profile from "./components/Profile/Profile.jsx"
import AuthGuard from "./components/guards/AuthGuard.jsx"
import Footer from "./components/Footer/Footer.jsx"

import './App.css'

function App() {
    return (
        <AuthProvider>
            <Header/>
            
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/reviews" element={<Articles/>} />
                <Route path="/reviews/:reviewId" element={<Details/>} />
                <Route path="/userProfile/:currentUserId" element={<Profile isMyProfile={false}/>} />
                <Route path="*" element={<Page404/>} />

                <Route element={<AuthGuard/>}>
                    <Route path="/add-review" element={<AddReview/>} />
                    <Route path="/reviews/:reviewId/edit" element={<Edit/>} />
                    <Route path="/myProfile" element={<Profile isMyProfile={true}/>} />
                </Route>
            </Routes>
            
            <Footer />
        </AuthProvider>
    )
}

export default App