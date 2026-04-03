/* Hoisting is a behaviour where variable and functions declarations are moved to the top of their containing scope during 
compilation phase before code execution */

// Challenge:
// 1. Predict what will be logged to the console.

function getWeather() {
    return "Today's weather is warm and sunny"
}

console.log(getWeather()) // What will this log?

console.log(getNews()) // What will this log?

function getNews() {
    return "A new swimming pool has opened in the town centre..."
}

console.log(trafficInfo) // What will this log?

let trafficInfo = 'All roads are busy right now'

//Functions declaration is done but let and const will throw an error as they are in temporal dead zone 
