#! /usr/bin/env node
// shabang
// Import the "inquirer" package to prompt user input
import inquirer from "inquirer";
const number = Math.floor(Math.random() * 10 + 1);
// Function to gather user input using the "inquirer" package
const answer = await inquirer.prompt([
    {
        name: "userInput",
        type: "number",
        message: "Guess any number between 1-10:",
    },
]);
// Check if the user's input matches the random number
if (answer.userInput === number) {
    console.log("Congratulations! You've won.");
}
else {
    console.log("Unfortunately, You've lost");
}
