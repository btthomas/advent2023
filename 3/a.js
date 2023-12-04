const fs = require('fs');

// const file = fs.readFileSync('test.txt', 'utf8');
const file = fs.readFileSync('input.txt', 'utf8');

const lines = file.split('\n');
const digits = /\d/;

let sum = 0;

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

      let pleaseAdd = false;

      for (let rI = rowIndex - 1; rI <= rowIndex + 1; rI++) {
        if (pleaseAdd || rI < 0 || rI >= lines.length) {
          continue;
        }
        for (let cI = numStarted; cI <= numEnded; cI++) {
          if (pleaseAdd || cI < 0 || cI >= line.length) {
            continue;
          }

          if (!digits.test(lines[rI][cI]) && lines[rI][cI] !== '.') {
            pleaseAdd = true;
          }
        }
      }
      if (pleaseAdd) {
        sum += val;
      }
      number = [];
    }
  }
}

console.log(sum);