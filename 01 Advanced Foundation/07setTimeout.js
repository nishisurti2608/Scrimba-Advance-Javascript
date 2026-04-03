/* Java script executes from top to bottom setTimeout will move that piece of code from top to down manner and run it after specified time 

Syntax : setTimeout(function, delay, [param1, param2, ...]); here delay is in miliseconds */

console.log('What is the capital of Peru?')

setTimeout(function(){
    console.log('Lima!')
}, 3000) //Here we have used inline funtion

setTimeout(function(){
    console.log('Ready for next question?')
}, 3000)



/*
Challenge:
1. Make the third console.log fire 3 seconds after 
   the answer appears.
*/