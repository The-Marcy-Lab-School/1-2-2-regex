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


const extractEmails = (text) => {
  const emailRegExp = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/g;
  const emails = text.match(emailRegExp);
  return emails;
}

const message = `
Dear Team,

Thank you for attending the meeting earlier today. As discussed, please reach out to the following team members if you have any questions or need further clarification:

For project management updates, contact Sarah at sarah.jones@example.com.
For technical issues, reach out to Mike at mike.smith@example.com.
For client communications, please email Julia at julia.roberts@example.com.
Let me know if you need anything else.

Best regards,
John
john.doe@example.com
`

const emails = extractEmails(message);
console.log(emails);