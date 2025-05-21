const { argv } = require("node:process");
const args = argv.slice(2);
if (args[0]) {
  if (args.length > 1) {
    console.log("Arguments found");
  } else {
    console.log("Argument found");
  }
} else {
  console.log("No argument");
}
