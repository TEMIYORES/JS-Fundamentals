const { argv } = require("node:process");
const args = argv.slice(2);

if (args[0]) {
  let num = Number(args[0]);
  if (!Number.isNaN(num)) {
    console.log(`My number: ${Math.floor(num)}`);
  } else {
    console.log("Not a number");
  }
}
