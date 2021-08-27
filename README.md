# Unit 14 Homework : Tech-Blog
Table of Contents
- [Images](#image-examples)
- [Description](#description)
- [Installation](#installation-instructions)
- [Requirements](#requirements)
- [Usage](#usage-information)

## Image Examples
<img src="public\img\Tech_Blog_homepage.PNG">
<img src="public\img\Tech_Blog_editpost.PNG">
<img src="public\img\Tech_Blog_dashboard.PNG">
<img src="public\img\Tech_Blog_login.PNG">
<img src="public\img\Tech_Blog_signup.PNG">
<img src="public\img\Tech_Blog_viewpost.PNG">

## Description
This project was created as an assignment for creating a site similar to a tech blog. Users are able to sign in, create posts, comment on others' posts, update and delete your own post.

## Installation Instructions
Open the Command Prompt and change your directory to the top level of this application. Once at that directory, verify that you have the package.json file. If you do not, run 'npm init -y.' Once this is completed you will need to run 'npm i'. Next you will need to navigate to the database schema(db/schema.sql) for this project and copy this code into your MySQL WorkBench to create the database. Once the database is created you will need to run 'npm run seed' at the top level of the project terminal to seed data into your database.
Once this is done you should be good to go.

## Requirements
- When the user visits the site for the first time, then they are presented with the homepage, which includes existing blog posts, navigation links for the homepage, dashboard, and login.
- When the user clicks on the homepage option, then they are brought to the homepage.
- When the user clicks on any other navigation link, then they are brought to sign in or sign up.
- When the user chooses to sign up then they are prompted to create a username and password.
- When the user clicks the sign up button then their credentials are saved and they are logged in.
- When the user is logged in to the site then they see the navigation links for homepage, dashboard, and logout.
- When the user clicks the Homepage navigation link then they are taken to the Homepage and presented with existing blog posts that include post title and date created.
- When the user clicks on an existing blog post then they are presented with the post title, contents, post creator's username, and date created and have the option to leave a comment.
- When the user enters a comment and click on the submit button while logged in, then the comment is saved and the post is updated to display the comment, the comment creator's name, and date created.
- When the user clicks the Dashboard option in the navigation then they are taken to the dashboard and presented with any blog posts this user has already created and the option to add a new blog post.
- When the user clicks the button to add a new blog post then they are prompted to enter both a title and contents for their blog post.
- When the user clicks the button to add their new blog post then the title and contents are saved and they are taken to their updated dashboard with their new post.
- When the user clicks one of their existing blog posts in the dashboard then they are able to delete or update the post and taken back to the updated dashboard.
- When the user clicks on the logout option in the navigation then they are signed out of the site.


## Usage Information
Firstly verify that all instillation instructions are completed. Open the terminal at the top level of the project and run 'npm start' to start the server. The user is able to view posts on the homepage without needing to be logged in. If they want to comment on posts or create their own posts then they must login or sign up for an account. 

Link to app usage video: [Tech Blog](https://drive.google.com/file/d/1JawjhhPOr8_rR7GIS1PjU9WSGm40IYHk/view)