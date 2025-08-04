require('dotenv').config();
const express = require('express');
const app = express();

const db = require('./db');
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Middleware Function
const logRequest = (req, res, next) => {
  console.log(`[${new Date().toLocaleDateString()}] Request Made to: ${req.originalUrl}`);
  next();
};

app.use(logRequest);

// Route imports
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to my hotel... How can I help you? We have a list of menu items.');
});

// API routes
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server is listening on port ${PORT}`);
});


/* ---------------------------- Archive / Practice Area --------------------------- */

// ✅ Arrow function examples
// const add = (a, b) => a + b;
// console.log(add(3, 5));

// ✅ IIFE
// (function() {
//     console.log("Hello Rajat");
// })();

// ✅ Callback example (CORRECTED)
// function greet() {
//     console.log("Hello Rajat Verma");
// }
// const addWithCallback = function(a, b, callback) {
//     const sum = a + b;
//     callback();
//     return sum;
// };
// console.log(addWithCallback(3, 4, greet));

// ✅ Node.js core modules example
// const fs = require('fs');
// const os = require('os');
// const user = os.userInfo();
// fs.appendFile('greeting.txt', `Hello ${user.username}\n`, () => {
//     console.log("Greeting saved.");
// });

// ✅ Custom module example
// const notes = require('./notes.js');
// const age = notes.age;
// const result = notes.addNumber(age, 6);
// console.log(`Age: ${age}`);
// console.log(`Result is now: ${result}`);

// ✅ Lodash usage
// const _ = require('lodash');
// const data = ['person', 'person', 1, 2, 3, 4, 'age', 2, 'age'];
// const filtered = _.uniq(data);
// console.log(filtered);
// console.log(_.isString('5'));

