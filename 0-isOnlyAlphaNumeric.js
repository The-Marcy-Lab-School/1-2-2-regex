const isOnlyAlphaNumeric = (str) => {
  if (!str.length) return false;
  const valid = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';
  for (let i = 0; i < str.length; i++) {
    if (!valid.includes(str[i])) {
      return false;
    }
  }
  return true;
};

console.log(isOnlyAlphaNumeric('Hello world!'));  // false
console.log(isOnlyAlphaNumeric('Hello_world'));   // true


// Now, that same function using regular expression...
const isOnlyAlphaNumericRegex = (str) => /^\w+$/.test(str);

console.log(isOnlyAlphaNumericRegex('Hello world!'));  // false
console.log(isOnlyAlphaNumericRegex('Hello_world'));   // true