const n = 5;

/**
 * Write your code below!
 */
let str = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i + 1; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);
