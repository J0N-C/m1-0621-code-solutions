function addTwoNumbers(x, y) {
  var sum = x + y;
  return sum;
}

var addTwoNumbersResult = addTwoNumbers(2, 3);
console.log('addTwoNumbersResult: ', addTwoNumbersResult);

function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult: ', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetResult = greet('Beavis');
console.log('greetResult: ', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var areaResult = getArea(17, 42);
console.log('areaResult: ', areaResult);

function getFirstName(person) {
  return person.firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstNameResult: ', getFirstNameResult);

function getLastElement(array) {
  return array[array.length - 1];
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult: ', getLastElementResult);
