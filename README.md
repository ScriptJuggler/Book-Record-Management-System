# Book Record Management System

## Routes and Endpoints

### /users
POST: Create a new use
GET: Get all the list of users

### /users/{id}
GET: Get a user by Id
PUT: Update a user by their ID
DELETE: Delete a user by id (check if he/she still has an issued book && is there any fine to be paid)

### /users/subscription-details/{id}
GET: Get user subscription details
    >> Date of subscription
    >> Valid till
    >> Fine if any

### /books
GET: Get all books
POST: Create/Add a new book

### /books/{id}
GET: Get a book by id
PUT: Update a book by its id

### /books/issued
GET: Get all issued books

### /books/issued/withFine
GET: Get all issued books with fine

# Subscription Type:
    >> Basic(3 months)
    >> Standard(6 months)
    >> Premium(12 months)


# Cmda:
    >> npm init
    >> npm i express
    >> npm i nodemon --save-dev
    >> npm run dev

## MongoDb:
    (Non - Relational DB)    

## Cmnds DB:
    >> npm i mongoose    
    >> npm install mongodb
    >> npm i dotenv

## MVC Architecture
    >> M: Model (Structure of MongoDb collection)
    >> V: View (Frontend-reactJs)
    >> C: Controller (Brain or logic of a route)

## ReactJs
    >> SPA(Single Page Application)
    >> Virtual DOM
    >> Data Binding(Single Direction Flow)
    >> Components
        >> Class Based Components
        >> Functional Based Components    

