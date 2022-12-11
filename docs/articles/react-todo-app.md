---
title: Building a ToDo App in React.js.
description: React.js is an open source JavaScript library for creating user interfaces. With React, you can build highly interactive web and mobile applications. In this tutorial, we will be building a todo app in React.

head:
  - - meta
    - name: description
      content: React.js is an open source JavaScript library for creating user interfaces. With React, you can build highly interactive web and mobile applications. In this tutorial, we will be building a todo app in React. 
  - - meta
    - name: keywords
      content: react javascript
---


# Building a ToDo App in React.js

React.js is an open source JavaScript library for creating user interfaces. With React, you can build highly interactive web and mobile applications. In this tutorial, we will be building a todo app in React.

## Prerequisites 

Before you start, you should have a basic understanding of HTML, CSS, and JavaScript. You will also need to have Node.js and npm installed on your machine.

## Step 1: Create a React App

The first step is to create a new React app. To do this, open the command line and enter the following command:

```
npx create-react-app todo-app
```

This will create a new directory with the necessary files for a React app.

## Step 2: Install Dependencies

Now that you have created the app, you need to install the necessary dependencies. To do this, enter the following commands in the terminal:

```
cd todo-app
npm install react-router-dom
npm install semantic-ui-react
```

These commands will install the necessary libraries for routing and styling our app.

## Step 3: Set Up the App

Now that you have installed the necessary dependencies, you need to set up your app. To do this, open the `src/App.js` file and add the following code:

```js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import './App.css';

function App() {
  return (
    <Router>
      <Container>
        <Route exact path="/" component={Home} />
        <Route exact path="/todos" component={Todos} />
      </Container>
    </Router>
  );
}

export default App;
```

This code sets up the routing for our app. We will create the `Home` and `Todos` components later in this tutorial.

## Step 4: Create the Home Component

Next, we need to create the `Home` component. To do this, create a new file in the `src/` directory called `Home.js` and add the following code:

```js
import React from 'react';

function Home() {
  return <h1>Welcome to the Todo App!</h1>;
}

export default Home;
```

This code will render a simple heading on the home page.

## Step 5: Create the Todos Component

Now, we need to create the `Todos` component. To do this, create a new file in the `src/` directory called `Todos.js` and add the following code:

```js
import React, { useState } from 'react';
import { List, Button } from 'semantic-ui-react';

function Todos() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      name: 'New Todo',
      isComplete: false
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <List>
        {todos.map(todo => (
          <List.Item key={todo.id}>{todo.name}</List.Item>
        ))}
      </List>
      <Button onClick={handleAddTodo}>Add Todo</Button>
    </div>
  );
}

export default Todos;
```

This code will render a list of todos and a button to add new todos.

## Step 6: Start the App

Now that you have set up the app, you can start it by entering the following command in the terminal:

```
npm start
```

This will start the development server and open the app in your browser. You should now see the home page and be able to add todos.

## Conclusion

In this tutorial, we have seen how to build a todo app in React.js. We started by creating a new app and installing the necessary dependencies. We then set up the app and created the `Home` and `Todos` components. Finally, we started the development server and tested the app in the browser.