/*
Express.js
Express.js is a fast, unopinionated, and minimalist web framework for Node.js. 
It provides a robust set of features for web and mobile applications.

HTTP Requests in Express
HTTP requests are the foundation of web interactions. 
In Express, handling these requests is straightforward. 
Express provides several methods to handle different HTTP verbs such as GET, POST, PUT, DELETE, etc.
*/

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

/*
Path and Query Parameters with Express
Path parameters are part of the URL and are used to identify a specific resource,
 whereas query parameters are used to sort, filter, or paginate the resources.
*/

//Path Parameters
//Example:

app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`User ID: ${userId}`);
});

//Query Parameters
//Example:

app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Search query: ${query}`);
});
/*
Controllers
In Express applications, controllers are used to handle the logic for different routes. 
Controllers help to keep the code modular and organized.

Example:
*/

// userController.js
exports.getUser = (req, res) => {
    const userId = req.params.userId;
    res.send(`User ID: ${userId}`);
};

// routes.js
const express = require('express');
const router = express.Router();
const userController = require('./userController');

router.get('/users/:userId', userController.getUser);

module.exports = router;

// app.js
const express = require('express');
const app1 = express();
const userRoutes = require('./routes');

app1.use('/api', userRoutes);

app1.listen(3000, () => {
    console.log('Server is running on port 3000');
});

/*
Import/Export in Node.js
Node.js uses CommonJS module system by default, 
which uses require to import and module.exports to export modules.
*/

// math.js
module.exports.add = (a, b) => a + b;
module.exports.subtract = (a, b) => a - b;

// app.js
const math = require('./math');
console.log(math.add(2, 3)); // 5
console.log(math.subtract(5, 2)); // 3

/*
With ES6, you can also use import and export, but this requires enabling ES6 modules.
*/

// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// app.js
import { add, subtract } from './math';
console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
/*
Routes
Routing in Express is used to determine how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, etc.).

Example:
*/
const express = require('express');
const app2 = express();

app2.get('/', (req, res) => {
    res.send('Hello World!');
});

app2.post('/submit', (req, res) => {
    res.send('Form submitted!');
});

app2.listen(3000, () => {
    console.log('Server is running on port 3000');
});

/*
Summary
Express.js: A minimal and flexible Node.js web application framework.
HTTP Requests: Express handles different HTTP methods with methods like app.get, app.post, etc.
Path and Query Parameters: Used to capture values from the URL and the query string.
Controllers: Help to separate business logic from route definitions.
Import/Export: Use require/module.exports in CommonJS or import/export in ES6 modules.
Routes: Define how the server responds to various endpoints and HTTP methods.
*/