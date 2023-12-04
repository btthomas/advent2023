const fs = require('fs');

// const file = fs.readFileSync('test.txt', 'utf8');
const file = fs.readFileSync('input.txt', 'utf8');
const lines = file.split('\n');

sum = 0;
const counts = [];
for (let i = 0; i < lines.length; i++) {
  counts[i] = 1;
}

for (let index = 0; index < lines.length; index++) {
  const line = lines[index];

  const [_, card] = line.split(':');
  let [winning, have] = card.split('|').map((t) => t.trim());

  winning = winning.split(' ').map((t) => Number.parseInt(t))
  have = have.split(' ').map((t) => Number.parseInt(t))

  let matches = 0;
  have.forEach((myNum) => {
    if (winning.indexOf(myNum) !== -1) {
      matches++;
    }
  })

  if (matches > 0) {
    for (let i = index + 1; i <= index + matches; i++) {
      counts[i] += counts[index];
    }
  }
}

console.log(counts.reduce((sum, c) => sum + c, 0));