var student = {
  firstName: 'Jonathan',
  lastName: 'Chaing',
  age: 30
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Architectural designer';

console.log('value of livesInIrvine: ', student.livesInIrvine);
console.log('value of previousOccupation: ', student.previousOccupation);

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: '2016'
};

vehicle['color'] = 'gray';
vehicle['isConvertible'] = false;
console.log('value of color: ', vehicle['color']);
console.log('value of isConvertible: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Ralph',
  type: 'fish'
};

delete pet.name;
delete pet.type;

console.log('the value of pet: ', pet);
