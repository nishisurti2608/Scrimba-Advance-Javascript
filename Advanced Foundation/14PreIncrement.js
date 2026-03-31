let currentTicketNumber = 0

function getNextTicketNumber() {
/*
Challenge:
    1. Move the increment operator to the front 
       of the expression.
*/
  return ++currentTicketNumber //pre-increment operator increments variable's value before the result of the increment is used in an expression
}

// Simulating guests arriving and receiving ticket numbers
console.log(`Guest 1, your ticket number is: ${getNextTicketNumber()}`) 
console.log(`Guest 2, your ticket number is: ${getNextTicketNumber()}`) 
console.log(`Guest 3, your ticket number is: ${getNextTicketNumber()}`)