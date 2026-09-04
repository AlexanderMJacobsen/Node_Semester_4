// "use strict";

// totalGlobVar = "don't do this buh";
// bad standard because you don't declare it and it can still be used

// in strict mode it catches additional stuff
// for example you can't run const public = "this is a var"; as strick mode reserves public

// the problems with var is that it is a global scope
// eg it bleeds into other scopes, or danish: bløder in i andre scopes

{
  var someVal = 123;
  {
    var someVal = 456;
  }
  console.log(someVal);
}
// this isn't an object as it does not have a key : value pair
// it is called a block scope
// we can demonstrate this by using let

{
  let someNewVal = true;
  {
    let someNewVal = false;
  }
  console.log(someNewVal);
}

/* for (var i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
} */

// observe this example of how when i declared as a var bleeds into the console.log(i) because of the setTimeout
// we print 6 times because of 0 -> 5 and it prints 6 because for the loop to stop counting in this, we set
// the condition to stop when =< 5

// getRandomInt(5, 10);

/*
function getRandomInt(min, max) {
  console.log(min, max)
}; */


// in the above example we use hoisting, eg hoisting sails
// meaning we can put function calls above the declared functions
// as delcared functions gets "hoisted" in memory



// enter REPL by typing node in terminal
// Math.floor(Math.random() * (10 - 5 + 1) + 5)
// breakdown
// Math.random() posts 0 -> 1
// We then use * 10 to get 0 -> 10
// but we are interested in 5 -> 10
// so first we get 0 -> 5 by - 5
// now we shift the range to 5 -> 10 by adding 5 afterwards
// so (10-5) + 5
// however its still a float and we want a int so we use Math.floor
// Math.floor(Math.random() * (10 - 5) + 5)
// But we still aren't there, since floor rounds down we can never get 10, so we add +1 to the initial choice
// Math.floor(Math.random() * (10 - 5 + 1) + 5)

const getRandomIntAnonFunction = function (min, max) {
  Math.floor(Math.random() * (max - min + 1) + min);
};

//this func call is anonymous, this simply means the function even if applied a name gets discarded after use

const getRandomIntArrowFunction = (min, max) => {
  Math.floor(Math.random() * (max - min + 1) + min);
};

//this is an arrow function, which also is anonymous
//in this curriculum we will never touch on classes, which is where this could be usefull
// in some langauges it could be reffered to as lamba functions, but not in JS


                                //string and func
function genericActionPerformer(name, action) {
  return action(name);
};

function playingGuitarAction(name) {
  return `${name} likes playing guitar`;
};

console.log(genericActionPerformer("Elias", playingGuitarAction));

// Elias, playing guitar
/*assignemnt using the genericActionPerformer, can you make it say: Elias likes: playing guitar */


// Magnus, watch movies
// try to make an arrov function called watchingMoviesAction

const watchingMoviesAction = (name, action) => {
  return `${name} likes to watch movies`
};

console.log(genericActionPerformer("Magnus", watchingMoviesAction));


// this is a great excercise to practice generic functions
// or so called "callback functions"

// Jacob, sail

console.log(genericActionPerformer("Jacob", (name) => `${name} likes sailing`));

// great example of doing a one liner with the above used concepts.
