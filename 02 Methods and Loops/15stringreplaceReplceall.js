const sentence = "I love you with all my heart!"

console.log(sentence.replaceAll(/\b(love|heart)\b/g, function(){
    return `💜`
}))

//love
//heart
//I undefined you with all my undefined!