const fs = require('fs');

// const file = fs.readFileSync('test.txt', 'utf8');
const file = fs.readFileSync('input.txt', 'utf8');
const lines = file.split('\n');

let seeds, rest, _;
[seeds, _, ...rest] = lines;
[_, seeds] = seeds.split(':').map(s => s.trim())
seeds = seeds.split(' ').map((s) => Number.parseInt(s.trim()))

let low = Number.MAX_SAFE_INTEGER;

const maps = parseSections(rest);
let map = maps[0];
let destination = 0, source = 0, len = 0, cur = 0;

console.time('A');
for (let i = 0; i < seeds.length; i++) {
  if (i % 2 === 0) {
    console.timeEnd('A');
    console.time('A');
    continue;
  }

  for (let d = 0; d < seeds[i]; d++) {
    cur = seeds[i - 1] + d;

    for (let mapsI = 0; mapsI < maps.length; mapsI++) {
      map = maps[mapsI];

      for (let mapI = 0; mapI < map.length; mapI++) {
        ({ destination, source, len } = map[mapI]);
        if (cur >= source && cur < source + len) {
          cur += destination - source;
          break;
        }
      }
    }
    if (cur < low) {
      low = cur;
    }
  }
}

console.log(low);

function parseSections(rest) {
  let maps = [];

  let sections = [];
  rest.forEach((line) => {
    if (line === '') {
      // end of section
      const map = [];

      sections.forEach((section) => {
        const [destination, source, len] = section.split(' ').map(t => Number.parseInt(t));
        map.push({ destination, source, len });
      })

      maps.push(map);
      sections = [];
    } else if (line.indexOf(':') !== -1) {
      // ignore?
    } else {
      sections.push(line);
    }
  });

  return maps;
}


