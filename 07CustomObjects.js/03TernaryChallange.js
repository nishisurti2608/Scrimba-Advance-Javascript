function gamer(name,score){
return {
  name,
  score,
  incrementScore(){
    this.score++
  }
}  
}

const sam = gamer('sam',30)
console.log(sam)
sam.incrementScore()
console.log(sam)