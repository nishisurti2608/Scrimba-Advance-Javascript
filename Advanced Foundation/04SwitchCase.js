/**
 * Price List
 * Coffee $2
 * Sandwiches $5
 * Salad $4
 * Lemon Cake $3
*/

// For example: "You selected Salad. That will be $4"

function selectItem(item) {
    let price = 0
/*
Challenge:
1.  Add the remaining price list items as cases.
*/    
    switch(item) {
        case 'coffee':
            price = 2
            break 
        case 'sandwiches':
            price = 5
            break
        case 'salad':
            price = 4
            break  
        case 'lemon cake':
            price = 3 
            break
        default:
            return `Sorry, we don't sell ${item}`
    }
    return `You selected ${item}. That will be $${price}`
}

console.log(selectItem('biscuits'))

/* Notes : 

default can be anywhere but better at the end 

Switch statements use strict equality (===), which means:
- Case sensitivity matters for strings
- Type matters (no coercion)

**Use switch when:**

✅ You're comparing ONE variable against multiple constant values
✅ The cases are discrete, enumerable values (not ranges or complex conditions)
✅ You have 3+ branches (below that, if-else is often clearer)
✅ Fall-through behavior adds value (rare, but powerful)

**Don't use switch when:**

❌ You're checking multiple variables
❌ Conditions involve ranges (age > 18, price < 100)
❌ Logic is complex (combining AND/OR conditions)
❌ You need dynamic/runtime values

Real world example : 

// Perfect for switch
switch (userRole) {
  case 'admin':
    return fullAccess();
  case 'editor':
    return editAccess();
  case 'viewer':
    return readAccess();
  default:
    return noAccess();
}


*/
