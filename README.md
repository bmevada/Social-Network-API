# Social-Network-API
Week 18: NoSQL Challenge

## Summary

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. 

An API for a social network web application has been built where users can share their thoughts, react to friends’ thoughts, and create a friend list. Express.js was used for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js and Mongoose packages, JavaScript date library was used to format timestamps.

As this application was not deployed, a walkthrough video link has been provided which demonstrates its functionality and all of the following acceptance criteria being met. 

## Table of Conents
  1. [Summary](#summary)
  2. [User Story](#user-story)
  3. [Acceptance Criertia](#acceptance-criteria)
  4. [Mock up - Walkthrough video](#mock-up-walkthrough-video)
  5. [Functionality of Working Application](#functionality-of-working-application)
  6. [Development Technologies Used](#development-technologies-used)
  7. [Author](#author)

## User Story
```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```


## Acceptance Criteria
```md
GIVEN a social network API
WHEN the user enter the command to invoke the application
THEN the server is started and the Mongoose models are synced to the MongoDB database
WHEN the user opens API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN the user tests API POST, PUT, and DELETE routes in Insomnia
THEN the user is able to successfully create, update, and delete users and thoughts in my database
WHEN the user tests API POST and DELETE routes in Insomnia
THEN the user is able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
## Mock up - Walkthrough video



## Functionality of Working Application
Once the server has started, the Mongoose models are synched to the MongoDB database.



## Development Technologies Used
- Express.js -  used for routing
- MongoDB database - used to build highly available and scalable internet applications, with a flexible schema approach
- Mongoose ODM - library that provides object mapping functionality for MongoDB
- JavaScript date library - to format datestamps

## Author
Bhavika Mevada
https://github.com/bmevada/Social-Network-API.git


