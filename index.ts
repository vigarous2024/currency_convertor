#! /usr/bin/env node
import inquirer from 'inquirer'

let currency : any = 
    {

    USD : 1, //MAIN CURRENCY
    EURO : 0.91,
    GBP : 0.76,
    INR : 74.57,
    PKR : 280,   

    };


let user_answer = await inquirer.prompt
(
    [
        {
            name : "from",
            message : "Enter from Currency ?",
            type : "list",
            choices: ['USD','EURO','GBP','INR','PKR'],
        },

        {
            name : "to",
            message : "Enter to Currency ?",
            type : "list",
            choices: ['USD','EURO','GBP','INR','PKR'],
        },
        {
            name:"amount",
            message: "Enter your amount",
            type:"number",

        }
    ]    

)

let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount; //USD base currency
let convertedAmount = baseAmount * toAmount
console.log(`The converted amount is : ${convertedAmount}`)