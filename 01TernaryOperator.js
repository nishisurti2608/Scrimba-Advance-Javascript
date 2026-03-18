// condition (should return truthy or flasy vlaue) ? expression1 (if condition is truthy) : expression2 (if condition is falsy)

const exerciseTimeMins = 20;

// let message = "";

// if (exerciseTimeMins < 30) {
//   message = "You need to try harder!";
// } else {
//   message = "Doing good!";
// }

const message =
  exerciseTimeMins < 30 ? "You need to try harder!" : "Doing good!";
console.log(message);
