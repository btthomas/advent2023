const fs = require('fs');

const file = fs.readFileSync('test.txt', 'utf8');
// const file = fs.readFileSync('input.txt', 'utf8');
const lines = file.split('\n');

sum = 0;

const score = [0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]

lines.forEach((line) => {
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

  sum += score[matches]
})

console.log(sum);