const { argv } = require("node:process");
const args = argv.slice(2);

if (args.length) {
  console.log(args[0]);
} else {
  console.log("No argument");
}
