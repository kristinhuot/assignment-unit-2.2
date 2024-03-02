// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and give it the value of 'Dane' 
// Then we set up a conditional statement where the name value must exactly equal Mary. 
// If the value is exactly equal to Mary, it will console.log 'Hi, Mary!'
//Otherwise, it will console. log 'How dou do you?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called 'secret', giving it no value. We make an additional variable called 'code' and give it the value of 123
// Then we set up a conditional statement where when the 'code' value is exactly equal to 123, the 'secret' variable will show as 'super' and the 'code' value will show as '123 * 2', or 246.
// Otherwise, if the 'code' value is greater than 250, the 'secret' variable will show as 'duper'
//We console.log 'secret'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make 3 variables: 'isStudent' and set it to the boolean value of true, 'age' and set it to the value of 34, and 'zip' setting it to the value of 55407
// Then we set up a compound conditional statement where: if the value of 'isStudent' is exactly equal to true AND the 'zip' value is greater than 8000, it will console.log 'You're a student on the West Coast!'
// Otherwise, if 'isStudent' is exactly equal to the boolean value of false OR the 'age' is less than 30, it will console.log 'What are your hobbies?'
// Otherwise, if 'isStudent' is exactly equal to the value of true, it will console.log 'Welcome to Prime'. If none of the above situations are true, it will console.log 'How about the weather?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// FIX - colorOne is set to 'red', but the instructions ask to set it to blue. colorTwo is set to 'blue', but the instructions say to set it to red. 
// Should be let colorOne = 'blue'; and let colorTwo = 'red';
//FIX - instructions say that if mix is equal to 'true, we would set colorOne AND colorTwo to 'purple'. It currently only shows colorOne so would need to add colorTwo
// Should be colorTwo = 'purple'; after line 143

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

//FIX - Instructions says to have two variables. We have one variable and one constant. 
//Should be let temp = 40; and let time = 4; 
//FIX - Instructions say to check if 'temp' is higher than 39 AND if time is greater or equal to 4. It is currently set up as an OR statement 
//Should be (if temp > 39 && time >= 4)

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

//FIX - Instructions say to have two variables. We have one variable and one constant. 
//Should be let age = 21 and let minAge = 21; 
//FIX - Instructions say to check if 'age' is greater than or equal to minAge, the current code is checking if 'minAge' is less than or equal to 'age'. While that would work, we should adjust so that it matches the instructions. 
//Should be if(age >= minAge) 
//FIX - Instructions say that if age is greater than or equal to minAge, we would console.log 'enter'. The current code would console.log 'no entry' 
//Should be
// if(age >= minAge) {
// console.log('enter');
// } else {
//  console.log('no entry');

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

