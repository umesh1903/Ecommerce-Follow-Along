# Ecommerce-Follow-Along

In this is a follow along project, we will build an Ecommerce Application using MERN Stack (MongoDB, Express.js, React.js, and Node.js). This project key features are, REST API Creation: Through the mentor-guided project, we will learn to build scalable APIs.
Authentication: We will get to learn to implement secure login and registration functionalities. -Database Schema Design: We will get to explore how to create structured data models using MongoDB.
Backend Development: As a part of the project, we will learn to set up robust server-side logic with Node.js and Express.


### Milestone 1: Project Overview

The MERN stack is a popular way to build web apps. It’s great because it uses just one language—JavaScript—for everything, making it easier for developers to work on both the front-end (what users see) and the back-end (how things work behind the scenes).

MongoDB is used instead of regular SQL databases because it can store a lot of data without needing it to be in a fixed structure, which makes it more flexible.

To connect the user interface and the server, we use REST APIs. These help send and receive data smoothly.

Mongo DB is used instead of SQL so that a large amount of data can be stored without storing them in the structured format.

We use REST API to handle the client and the server connection

### Milestone 2: Login page

1.Created login page using Tailwind CSS and React.
2.Used routers


### Milestone 3: Project Setup for Backend

This milestone focused on setting up the backend server for the ecommerce application. Key achievements include:

Setting up a Node.js/Express server for the backend:
Initialized a new Node.js project using npm init.
Installed essential dependencies like express, dotenv, cors, and body-parser.
Created the folder structure for the backend, including directories for routes, controllers, and models.
Added environment variables for secure configuration using .env.
Configured the server to handle API requests and send appropriate responses.
Implemented basic routes to test the server functionality, such as:
A root endpoint (/) that returns a welcome message.
A /health endpoint to verify the server's status.
Ensured the server is ready for future integrations, including database and authentication modules.




### Milestone 4: Creating User Model and Controller

In this milestone, we focused on building and organizing the components necessary for user management and file uploads in our application. Below are the key steps and actions taken:

Folder Structure Setup:

Controllers Folder: Created a user.js file to handle the logic for user-related routes.
Models Folder: Created a user.js file to define the User schema.
Dependencies Installation:

Installed bcryptjs for password hashing to ensure secure storage of user credentials.
Installed multer to manage file uploads efficiently.
User Schema Creation:

In models/user.js, defined a User schema using Mongoose. The schema includes essential fields for user information, such as name, email, password, and other attributes.
Controller Implementation:

In controllers/user.js, implemented a route to handle user creation. This route integrates:
Password hashing using bcryptjs before saving user data.
Validation and error handling to ensure data integrity.
File Upload Management:

Created a multer.js file to configure file upload settings:
Configured storage options, including destination and filename customization.
Added logic to generate unique filenames for uploaded files.


### Milestone 5: Building a SignUp Page

In this Milestone, we created the sign up page

Here the input tag takes the input of the user to take inputs of
User's first name
Last Name
Email
Password
Confirm Password
We used react-router-dom and react-hook-form to do user validation. We also used regex and also watch to see whether both passwords match or not.
In the handlePic function, we created a URL for the image the user added.


### Milestone 6:Connect

In this milestone, we focused on securely handling user data, connecting the backend to the frontend, and managing user authentication. Below are the highlights of our progress:

Data Encryption:

Learned how to use bcrypt to encrypt user data, such as passwords, before saving them to the database.
Ensured sensitive information is securely stored, minimizing risks of data breaches.
Database Persistence:

Implemented functionality to store user data in the database reliably.
Ensured data consistency and prevented data loss during storage operations.
Backend-Frontend Integration:

Connected the frontend application to the backend, enabling seamless interaction between the two layers.
Configured endpoints to handle user profile uploads from the frontend.
Verified that user-uploaded profile images are correctly stored in the designated uploads folder on the server.
Authentication and Data Management:

Incorporated JSON Web Tokens (JWT) for managing user authentication and session handling.
Ensured secure and efficient user authentication by generating and verifying tokens for login sessions.

### Milestone 7: MongoDB connection
In this Milestone,

 Understand how to validate user credentials during login.
Learn how to compare the encrypted password with the user’s input.
The user provides their email/username and password on the login page.
The backend retrieves the user record based on the provided email/username.
If the user is not found, return an error: "User does not exist."
Process the user's input password using the same hashing algorithm (e.g., bcrypt).
Compare the resulting hash to the stored hashed password.
If they match, the user is authenticated; if not, send an error.


### Milestone 8: Home Page creation
In this Milestone,

Create a card component.
Display those cards on the products page.
A single card component that accepts product details as props.
Array mapping to iterate over the product list and render a card for each product.
Reusable card component with props for product details (e.g., name, image, price).
A grid layout or flexbox for displaying multiple cards neatly.
A home page with a route connecting to app.jsx.

### Milestone 9: Product Creation Page
In this milestone, we:

Learned to create a form to collect all product details.
Implemented functionality to upload multiple images as input.
Built the page using React JS and styled it with Tailwind CSS.
Utilized useState to manage form inputs dynamically.
Applied proper styling using Tailwind CSS for a responsive and modern UI.


### Milestone 10: Connecting to MongoDB

In this milestone, I accomplished the following:

Created a Product Schema using Mongoose

Defined a schema to structure product data
Included fields such as name, description, price, stock, category, and images
Built a POST Endpoint for Product Data

Developed an API endpoint to receive product details from the frontend
Implemented validation for required fields before storing data
Handled Image Uploads with Multer

Configured Multer to handle file uploads
Allowed users to upload up to ten images
Stored images in a dedicated Product folder for better organization
Integrated MongoDB for Persistent Storage

Connected the backend to MongoDB using Mongoose
Successfully stored validated product data, including image paths

### Milestone 11: Dynamic Product Card
In this milestone, we will:

Create an API Endpoint

Write a backend endpoint to extract and send product data from MongoDB.
Fetch Data on the Frontend

Receive product data in the frontend and dynamically display it using the existing Product card component.
Update Multer.js

Make necessary adjustments to Multer.js for handling product images properly.
Dynamically Display Products

Ensure that newly created products are dynamically added to the home page.
View Data on the Main Page

Verify that product data is properly displayed and accessible from the main page.

###      Milestone 12: Dynamic Filtering


In this Milestone,



To write an endpoint that will send data by filtering with my mail and send data from mongodb.

To receive data at frontend -How to display that data dynamically using product card created earlier.

The user can give their email, and the products from that email can be seen.

We create a new page myProducts to show the products of the user.

We update product.js in the backend to create,save and show the product.


### Milestone 13:
In this Milestone,

Write an endpoint that will update the existing data in MongoDB.
Auto fill the form with previous data and give option to edit.
We use router and post method.
The entire data and also part of data can be changed.
frontend we will add an edit button to the product card. When click on edit we will send the data to form and make it auto fill and have option to edit those data and save.


### Milestone 14:
In this Milestone,

Write an endpoint that delete the product with specific ID from MongoDB.
We use routers to delete the product
In frontend we will add an delete button to the product card.
When click on delete button we will send the product id to server endpoint.
After deleting the product will be removed from user's page.


### Milestone 15: Nav Bar
In this Milestone,

Creating and Nav component.
Reusing the same component in multiple pages.
Create an new Nav component with links to all pages:
Home
My-products
Add product
cart
Adding the nav component to all the pages and make the navigations to all this pages smooth and easy.
Making the Navbar responsive to all screen sizes.


### Milestone 16: New Product Page
In this Milestone,

Create an product info page that display all the product data and choose quantity and add to card button.
New page to display each product.
Adding quantity and add to card button.
