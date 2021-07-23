/* exported capitalize */
function capitalize(word) {
  var lower = word.toLowerCase();
  var chars = lower.split('');
  var cap = chars.shift().toUpperCase();
  return cap + chars.join('');
}
