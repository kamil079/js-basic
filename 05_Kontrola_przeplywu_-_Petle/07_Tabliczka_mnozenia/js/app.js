const n = 3;
const calc = [];

/**
 * Write your code below!
 */

for(let i = 1; i <= n; i++) {
    let row = [];
    for(let j = 1; j <= n; j++) {
        row.push(`${i} x ${j} = ${i*j}`)
    }
    calc.push(row);
}

console.log(calc)
