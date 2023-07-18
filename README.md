

## Install

```sh
$ npm install format-string-number --save
```

## Usage

```js
const formatStringNumber = require('format-string-number')

const phoneNumber = '08000000000';
const patternPhoneNumber = 'XXX-XXX-XXXX'
let formatted = formatStringNumber(phoneNumber, patternPhoneNumber)
console.log(formatted); // Output: 080-000-0000

const citizenID = '1101000101039';
const patternCitizenID = 'X-XXXX-XXXXX-XX-X'
let formatted = formatStringNumber(citizenID, patternCitizenID)
console.log(formatted); // Output: '1-1010-00101-03-9'

const bankAccountNumber = '9824867941';
const patternBankAccountNumber = 'XXX-X-XXXXX-X'
let formatted = formatStringNumber(bankAccountNumber, patternBankAccountNumber)
console.log(formatted); // Output: '982-4-86794-1'

```
