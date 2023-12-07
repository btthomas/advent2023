// given time T
// charge for t, go for T - t
// speed = t
// distance(T, t)  = T*t - t^2
// D < T*t - t^2
// t^2 - T*t + D < 0
// a = 1, b = -T, c = D
// (-b +- sqrt(b^2 - 4ac) / 2a
// (T +- sqrt(T^2 - 4D)) / 2

const fs = require('fs');

// const file = fs.readFileSync('test.txt', 'utf8');
// const file = fs.readFileSync('testb.txt', 'utf8');
// const file = fs.readFileSync('input.txt', 'utf8');
const file = fs.readFileSync('inputb.txt', 'utf8');

let [times, dists] = file.split('\n');
let _;

[_, times] = times.split(':').map(s => s.trim());
[_, dists] = dists.split(':').map(s => s.trim());

times = times.split(' ').filter(s => !!s).map(s => Number.parseInt(s.trim()));
dists = dists.split(' ').filter(s => !!s).map(s => Number.parseInt(s.trim()));

let prod = 1;

times.forEach((time, i) => {
  const dist = dists[i];
  const rad = Math.sqrt(time * time - 4 * dist);
  const root1 = (time - rad) / 2;
  const root2 = (time + rad) / 2;
  const first = Math.floor(root1) + 1;
  const last = Math.ceil(root2) - 1;
  const count = last - first + 1;

  if (count > 0) {
    prod *= count;
  }

})
console.log(prod);



