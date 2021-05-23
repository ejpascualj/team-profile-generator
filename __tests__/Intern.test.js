const { describe } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

describe("Intern",() => {
    // school
    describe("school", () => {
        it("should return employees school", () => {
            const school = "University";
            const result = new Intern("Bob", 10, "bob@email.com", school);
            expect(result.school).toEqual(school);
        });
    });
    // getSchool()
    describe("getSchool()", () => {
        it("should return employees school", () => {
            const school = "University";
            const result = new Intern("Bob", 10, "bob@email.com", school);
            expect(result.getSchool()).toEqual(school);
        });
    });
    // getRole()
    describe("getRole()", () => {
        it("should return employee's role", () => {
            const result = new Intern("Bob", 10, "bob@email.com", "University");
            expect(result.getRole()).toEqual("Intern");
        });
    });

});