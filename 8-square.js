const { argv } = require("node:process");
const args = argv.slice(2);

if (args[0]) {
  let num = Number(args[0]);
  let i = 0;
  while (i < num) {
    console.log("X".repeat(num));
    i++;
  }
}
