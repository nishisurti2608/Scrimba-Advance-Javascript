/* Object property value shorthand 

function gamer(name, score) {
    return {
        name, // Object Property Shorthand
        score: score
    }
}
 Factory Function :
 
 Pro : Syntax is fimiliar and easy to read
 cons : no inheritance 

 */


function gamer(name, score) {
    return {
        name,
        score,
        // Factory Function
        incrementScore() {
            this.score++
        }
    }
}

const alice = gamer('Alice', 10)
const dave = gamer('Dave', 3)
const ash = gamer('Ash', 9)

alice.incrementScore()
dave.incrementScore()
ash.incrementScore()
dave.incrementScore()
ash.incrementScore()
console.log(alice)
console.log(dave)
console.log(ash)
