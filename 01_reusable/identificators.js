'use strict';

let name = 'Vad Holovin';
const BIRTHYEAR = 1983;

const greetMan = (name) => {
  console.log(`Hi, ${name}! How are you?`);
};

greetMan('Vad Holovin');
greetMan(name);
greetMan(BIRTHYEAR);
