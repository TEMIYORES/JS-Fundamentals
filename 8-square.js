const { argv } = require("node:process");
const args = argv.slice(2);

if (args[0]) {
  let num = Number(args[0]);
  let i = 0;
  if (!Number.isNaN(num)) {
    while (i < num) {
      console.log("X".repeat(num));
      i++;
    }
  } else {
    console.log("Missing size");
  }
} else {
  console.log("Missing size");
}
