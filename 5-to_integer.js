const { argv } = require("node:process");
const args = argv.slice(2);

if (args[0]) {
  let num = Number(args[0]);
  if (!(num == "NaN")) {
    console.log(`My number: ${Math.floor(num)}`);
  } else {
    console.log("Not a number");
  }
}
