const fs = require('fs');

const file = fs.readFileSync('input.txt', 'utf8');
const lines = file.split('\n');

let sum = 0;
lines.forEach((line) => {
  let first, last;

  line.split('').forEach((char) => {
    const pI = parseInt(char, 10);
    if (!isNaN(pI)) {
      if (!first) {
        first = pI;
      } else {
        last = pI;
      }
    }
  })

  if (!last) {
    last = first;
  }

  console.log(first * 10 + last);
  sum += first * 10 + last;

});

console.log(sum);