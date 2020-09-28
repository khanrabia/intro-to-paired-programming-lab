console.log("Write your code below!")

function sayHello(name){
  console.log(`Hello ${name}!`);

}

function letterCount(name){
  console.log(name + ' ' + 'Your name has' +  ' ' + ' ' + name.length + ' ' + 'letters!');
}

function greetPeople(names){
  let count = letterCount;
  let hello = sayHello;
  console.log(`Hello ` + names[0] + '!' + ' ' + 'your name has' + ' ' + names.length + ' ' + 'letters.');
  console.log('Hello ' + names[1] + '!' + ' ' + 'your name has' + ' ' + names.length + ' ' + 'letters.');
}

function speakingGrandma(phrase){

}


function kebabToTitleCase(filenames){

}

//Write your test cases below this comment

//say hello test casses
sayHello('Ann'); // Hello, Ann;
sayHello('Reuben'); // Hello, Reuben;

// Letter Count test casses
letterCount('Ann'); // Ann, your name has 3 letters. That name's not that long!
letterCount('Reuben'); // Reuben, your name has 6 letters. That's a pretty long name!

// Greet people test casses
  greetPeople(["Ann", "Reuben"])



//do not editing anything below this comment.
module.exports = {
  sayHello,
  letterCount,
  greetPeople,
  speakingGrandma,
  kebabToTitleCase
};
