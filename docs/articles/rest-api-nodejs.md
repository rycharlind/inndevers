---
title: Creating a REST API in Node.js.
description: Creating a REST API in Node.js is relatively easy. In this tutorial, we will walk through setting up a basic REST API in Node.js.

head:
  - - meta
    - name: description
      content: Creating a REST API in Node.js is relatively easy. In this tutorial, we will walk through setting up a basic REST API in Node.js.
  - - meta
    - name: keywords
      content: rest-api nodejs
---

# Creating a REST API in Node.js

Creating a REST API in Node.js is relatively easy. In this tutorial, we will walk through setting up a basic REST API in Node.js.

## Prerequisites

Before you start, you will need the following: 

- Node.js
- npm

## Step 1: Setup the Project

The first step is to create a new project directory and initialize it with npm. To do this, run the following commands in your terminal:

```bash
mkdir my-rest-api
cd my-rest-api
npm init
```

When prompted, enter the project information.

## Step 2: Install Dependencies

Next, we need to install the necessary dependencies for our project. We will need the express framework to handle requests, and body-parser to parse the request body. To install these, run the following command:

```bash
npm install express body-parser --save
```

## Step 3: Create the Server

Now we can create the server. Create a file called `server.js` in the project directory and add the following code:

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Add routes here

// start the server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
```

This sets up the basic server with the necessary dependencies.

## Step 4: Create the Routes

Next, we will create the routes for our API. We will create a simple route that returns a list of users. To do this, add the following code to the `server.js` file:

```javascript
// get a list of users
app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' }
    ];
    res.json(users);
});
```

This should return a list of users when a `GET` request is made to the `/users` endpoint.

## Step 5: Start the Server

Now that our API is set up, we can start the server. To do this, run the following command:

```bash
node server.js
```

This will start the server and you should see the following output

```
Server is listening on port 3000
```

## Step 6: Test the API

Finally, we can test the API by making a request to the `/users` endpoint. To do this, you can use [Postman](https://www.getpostman.com/) or any other API testing tool. You should get a response similar to this:

```json
[
    {
        "id": 1,
        "name": "John Doe"
    },
    {
        "id": 2,
        "name": "Jane Doe"
    }
]
```

## Conclusion

In this tutorial, we have walked through setting up a basic REST API in Node.js. We have set up the project, installed the necessary dependencies, created the server, added routes, and tested the API. With this foundation, you can now build more complex APIs.