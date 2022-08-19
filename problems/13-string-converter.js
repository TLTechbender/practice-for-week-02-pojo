/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  // Your code here
    // This one's kinda similar to the previous one, there's one part of the solution that I don't seem to understand but I will soon understand it.

      // Your code here
  const obj = {};

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (char in obj) {
      let value = obj[char];
      obj[char] = value += 1;
    } else {
      obj[char] = 1;
    }
  }

  return obj;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
