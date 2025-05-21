const { argv } = require("node:process");
const args = argv.slice(2);

if (args[0]) {
  let num = Number(args[0]);
  if (!(num == "NaN")) {
    console.log(`${Math.floor(num)}`);
  } else {
    console.log("Not a number");
  }
} else if (args[0] && args[1]) {
  console.log(`${args[0]} is ${args[1]}`);
} else {
  console.log(`undefined is undefined`);
}
