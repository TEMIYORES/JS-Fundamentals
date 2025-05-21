const { argv } = require("node:process");

if (argv[2]) {
  console.log(argv);
} else {
  console.log("No argument");
}
