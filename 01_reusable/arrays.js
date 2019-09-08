'use strict';

const PHONE_BOOK = [
  {
    name: 'Marcus Aurelius',
    phone: '+380445554433'
  },
  {
    name: 'Vad Holovin',
    phone: '+380950144480'
  },
  {
    name: 'Ivan Mazepa',
    phone: '+380335544480'
  },
  {
    name: 'Barak Obama',
    phone: '+380950155580'
  },
];

const findPhoneByName = (name) => {
  for (const man of PHONE_BOOK) {
    if (man.name === name) {
      return man.phone;
    }
  }
};

console.log(findPhoneByName('Barak Obama'));
