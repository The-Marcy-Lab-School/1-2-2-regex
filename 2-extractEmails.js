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