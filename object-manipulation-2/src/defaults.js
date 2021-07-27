/* exported defaults */
function defaults(target, source) {
  for (var testProps in source) {
    if (target[testProps] === undefined) {
      target[testProps] = source[testProps];
    }
  }
}
