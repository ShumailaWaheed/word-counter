#! /usr/bin/env node

// Import the 'inquirer' module, which is a command line interface for node.js

import inquirer from "inquirer"

// Declare a constant 'answers' and assign it to the result of inquirer.prompt function

const answers: {
    Sentence:string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the words",
    }   
])

const words = answers.Sentence.trim().split(" ");
    const wordCount = words.length;

    // Print the array of words and the word count to the console
    console.log(words);
    console.log(wordCount);
