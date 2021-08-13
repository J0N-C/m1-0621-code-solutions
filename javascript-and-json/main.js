var bookshelf = [
  {
    isbn: '978-1491929483',
    title: 'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett'
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    isbn: '978-0692232699',
    title: 'Build APIs You Won\'t Hate: Everyone and their dog wants an API, so you should probably learn how to build them',
    author: 'Phil Sturgeon & Laura Bohill'
  }
];

console.log('bookshelf', bookshelf);
console.log('typeof bookshelf:', typeof bookshelf);

console.log('stringified bookshelf:', JSON.stringify(bookshelf));
console.log('typeof stringified bookshelf:', typeof JSON.stringify(bookshelf));

var student = '{"id":"007", "name":"Jonathan Chiang"}';
console.log('student string:', student);

var studentObj = JSON.parse(student);
console.log('studentObj parsed:', studentObj);
console.log('typeof studentObj parsed:', typeof studentObj);
