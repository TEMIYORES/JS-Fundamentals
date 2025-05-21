const { argv } = require("node:process");
const args = argv.slice(2);

console.log(factorial(Number(args[0])));

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
