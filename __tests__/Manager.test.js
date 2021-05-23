const { describe } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

describe("Manager",() => {
    // officeNumber
    describe("officeNumber", () => {
        it("should return employees office Number", () => {
            const officeNumber = 100;
            const result = new Manager("Bob", 10, "bob@email.com", officeNumber);
            expect(result.officeNumber).toEqual(officeNumber);
        });
    });
    // getRole()
    describe("getRole()", () => {
        it("should return employee's role", () => {
            const result = new Manager("Bob", 10, "bob@email.com", 100);
            expect(result.getRole()).toEqual("Manager");
        });
    });

});