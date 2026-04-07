/* 
𝖥 - 𝖿𝖺𝗅𝗌𝖾
𝖴 - 𝗎𝗇𝖽𝖾𝖿𝗂𝗇𝖾𝖽
𝖭 - 𝗇𝗎𝗅𝗅
𝖹 - 𝗓𝖾𝗋𝗈 (𝟢)
𝖮 - "" (𝖾𝗆𝗉𝗍𝗒 𝗌𝗍𝗋𝗂𝗇𝗀 - 𝗍𝗁𝗂𝗇𝗄 "𝖮" 𝗅𝗂𝗄𝖾 𝖺 𝖼𝗂𝗋𝖼𝗅𝖾, 𝖾𝗆𝗉𝗍𝗒!)
𝖭 - 𝖭𝖺𝖭
0n - for Big Integer

𝖤𝗏𝖾𝗋𝗒𝗍𝗁𝗂𝗇𝗀 𝖾𝗅𝗌𝖾 𝗂𝗌 𝗍𝗋𝗎𝗍𝗁𝗒! ✨

𝖯𝗋𝗈 𝗍𝗂𝗉: [] 𝖺𝗇𝖽 {} 𝖺𝗋𝖾 𝖭𝖮𝖳 𝖿𝖺𝗅𝗌𝗒—𝗍𝗁𝖾𝗒'𝗋𝖾 𝗍𝗋𝗎𝗍𝗁𝗒! */

// Nullisg Coalescing Operator if left hand operator in null or undefined 

function fetchUserBalance() {
    
    // This is where we would make call to bank's database
    
    const userBalance = 0 
    return userBalance
}

/*
Challenge:
    1. Swap the logical OR operator for a Nullish Coalescing operator.
    Ignore any red lines you see in the editor!
*/

const balance = fetchUserBalance()
const displayBalance = balance ?? "currently not available"

console.log(`Your balance is ${displayBalance}.`)

