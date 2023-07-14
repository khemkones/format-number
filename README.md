

## Install

```sh
$ npm install --save format-string-number
```

## Usage

```js
const phoneNumber = '08000000000';
const pattern = 'XXX-XXX-XXXX'
let formatted = formatStringNumber(phoneNumber, pattern)

console.log(formatted);
// Output: 080-000-0000
```
