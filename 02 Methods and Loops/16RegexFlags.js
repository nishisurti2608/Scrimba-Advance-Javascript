
const text = "Please switch off the WIFI before you leave."

const regex = /wifi/gi

const doesMatch = regex.test(text) //boolean

console.log(doesMatch)
/* 
i=case sensetive 
g = global whole sentence  */


/* const text = "Please switch off the WIFI before you leave."
const userInput = "wifi"

const regex = new RegExp(userInput, 'gi')

const doesMatch = regex.test(text) //boolean

console.log(doesMatch) */