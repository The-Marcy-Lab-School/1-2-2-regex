const isValidDateStr = (dateStr) => {
  // requires 'MM-DD-YYYY' formatted date strings
  const dateRegExp = /^([01]{2}|12)-([0-2][0-9]|30|31)-[0-9]{4}$/;
  return dateRegExp.test(dateStr);
}

console.log(isValidDateStr('10-12-1995'));    // true
console.log(isValidDateStr('10-12-9999'));    // true
console.log(isValidDateStr('13-12-9999'));    // false
console.log(isValidDateStr('12-32-9999'));    // false
console.log(isValidDateStr('10-2-2024'));     // false
console.log(isValidDateStr('a 10-12-1995'));  // false