# Task-Mnagement
It showcase the authentication and authorization of user by using jsonwebtoken & bcryptjs and the CRUD operation functionality in task management by using express router.

# Table of Contents
 : Project Structure
 : API Endpoints
 : Installation
 : Usage
 : Contributing
 : License


# Project Structure

: index.js->: The main entry point of the application.
Routes:
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

: Other Dependencies-> Express, dotenv, cors, morgan, axios, bcryptjs, jsonwebtoken, randomstring, etc.

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

