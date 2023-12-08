# Tech-Review-Site-ReactJS
<p align='center'>
    <img src='./client/public/images/black_white_logo.png' width='300' height='250' alt='logo'>
</p>
![GitHub last commit (by Rumen Moysev)](https://img.shields.io/github/last-commit/RumenMoysev/Tech-Review-Site-Fullstack)

This repository is my project with ReactJS called Tech Review Site. It's a fullstack application.
## Overview
This website is a platform for all the tech enthusiasts who want to share information with each other, write reviews or rate products. The project utilizes various technologies including RESTful APIs powered by Express for the backend, user authentication with JWT (JSON Web Tokens), React for the frontend, and MongoDB with Mongoose for data storage.
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

## Functionality

### User Authentication

- **Login:** Users can authenticate by providing their credentials.
- **Register:** New users can create an account by providing necessary information.

### Reviews

- **View Reviews:** Users can browse and view existing reviews.
- **Edit and Delete Reviews:** Review owners can edit and delete their own reviews.
- **Like Reviews:** Users can like reviews.
- **Comment on Reviews:** Users can leave comments on reviews.
- **Create Reviews:** Authenticated users can create new reviews.

### Search Functionality

- **Search:** Users can search for specific reviews or topics.

### Profile Page

- **View Profile:** Users can view their own profile with created and liked posts.
- **View Others' Profile:** Users can view other users' profiles with only created posts.
- **Security:** Access to edit or delete reviews is restricted to the review owner.

## Technologies Used

- **Express:** A fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB (Mongoose):** A schema-based MongoDB object modeling tool.
- **Bcrypt:** A library for hashing passwords.
- **JWT (JSON Web Tokens):** A compact, URL-safe means of representing claims to be transferred between two parties.
- **ReactJS:** A JavaScript library for building user interfaces.