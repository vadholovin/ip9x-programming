'use strict';

console.log('For loop output:');
for (let i = 15; i <= 30; i += 2) {
  console.log(i);
}

const range = (start, end) => {
  for (let i = start; i <= end; i += 2) {
    console.log(i);
  }
};

console.log('Function output:');
range(15, 30);
