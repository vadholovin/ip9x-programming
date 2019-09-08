'use strict';

const PHONE_BOOK = {
  'Marcus Aurelius': {
    phone: '+380445554433',
  },
  'Vad Holovin': {
    phone: '+380950144480',
  },
  'Ivan Mazepa': {
    phone: '+380335544480',
  },
  'Barak Obama': {
    phone: '+380950155580',
  },
};

const findPhoneByName = (name) => {
  for (const personName in PHONE_BOOK) {
    if (personName === name) {
      return PHONE_BOOK[personName].phone;
    }
  }
};

console.log(findPhoneByName('Vad Holovin'));

