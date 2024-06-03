bB# 🎯 Backend Mastery ✅

# 🎯 Node.js Basics:

## 🔥 Introduction to Node.js ✅

-> Node.js is not a programming language, technology, framework, library. It is a 'JavaScript runtime environment'.

In the early days, building backend with JavaScript was not possible because it didn't have the functionalities which can be used to build backend.

Ryan Dahl thought that it should be possible to build backend with Javascript.

NodeJs is a Javascript runtime environment, It is a combination of chrome's V8 engine and on top of it a Javascript wrapper. These 2 thing combine is known as NodeJs.

## 🔥 Installing Node.js and npm. ✅

-> Link: [nodejs.org]('https://nodejs.org/en/')

Download the LTS version.

## 🔥 npm ✅

-> NPM stands for Node package manager, It is known by this name but if you go to their website they don't have a meaning of npm. For your understanding, npm is a node package manager which is more like an app store or play store where we can download the node packages and use them in our application or code.

## 🔥 Working with modules. ✅

## 🔥 File system operations. ✅

-> Go to node.js docs and learn the fs module.

## 🔥 Understanding HTTP module ✅

-> These are nothing but some rules to be followed in order to use the internet.

# 🎯 Express.js, Routing & Middleware ✅

-> These are the topics that are discussed in this section:

## 🔥 Express.js Framework:

## 🔥 Introduction to Express.js.

-> Express.js, commonly referred to as Express, is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. Here are some key points about Express.js:

<b>Minimalistic and Unopinionated:</b> Express is designed to be a lightweight framework, providing the fundamental building blocks for web applications without imposing any specific structure or rules. This allows developers to have the flexibility to structure their applications as they see fit.

<b>Routing:</b> Express offers a powerful routing mechanism that allows you to handle different HTTP methods (GET, POST, PUT, DELETE, etc.) and define routes for your application, making it easier to manage different endpoints.

<b>Middleware:</b> Middleware functions are a key feature of Express. They are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. Middleware can execute any code, modify the request and response objects, end the request-response cycle, and call the next middleware function. This allows for a modular and reusable approach to handling HTTP requests.

<b>Template Engines:</b> Express supports various template engines like Pug (formerly Jade), EJS, and Handlebars, enabling you to generate dynamic HTML content by embedding JavaScript.

<b>Static Files:</b> Serving static files (such as images, CSS, JavaScript) is straightforward with Express. You can use the built-in middleware function to specify a directory from which to serve static assets.

<b>RESTful APIs:</b> Express is well-suited for building RESTful APIs. It provides a simple and clean way to create endpoints and handle requests and responses, making it a popular choice for API development.

<b>Community and Ecosystem:</b> Express has a large and active community, with many middleware modules and plugins available to extend its functionality. This ecosystem allows developers to add features like authentication, database integration, and more with ease.

<b>Integration with Databases:</b> While Express itself is not a database framework, it can be easily integrated with various databases such as MongoDB, MySQL, PostgreSQL, and others through the use of appropriate Node.js modules.

Overall, Express.js is a powerful and versatile framework that simplifies the process of building web applications and APIs with Node.js. Its simplicity, flexibility, and extensive ecosystem make it a popular choice among developers.

## 🔥 Setting up a basic Express application.

Go to npm website and intsall express

```
npm i express
```

```
bun i express
```

## 🔥 Routing.

```
const express = require("express");

const app = express();

// home route
app.get("/", function (req, res) {
  res.send("home page");
});

// another route
app.get("/profile", function (req, res) {
  res.send("profile page");
});

app.listen(3000);
```

## 🔥 Middleware.

## 🔥 Request and response handling.

## 🔥 Error handling.
