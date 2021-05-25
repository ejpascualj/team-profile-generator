const { describe } = require('@jest/globals');
const Manager = require('../lib/Manager');

describe("Manager",() => {
    // office
    describe("office", () => {
        it("should return employees office Number", () => {
            const office = 100;
            const result = new Manager("Bob", 10, "bob@email.com", office);
            expect(result.office).toEqual(office);
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