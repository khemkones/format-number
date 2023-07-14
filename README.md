const formatStringNumber = require("format-string-number")

const phoneNumber = '08000000000';
const pattern = 'XXX-XXX-XXXX'
let formatted = formatStringNumber(phoneNumber, pattern)

console.log(formatted); // output: 080-000-0000
