/*
Challenge:
1. Use numeric separators (_) to separate out 
   the digits into chunks of 3 so they are easier to read. 
*/


const tomsBankBalanceGBP = BigInt(9_007_199_254_740_991_345)

console.log(Math.sqrt(tomsBankBalanceGBP))


// You won't able to use number data type operation with BigInt 
// BigInt used for pricise handling of large integer numbers such as cryptography or while interacting with DB that uses large identifiers
