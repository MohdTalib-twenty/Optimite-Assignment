# Task-Mnagement
It showcase the authentication and authorization of user by using # jsonwebtoken & bcryptjs and the CRUD operation functionality in task management by using express router.

# Table of Contents
 : Project Structure
 
 : API Endpoints
 
 : Installation
 
 : Usage
 
 : Contributing
 
 : License


# Project Structure

: index.js->: The main entry point of the application.

: Routes:

         : authRoutes.js-> Defines routes for user registration, login, and user info retrieval.
         
         : taskRoutes.js: Defines routes for creating, updating, deleting, and retrieving tasks.
         
: Controllers:

          : authController.js-> Contains functions for user registration, login, and user info retrieval.
          
          : taskControllers.js-> Contains functions for creating, updating, deleting, and retrieving tasks.
          
: Middlewares:

          : authMiddleware.js-> Middleware for user authentication.
          
: Models:

          : userModels.js-> Defines the User model.
          
          : taskModels.js-> Defines the Task model.
          
: Config:

   :db.js-> Database configuration.

: Other Dependencies-> Express, dotenv, cors, morgan, axios, bcryptjs, # jsonwebtoken, randomstring, etc.

## API Endpoints
# Auth Endpoints
 POST /api/auth/register
 
 Register a new user.
 
 Request Body:
 
 # json
 Copy code
 {
   "username": "example_user",
   "email": "user@example.com",
   "password": "password123"
 }
 Response:
 # json
 Copy code
 {
   "success": true,
   "message": "Registration successful",
   "user": {
     "username": "example_user",
     "email": "user@example.com"
   },
   "token": "your_jwt_token_here"
 }
 POST /api/auth/login
 
 User login.
 Request Body:
 # json
 Copy code
 {
   "username": "example_user",
   "password": "password123"
 }
 Response:
 # json
 Copy code
 {
   "success": true,
   "message": "Login successful",
   "findUser": {
     "username": "example_user",
     "email": "user@example.com"
   },
   "token": "your_jwt_token_here"
 }
 GET /api/auth/getUserInfo
 
 Get user information.
 Requires authentication.
 Response:
 # json
 Copy code
 {
   "success": true,
   "user": {
     "username": "example_user",
     "email": "user@example.com"
   }
 }
Task Endpoints
POST /api/task/createTask

Create a new task.
Requires authentication.
Request Body:
# json
Copy code
{
  "title": "Task Title",
  "description": "Task Description",
  "dueDate": "2023-12-31"
}
Response:
# json
Copy code
{
  "success": true,
  "message": "Task created successfully",
  "task": {
    "title": "Task Title",
    "description": "Task Description",
    "dueDate": "2023-12-31"
  }
}
GET /api/task/getTask

Get user's tasks.
Requires authentication.
Response:
# json
Copy code
{
  "success": true,
  "tasks": [
    {
      "title": "Task 1",
      "description": "Task 1 Description",
      "dueDate": "2023-12-31"
    },
    {
      "title": "Task 2",
      "description": "Task 2 Description",
      "dueDate": "2023-12-31"
    }
  ]
}
PUT /api/task/updateTask

Update a task.
Requires authentication.
Request Body:
# json
Copy code
{
  "_id": "task_id_here",
  "newtitle": "Updated Task Title",
  "newdescription": "Updated Task Description",
  "status": "Updated Status",
  "dueDate": "2023-12-31"
}
Response:
# json
Copy code
{
  "success": true,
  "message": "Task Updated"
}
PUT /api/task/updateStatus

Update the status of a task to "Completed."
Requires authentication.
Request Body:
# json
Copy code
{
  "_id": "task_id_here"
}
Response:
# json
Copy code
{
  "success": true,
  "message": "Task Updated"
}
DELETE /api/task/deleteTask/:id

Delete a task by ID.
Requires authentication.
Response:
# json
Copy code
{
  "success": true,
  "message": "Task Deleted Successfully"
}

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

List any prerequisites or dependencies required to run your project. For example:

- [Node.js](https://nodejs.org/) installed on your machine


### Installing

A step-by-step guide to getting your development environment set up.

```bash
# Clone the repository
git clone https://github.com/MohdTalib-twenty/Optimite-Assignment.git

# Navigate to the project directory
cd your-repo

# Install dependencies
npm install

# Start the application
nodemon index.js


# No need to worry about MONGO_URL and JWT_SECRET Key its already included

