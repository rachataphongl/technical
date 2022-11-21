function commonPrefix(a) {
  let size = a.length;
  if (size == 0) {
    return `${''}`;
  }

  if (size == 1) {
    return a[0];
  }

  a.sort();

  let end = Math.min(a[0].length, a[size - 1].length);

  let i = 0;
  while (i < end && a[0][i] == a[size - 1][i]) i++;

  let start = a[0].substring(0, i);
  return start;
}

let inputEx1 = ['flower', 'flow', 'flight'];
let inputEx2 = ['dog', 'racecar', 'car'];
console.log(commonPrefix(inputEx2));
