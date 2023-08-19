# Random User Api

## Description
This is a simple Random User Api , where you can get random user data and also can add user data to the database.

## Technologies
- TypeScript
- Node.js
- Express.js
- MongoDB

## Usage
### Live Link : https://random-user-api-5nbv.onrender.com

Get Request
```
get: /api/v1/user/random - Get Random User Data 

get: /api/v1/user/all - Get all users data from database

get: /api/v1/user/all?limit=10 - Get 10 users data from database (limit = any number)
```
Post Request
```
post: /api/v1/user/save - Add User Data to database

In the body of the request you have to send data like this
"body data type JSON"
body: {
    "gender": "male",
    "name" : "Test Data For Save",
    "contact": "test@example.com",
    "address": "123 Main St, Cityville, USA",
    "photoUrl": "https://example.com/photos/john_doe.jpg"
}
```
Patch Request 
```
patch: /update/:id - Update User Data to database (id = user id)

In the body of the request you have to send data like this (you can send any data you want to update)
"body data type JSON"
body: {
    "gender": "male",
    "name" : "Test Data For Update",
    "contact": "test@example.com",
    "address": "123 Main St, Cityville, USA",
    "photoUrl": "https://example.com/photos/update.jpg"
}
```
Delete Request
```
delete: /delete/:id - Delete User Data from database (id = user id)
```

## Author
- [Md Rifat Hossen](https://rifatsaown.netlify.app/)
