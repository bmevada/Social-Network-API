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

Click here to view the walkthrough video once the server has started: https://drive.google.com/file/d/1jy1NNW9Cb2EmmGtIUeroITiuwTnpD4PP/view?usp=sharing
https://watch.screencastify.com/v/bDcFpF2rI9nxdhl4sBlt

## Functionality of Working Application
Once the server has started (by running run `npm start` in the terminal), the Mongoose models are synched to the MongoDB database.

<img width="1028" alt="models for thoughts and user synched to Mongoose" src="https://user-images.githubusercontent.com/109460560/205632809-5e650565-aff1-4182-a8fb-28332993b80f.png">

<img width="1028" alt="Database for Users" src="https://user-images.githubusercontent.com/109460560/205632881-317801b5-828b-4bab-8176-98ac82a7fb05.png">

<img width="1026" alt="Database for thoughts" src="https://user-images.githubusercontent.com/109460560/205632865-1dc1585b-ff71-4a52-bc5f-f2d1e05f8ef5.png">


The walkthrough video (link above), shows the following API routes were created to test the data. This is demonstrated within Insomnia by adding, updating and removing users, friends, thoughts, and reactions in the user's database.

**USER**
  * Create a new user:  `POST /api/users`
  * Get all users: `GET /api/users`
  * Get a single user by its `id`: `GET /api/users/:userId`

  * Update a user by its `id`: `PUT /api/users/:userId`

  * Delete a user by its `id`: `DEL /api/user/:userId`

**FRIEND**
  * Add a new friend to a user's friend list: `POST /api/users/:userid/friends/:friendId`
  * Delete a friend from a user's friend list: `DEL /api/users/:userid/friends/:friendId`

**THOUGHT**
  * Create a new thought: `POST /api/thoughts/`
  * Get all thoughts: `GET /api/thoughts/`
  * Get a single thought by its `id`: `GET /api/thoughts/:thoughtId`
  * Update a thought by its `id`: `PUT /api/thoughts/:thoughtId`
  * Delete a thought by its `id`: `DEL /api/thoughts/:thoughtId`

**REACTION**
  * Create a reaction: `POST /api/thoughts/:thoughtId/reactions`
  * Delete a reaction by the `reactionId`: `DEL /api/thoughts/:thoughtId/reactions/:reactionId`

At the end of the walk through video, it was demonstrated any changes made to the data in Insomnia was also reflected in Mongo DB

<img width="1023" alt="Updated Users" src="https://user-images.githubusercontent.com/109460560/205632929-32cb584b-6273-499f-b1df-fc415fca03c7.png">

<img width="1030" alt="Updated Thoughts" src="https://user-images.githubusercontent.com/109460560/205632950-ee56a827-33d9-414d-a347-ab8bee71c560.png">


## Development Technologies Used
- Express.js -  used for routing
- MongoDB database - used to build highly available and scalable internet applications, with a flexible schema approach
- Mongoose ODM - library that provides object mapping functionality for MongoDB
- JavaScript date library - to format datestamps
- Insomnia - to test the functionality
- Node.js

## Author
Bhavika Mevada
[Link to Github] - https://github.com/bmevada/Social-Network-API.git
[Link to working application] - https://drive.google.com/file/d/1jy1NNW9Cb2EmmGtIUeroITiuwTnpD4PP/view?usp=sharing
https://watch.screencastify.com/v/bDcFpF2rI9nxdhl4sBlt


