var num1 = 12;
var num2 = 38;
var num3 = 5;
var maximumValue = Math.max(num1, num2, num3);
console.log('Value of maximumValue: ', maximumValue);

var heroes = ['Batman', 'Green Lantern', 'Wolverine', 'Deadpool'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
var randomHero = heroes[randomIndex];
console.log('Value of randomHero: ', randomHero);

var library = [
  {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'JK Rowling'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Chrichton'
  },
  {
    title: 'IT',
    author: 'Stephen King'
  }
];

var lastBook = library.pop();
console.log('Value of lastBook: ', lastBook);

var firstBook = library.shift();
console.log('Value of firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Value of library: ', library);

var fullName = 'Jonathan Chiang';
var firstAndLastName = fullName.split(' ');
console.log('Value of firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Value of sayMyName: ', sayMyName);
