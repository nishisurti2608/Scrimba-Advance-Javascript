let firstName = 'Tomas'
let newName = firstName
newName = 'Thomas'

console.log('firstName', firstName)
console.log('newName', newName)


const names = ['Ben', 'Belen', 'Barbara', 'Betty']
const updatedNames = names
updatedNames[0] = 'Zoe'

console.log('names', names)
console.log('updatedNames', updatedNames)


/* Shallow Copy : first level copy for nested array or objects a shallow copy still holds refrences to the original nested 
object or array and Deep Copy  copies entire array or object */