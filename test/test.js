const { formatstringNumber } = require("../index");


describe("Format stringNumber ", () => {
    test("phone number", async () => {
        const phoneNumber = '0800000000';
        const pattern = 'XXX-XXX-XXXX'
        let formatted = await formatstringNumber(phoneNumber, pattern)
        expect(formatted).toBe('080-000-0000');
    });

    test("citizen id", async () => {
        const citizenId = '1101000101039';
        const pattern = 'X-XXXX-XXXXX-XX-X'
        let formatted = await formatstringNumber(citizenId, pattern)
        expect(formatted).toBe('1-1010-00101-03-9');
    });

    test("bank account number 10 digit", async () => {
        const bank_account_number = '9824867941';
        const pattern = 'XXX-X-XXXXX-X'
        let formatted = await formatstringNumber(bank_account_number, pattern)
        expect(formatted).toBe('982-4-86794-1');
    });

    test("bank account number 12 digit", async () => {
        const bank_account_number = '982486794109';
        const pattern = 'XXX-X-XXXXX-XXX'
        let formatted = await formatstringNumber(bank_account_number, pattern)
        expect(formatted).toBe('982-4-86794-109');
    });

    test("bank account number 15 digit", async () => {
        const bank_account_number = '982486794109123';
        const pattern = 'XXX-X-XXXXX-XXXXXX'
        let formatted = await formatstringNumber(bank_account_number, pattern)
        expect(formatted).toBe('982-4-86794-109123');
    });
})