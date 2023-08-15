# Random User Api

## Description
This is a simple Random User Api , where you can get random user data and also can add user data to the database.

## Technologies
- TypeScript
- Node.js
- Express.js
- MongoDB

## Usage
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
body: {
    "gender": "male",
    "name" : "Test Data For Save",
    "contact": "test@example.com",
    "address": "123 Main St, Cityville, USA",
    "photoUrl": "https://example.com/photos/john_doe.jpg"
}
```
Delete Request
```
delete: /delete/:id - Delete User Data from database (id = user id)
```

## Author
- [Md Rifat Hossen](https://rifatsaown.netlify.app/)
