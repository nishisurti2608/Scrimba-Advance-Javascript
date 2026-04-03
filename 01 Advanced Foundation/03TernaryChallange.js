/* Getting only elemnts from an array  */

const ages = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18]

const elder = ages.filter(function(age){

    return age>=18


})


console.log(elder)