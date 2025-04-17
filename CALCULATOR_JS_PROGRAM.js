// ANUGYA MEHROTRA

// JAVASCRIPT CALCULATOR PROGRAM
// This program is a simple calculator that takes two numbers and an operator as input from the user and performs the specified operation. It uses functions to handle each operation separately and checks for valid integer inputs.

//Number input variables

let numInput1 = parseInt(prompt("Enter first number: "));
let numInput2 = parseInt(prompt("Enter second number: "));

//Operator variables & result variables (used for checking what type of operator is to be applied to the two number inputs)

let operator = prompt("Enter operator (+, -, *, /): ");
let result = 0;


//If-else statements for operations and checking what type of operator is to be used between the two number inputs

if (!Number.isInteger(numInput1) || (!Number.isInteger(numInput2))){
   console.log("Your numbers are not valid integers");
} else if (operator == "+"){
  additionCalculation()
} else if (operator =="-"){
  substractionCalculation()
} else if (operator =="*"){
  multiplicationCalculation()
} else if (operator=="/"){
  divisionCalculation()
} else {
  console.log("An error occured. Please provide input and valid integer format and rerun the code.")
}


//Seperate functions for the operations
function additionCalculation(){
    result = numInput1 + numInput2;
    console.log(`Your result is ${result} this was achieved through the addition function using your two input numbers`);
}


function subtractionCalculation(){
    result = numInput1 - numInput2;
    console.log(`Your result is ${result}; this was achieved through the substraction function using your two input numbers`);
}


function multiplicationCalculation(){
  result = numInput1 * numInput2
  console.log(`Your result is ${result}; this was achieved through the multiplication function using your two input numbers`);
}


function divisionCalculation(){
  result = numInput1 / numInput2;
  console.log(`Your result is ${result}; this was achieved through the divison function using your two input numbers`);
}

