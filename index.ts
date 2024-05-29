#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter 1st Number", type: "number", name: "firstNumber" },
  { message: "Enter 2nd Number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]); //to take data from user,[]array,{}is object
console.log(answer);
if(answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}
else if(answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}
else if(answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if(answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
}
else{
    console.log("please Enter valid Operator");
}