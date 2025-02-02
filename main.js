import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter the First Number:", type: "number", name: "firstNumber" },
    { message: "Enter the Second Number:", type: "number", name: "secondNumber" },
    { message: "Please select the operator you would like to perform the operation:", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Multiplication", "Division"] },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select a valid operator");
}
