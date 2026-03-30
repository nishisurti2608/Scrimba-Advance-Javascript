function displayTrafficLight(light){
    console.log(light)
}

setTimeout(displayTrafficLight('🟢'), 3000) // as soon as you pass parameter to function you are invoking function


setTimeout(displayTrafficLight, 3000, '🟢') // after delay ( delay is optional by default delay is 0) you can add all parameters of functions 


displayTrafficLight('🔴')









































