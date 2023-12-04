const fs = require('fs');

const RED = 12;
const GREEN = 13
const BLUE = 14;

const bad = [];

// const file = fs.readFileSync('test.txt', 'utf8');
const file = fs.readFileSync('input.txt', 'utf8');

const lines = file.split('\n');
lines.forEach((line, gameNumber) => {
  const right = line.split(':')[1].trim();
  const pulls = right.split(';').map((t) => t.trim());

  pulls.forEach((pull) => {
    const cubes = pull.split(',').map(t => t.trim());

    cubes.forEach((cube) => {
      let [num, color] = cube.split(' ');
      num = Number.parseInt(num, 10);

      if (color === 'red') {
        if (num > RED) {
          bad[gameNumber] = true;
        }
      } else if (color === 'blue') {
        if (num > BLUE) {
          bad[gameNumber] = true;
        }
      } else if (color === 'green') {
        if (num > GREEN) {
          bad[gameNumber] = true;
        }
      }
    });
  });
});

let sum = 0;

for (let i = 0; i < lines.length; i++) {
  if (!bad[i]) {
    sum += i + 1;
  }
}

console.log(sum);