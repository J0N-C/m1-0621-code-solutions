var colors = [
  'red',
  'white',
  'blue'];

console.log('the value of colors[0] is: ', colors[0]);
console.log('the value of colors[1] is: ', colors[1]);
console.log('the value of colors[2] is: ', colors[2]);
console.log('America is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + '.');

colors[2] = 'green';

console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + '.');
console.log('the value of colors is: ', colors);

var students = ['Amy', 'Chris', 'Erica', 'Jim'];
var numberOfStudents = students.length;

console.log('There are ' + numberOfStudents + ' in the class.');

var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];

console.log('The last student in the array is ' + lastStudent + '.');
console.log('the value of students is: ', students);
