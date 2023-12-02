const fs = require('fs');

const file = fs.readFileSync('input.txt', 'utf8');
const lines = file.split('\n');

const digits = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9
}

const keys = Object.keys(digits);

let sum = 0;
lines.forEach((line) => {
  let firstIndex, firstKey, lastIndex, lastKey;
  keys.forEach((key) => {
    const fI = line.indexOf(key);
    if (fI !== -1 && (firstIndex === undefined || fI < firstIndex)) {
      firstIndex = fI;
      firstKey = key;
    }

    const lI = line.lastIndexOf(key);
    if (lI !== -1 && (lastIndex === undefined || lI > lastIndex)) {
      lastIndex = lI;
      lastKey = key;
    }
  })

  // console.log({ firstKey, lastKey })
  sum += digits[firstKey] * 10 + digits[lastKey];
});

console.log(sum);