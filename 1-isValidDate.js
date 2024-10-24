const isValidDateStr = (dateStr) => {
  // requires 'MM-DD-YYYY' formatted date strings
  const dateRegExp = /^(0[1-9]|1[0-2])-([0-2][0-9]|3[01])-[0-9]{4}$/;
  return dateRegExp.test(dateStr);
}

console.log(isValidDateStr('10-12-1995'));    // true
console.log(isValidDateStr('a 10-12-1995'));  // false
console.log(isValidDateStr('12-32-2024'));    // false
console.log(isValidDateStr('10-12-9999'));    // true
console.log(isValidDateStr('13-12-9999'));    // false
console.log(isValidDateStr('10-2-2024'));     // false