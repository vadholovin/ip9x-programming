'use strict';

const person = {
  name: 'Vad'
};

let student = {
  name: 'Kate'
};

person.name = 'Nikita';
student.name = 'Serj';

console.dir(person);
console.dir(student);

/**
 * Constant variable can be changed, but not reassined.
 * The following commented code will cause an error.
 */

/*
person = {
  age: 15
};
*/

student = {
  age: 15
};


const createUser = (name, city) => {
  const user = {
    name,
    city
  };

  return user;
};

console.dir(createUser('Vad', 'Kharkiv'));

