'use strict';

const average = (a, b) => {
  const res = (a + b) / 2;
  return res;
};

console.log('average of 6 and 4:', average(6, 4));

const square = (x) => {
  const res = Math.pow(x, 2);
  return res;
};

console.log('square of 5:', square(5));

const cube = (x) => {
  const res = Math.pow(x, 3);
  return res;
};

console.log('cube of 3:', cube(3));

for (let i = 1; i < 11; i++) {
  const res = average(square(i), cube(i));
  console.log(res);
}

