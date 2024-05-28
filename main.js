// we are importing inquirer module which is a commad line interface anf node.js
import inquirer from "inquirer";
// declare a const answer and assign it to result of inquirer.prompt funtion
const answer = await inquirer.prompt([{
        name: "paragraph",
        type: "input",
        message: "Enter your paragraph to count the word."
    }]);
const words = answer.paragraph.trim().split(" ");
// print the array of words
console.log(words);
// print the word of the paragraph tto console
console.log(`your paragraph word count is ${words.length}`);
