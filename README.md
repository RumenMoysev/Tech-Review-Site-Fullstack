# Tech-Review-Site-ReactJS
<p align='center'>
    <img src='./client/public/images/black_white_logo.png' width='300' height='250' alt='logo'>
</p>
<img alt="GitHub last commit (by committer)" src="https://img.shields.io/github/last-commit/RumenMoysev/Tech-Review-Site-Fullstack">

This repository is my project with ReactJS called Tech Review Site. It's a fullstack application.
## Overview
This website is a platform for all the tech enthusiasts who want to share information with each other, write reviews or rate products. The project utilizes various technologies including RESTful APIs powered by Express for the backend, user authentication with JWT (JSON Web Tokens), React for the frontend, and MongoDB with Mongoose for data storage.

## Functionality

### User Authentication

- **Login:** Users can authenticate by providing their credentials.
- **Register:** New users can create an account by providing necessary information.

### Reviews

- **View Reviews:** Users can browse and view existing reviews.
- **Create Reviews:** Authenticated users can create new reviews.
- **Edit and Delete Reviews:** Review owners can edit and delete their own reviews.
- **Like Reviews:** Users can like reviews.
- **Add Comments:** Authenticated users can add comments to reviews.
- **Like Comments:** Users can like comments.
- **Delete Comments:** Owners of the comment can delete comments.

### Search Functionality

- **Search:** Users can search for specific reviews or topics.

### Profile Page

- **View Profile:** Users can view their own profile with created and liked posts.
- **View Others' Profile:** Users can view other users' profiles with only created posts.

## Installation
Clone or download (and extract) the ZIP file of this repository
```bash
cd client 
npm i
cd ../
cd server
npm i
```

## Usage
### Open two terminals from the root project directory
In the first one enter the server folder and start the server
```bash
cd server
npm run start
```
In the second one enter the client folder and start the client
```bash
cd client
npm run dev
```

## Technologies Used

- **Frontend:**
  - ReactJS: A JavaScript library for building user interfaces.
  - React Router: A standard library for routing in React applications.
  - Vite: A build tool that aims to provide a faster and more efficient development experience.

- **Backend:**
  - Express: A fast, unopinionated, minimalist web framework for Node.js.
  - MongoDB (Mongoose): A MongoDB object modeling tool designed to work in an asynchronous environment.
  - Bcrypt: A library for hashing passwords.
  - JWT (JSON Web Tokens): A compact, URL-safe means of representing claims to be transferred between two parties.

## Screenshots

### Desktop view
- **Home page**
  - Blue
    <p align='center'>
        <img src='./client/screenshots/desktop//Home-blue.png' alt='logo'>
    </p>
  - Green
    <p align='center'>
        <img src='./client/screenshots/desktop//Home-green.png' alt='logo'>
    </p>
  - Red
    <p align='center'>
        <img src='./client/screenshots/desktop//Home-red.png' alt='logo'>
    </p>
  - Yellow
    <p align='center'>
        <img src='./client/screenshots/desktop/Home-yellow.png' alt='logo'>
    </p>

- **Reviews**
  - No search
    <p align='center'>
        <img src='./client/screenshots/desktop/Reviews.png' alt='logo'>
    </p>
  - Search
    <p align='center'>
        <img src='./client/screenshots/desktop/Reviews-search.png' alt='logo'>
    </p>

- **Details page**
  - Owner
    <p align='center'>
      <img src='./client/screenshots/desktop/Details-owner.png' alt='logo'>
    </p>
  - User (not liked)
    <p align='center'>
      <img src='./client/screenshots/desktop/Details-user.png' alt='logo'>
    </p>
  - User (liked)
    <p align='center'>
      <img src='./client/screenshots/desktop/Details-user1.png' alt='logo'>
    </p>
  - User (comments)
    <p align='center'>
      <img src='./client/screenshots/desktop/Details-user-comments.png' alt='logo'>
    </p>
  - User (writing comment)
    <p align='center'>
      <img src='./client/screenshots/desktop/Details-user-comment-post.png' alt='logo'>
    </p>
  - User (posted comment)
    <p align='center'>
      <img src='./client/screenshots/desktop/Details-user-comment-posted.png' alt='logo'>
    </p>
  - Guest
    <p align='center'>
      <img src='./client/screenshots/desktop/Details-guest.png' alt='logo'>
    </p>
  - Guest (comments)
    <p align='center'>
      <img src='./client/screenshots/desktop/Details-guest-comments.png' alt='logo'>
    </p>

- **Login**
  - No error
    <p align='center'>
        <img src='./client/screenshots/desktop/Login.png' alt='logo'>
    </p>
  - Error
    <p align='center'>
        <img src='./client/screenshots/desktop/Login1.png' alt='logo'>
    </p>

- **Register**
  - No error
    <p align='center'>
        <img src='./client/screenshots/desktop/Register.png' alt='logo'>
    </p>
  - Error
  <p align='center'>
        <img src='./client/screenshots/desktop/Register1.png' alt='logo'>
  </p>

- **Edit**
<p align='center'>
    <img src='./client/screenshots/desktop/Edit.png' alt='logo'>
</p>

- **Add Review**
<p align='center'>
    <img src='./client/screenshots/desktop/Add-review.png' alt='logo'>
</p>

- **Profile page**
  - Owner (posted reviews)
    <p align='center'>
      <img src='./client/screenshots/desktop/Profile-posted.png' alt='logo'>
    </p>
  - Owner (liked reviews)
    <p align='center'>
      <img src='./client/screenshots/desktop/Profile-liked.png' alt='logo'>
    </p>
  - Owner (liked reviews (search))
    <p align='center'>
      <img src='./client/screenshots/desktop/Profile-liked-search.png' alt='logo'>
    </p>
  - Another user
    <p align='center'>
      <img src='./client/screenshots/desktop/Another-user-profile.png' alt='logo'>
    </p>

- **Navbar**
  - User
    <p align='center'>
      <img src='./client/screenshots/desktop/Navbar-user.png' alt='logo'>
    </p>
  - Guest
    <p align='center'>
      <img src='./client/screenshots/desktop/Navbar-guest.png' alt='logo'>
    </p>