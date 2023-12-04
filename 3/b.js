const fs = require('fs');

// const file = fs.readFileSync('test.txt', 'utf8');
const file = fs.readFileSync('input.txt', 'utf8');

const lines = file.split('\n');
const digits = /\d/;

let sum = 0;

const maybeGears = {};

for (let rowIndex = 0; rowIndex < lines.length; rowIndex++) {
  const line = lines[rowIndex];
  let number = [];

  for (let colIndex = 0; colIndex < line.length; colIndex++) {
    let check = false;

    if (digits.test(line[colIndex])) {
      number.push(line[colIndex])
      // console.log(colIndex, number)

      if (colIndex === line.length - 1) {
        check = true;
        colIndex += 1;
      }
    } else if (number.length) {
      check = true;
    }

    if (check) {
      const numStarted = colIndex - 1 - number.length;
      const numEnded = colIndex;

      const val = Number.parseInt(number.join(''), 10);

      for (let rI = rowIndex - 1; rI <= rowIndex + 1; rI++) {
        if (rI < 0 || rI >= lines.length) {
          continue;
        }
        for (let cI = numStarted; cI <= numEnded; cI++) {
          if (cI < 0 || cI >= line.length) {
            continue;
          }

          if (lines[rI][cI] === '*') {
            const key = `${rI}-${cI}`;
            if (maybeGears[key]) {
              maybeGears[key].push(val);
            } else {
              maybeGears[key] = [val];
            }

          }
        }
      }

      number = [];
    }
  }
}

Object.keys(maybeGears).forEach(key => {
  const arr = maybeGears[key];

  if (arr.length === 2) {
    sum += arr[0] * arr[1];
  }
})
// console.log(maybeGears);
console.log(sum);