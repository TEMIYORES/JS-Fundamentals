const { argv } = require("node:process");
const args = argv.slice(2);

if (args[0] && args[1]) {
  console.log(args);
  console.log(add(args[0], args[1]));
} else {
  console.log(NaN);
}

function add(a, b) {
  return Number(a) + Number(b);
}
