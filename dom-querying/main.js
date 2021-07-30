console.log('hello, world');

var domh1 = document.querySelector('h1');
console.log('query h1: ', domh1);
console.dir(domh1);

var expln = document.querySelector('#explanation');
console.log('query #explanation: ', expln);
console.dir(expln);

var hintClass = document.querySelector('.hint');
console.log('query .hint: ', hintClass);
console.dir(hintClass);

var nodesP = document.querySelectorAll('p');
console.log('nodelist p: ', nodesP);

var exampleClass = document.querySelectorAll('.example-link');
console.log('nodelist .example-link: ', exampleClass);
