const fs = require('fs');

const power = [];

// const file = fs.readFileSync('test.txt', 'utf8');
const file = fs.readFileSync('input.txt', 'utf8');

const lines = file.split('\n');
lines.forEach((line, gameNumber) => {
  const right = line.split(':')[1].trim();
  const pulls = right.split(';').map((t) => t.trim());

  let red = 0;
  let blue = 0;
  let green = 0;
  pulls.forEach((pull) => {

    const cubes = pull.split(',').map(t => t.trim());

    cubes.forEach((cube) => {
      let [num, color] = cube.split(' ');
      num = Number.parseInt(num, 10);

      if (color === 'red') {
        if (num > red) {
          red = num;
        }
      } else if (color === 'blue') {
        if (num > blue) {
          blue = num;
        }
      } else if (color === 'green') {
        if (num > green) {
          green = num;
        }
      }

    });

  });
  // console.log({ red, green, blue })
  power.push(red * green * blue);
});

let sum = 0;
power.forEach(p => sum += p);
console.log(sum);
