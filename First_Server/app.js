const express = require('express');
const app = express(); //instanciate express

// const app = require('express') this is possible, but because of some tools we need
// we won't be using it
// but how does node know what to return?
// because it searches the node_modules folder!

// console.log(express);
// console.log(app);

//client server model
// client sends http request
// server responds with json to the client

//task create a route for the endpoint / which returns a greeting

          // endpoint   // callback function
app.get('/blablabla', (req, res) => { //req for request, res for response
  res.send({ data: "You never shut up" }); //express convers this js convention to json and sends it to the client
});

app.get('/', (req, res) => {
  res.send({ data: "You talk too much" });
});

// callback function: a function reference provided as an argument
// with the posibility (perhaps) of being called later


// functions as first-class citizens = I can do with functions, what I can do with other data types
// check wiki again, include being passed as an arugent, returned as a function, modsat til java

// How can I send data in a GET request&likesProgramming=true
// url manipulation(check this later)
// path variable: /users/1
// query parameters: here you use ? and key value
// example: ?userId=1
// examle:2 ?userId=1
// meaning path variable and query parameters are your two ways of sending data in a GET
//
// create a /beers route
                  //rec og res can navngives som det passser, tænk tilbage til actions med guitarplayingaction


app.get('/beers/:beerType/:amount', (req, res) => {
  console.log(req.params.beerType);
  console.log(req.params.amount);
  res.send({ data: `You ordered ${req.params.amount} ${req.params.beerType} beers` });
});

// hint for todays homework is regarding that url is always a string
// so if we want the amount as a Number we need to parse it

//remunder app.get is just a statement
// //query ?wallet=123&keys=my house&my_baby=Sam
app.get('/bars/forgottenItems', (req, res) => {
  console.log(req.query);
  res.send({ data: req.query });
})

//square bracket notation, and . noation, in above case we used . notation for beer types
//

//we respond with json because it is a generic and simple format
// check json.org
// it is super simple to write a parser for json

//if ambitious, write your own code langauge and make a json parser for it

//this always has to be in the bottom this is both for readability,
// but also middleware
app.listen(8080);
