const fs = require('fs');

// const file = fs.readFileSync('test.txt', 'utf8');
const file = fs.readFileSync('input.txt', 'utf8');
const lines = file.split('\n');

let seeds, rest, _;
[seeds, _, ...rest] = lines;
[_, seeds] = seeds.split(':').map(s => s.trim())
seeds = seeds.split(' ').map((s) => Number.parseInt(s.trim()))

const locs = [];

seeds.forEach((seed) => {
  // const seed = seeds[0];
  let cur = seed;

  let sections = [];

  rest.forEach((line) => {
    if (line === '') {
      // end of section
      // const map = [];
      let done = false;
      sections.forEach((section) => {
        if (done) {
          return;
        }

        const [destination, source, len] = section.split(' ').map(t => Number.parseInt(t));
        // map.push({ destination, dEnd: destination + len - 1, source, sEnd: source + len - 1, len });
        if (cur >= source && cur < source + len) {
          const offset = cur - source;
          cur = destination + offset;
          done = true;
        }
      })
      // map.sort((a, b) => a.source - b.source);

      sections = [];
    } else if (line.indexOf(':') !== -1) {
      // ignore?
    } else {
      sections.push(line);
    }
  });

  console.log(seed, cur);
  locs.push(cur);
})

console.log(locs.sort((a, b) => a - b))