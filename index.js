const formatStringNumber = function (stringNumber, format) {
    const digits = stringNumber.replace(/\s/g, '');
    let formattedNumber = '';
    let digitIndex = 0;

    // Iterate over the format and replace placeholders with digits
    for (let i = 0; i < format.length; i++) {
        if (format[i] === 'X') {
            // Replace 'X' with the corresponding digit
            formattedNumber += digits[digitIndex] || '';
            digitIndex++;
        } else {
            // Copy non-placeholder characters as-is
            formattedNumber += format[i];
        }
    }

    return formattedNumber
};

module.exports = formatStringNumber;

