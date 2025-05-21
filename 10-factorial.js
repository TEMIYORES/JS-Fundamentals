const { argv } = require("node:process");
const args = argv.slice(2);

if (args[0]) {
  console.log(factorial(Number(args[0])));
} else {
  console.log(NaN);
}

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
