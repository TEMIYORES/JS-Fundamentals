const { argv } = require("node:process");
const args = argv.slice(2);

if (args[0] && !args[1]) {
  console.log(`${args[0]} is undefined`);
} else if (args[0] && args[1]) {
  console.log(`${args[0]} is ${args[1]}`);
} else {
  console.log(`undefined is undefined`);
}
