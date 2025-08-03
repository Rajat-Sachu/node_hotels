// function add(a,b){
//     return a + b ;
// }

// var add = (a,b) =>{return  a + b}
//  var add = (a,b) => a + b ;

// var result = add(3,5);
// console.log(result)

// (function(){
//     console.log("heelo Rajat");
// })();

// how to use callback function 

// function greet(){
//     console.log("hello Rajat verma")
// }
 
// const add = function(a,b,callback){
//    return a + b ;
//    callback();
// }

// add(3,4,greet())

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user)

// fs.appendFile('greeting.txt', user.username + '\n',() =>{
//     console.log("hello world")
// })

// const notes = require('./notes.js');
//  var age = notes.age;
//  var result = notes.addNumber(age , 6)

//  console.log(age);
//  console.log(`result is now + ${result}`)

// *************How to use loadash***********

// var _ = require('lodash');
// var data = ['person','person',1,2,3,4,'age',2,'age'];
// var filter = _.uniq(data);
// console.log(filter);

// console.log(_.isString('5'))

const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const PORT = process.env.PORT || 3000 ;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes')

app.get('/', function(req,res) {
    res.send('Welcome to my hotel... How can i help you ?, We have list of menu')
})

// app.get('/rajat', function(req,res) {
//     res.send('Hello Rajat')
// })

// app.get('/userinfo', function(req,res) {
//     var customized_data ={
//         firstName:"rajat",
//         lastName:"verma",
//         age:'25'
//     }
//     res.send(customized_data)
// })

//api
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);


app.listen(PORT, ()=>{
    console.log('server is listening on port 3000')
});

