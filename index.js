// const express = require('express')
// const app = express()
// // express request ko accept krta hai then middleware ko bhejta hai then next process...

// //ise se hm data pd skte hai json form mein
// app.use(express.json());
// // yeh line se form encrypted form me jayega backend pe app direcrtly read nhi kr skte
// app.use(express.urlencoded({extended:true}));
// // yeh niche middleware h uyeh request accept krega and next() ki help se route pe bheje ga 
// // app.use(function(res,req,next){
// //   console.log("middleware chla");
// //   next();
// // }) 

// // app.use(function(res,req,next){
// //   console.log("middlewarenchla 1 ek or bar");
// //   next();
// // })

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// // app.get('/about', function (req, res) {
// //   res.send('yeh about page hai bhai.....')
// // })

// // app.get('/profile', function (req, res,next) {
// //   return next(new Error("something went wrong"));
// //   // yeh error dikhe ga backend pe
// //   // res.send('yeh about page hai bhai.....')
// // })

// // // error handlinng ih hamesha end te he likhna a
// // app.use(function(err,req,res,next){
// //   res.status(500).send('Something Broken!!!, but pta ni ki hoya :)');

// //   //yeh dikhe ga frontend pe
// // })

// app.listen(3000, function(){
//   console.log("its running")
// })



/// new project ejs

// const express = require('express');
// const app = express();
// const path = require('path');

// app.use(express.json());
// app.use(express.urlencoded({extende:true}));
// app.use(express.static(path.join(__dirname,'public')))
// app.set('view engine', 'ejs');
// app.get("/profile/:username", function(req,res){
//   // res.render("index")
//   res.send(`welcome ${req.params.username}`)
// });

// app.listen(3000,function() {
//   console.log("its running")
// })