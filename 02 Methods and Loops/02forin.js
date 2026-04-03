const character1 = {
    title: 'Ninja',
    emoji: '🥷',
    powers: ['agility', 'stealth', 'aggression'],
}

for (let property in character1) {
    console.log(property)
}

/* it will itterate over object property and if you want to access property value then use [] */

for (let property in character1){
    console.log(character1[property])
}


/* for in v/s for of

-> Both itterates over object data structure ( Yes type of arrays is an Object )
-> for in itterates over all enumerable property keys of an object 
-> for of iterates over the values of an iterable object ( examples of iterable objects include arrays strings)
-> Both loop works with const and let. If you want to reassign then use let.



*/