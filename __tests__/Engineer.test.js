const { describe } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

describe("Engineer", ()=>{
    // github
    describe("github", () => {
        it("should return employees github username", () => {
            const github = "Bob5000";
            const result = new Engineer("Bob", 10, "bob@email.com", github);
            expect(result.github).toEqual(github);
        });
    });
    // getGithub()
    describe("getGithub()", () => {
        it("should return employee's github", () => {
            const github = "Bob5000";
            const result = new Engineer("Bob", 10, "bob@email.com", github);
            expect(result.getGithub()).toEqual(github);
        });
    });
    // getRole()
    describe("getRole()", () => {
        it("should return employee's role", () => {
            const result = new Engineer("Bob", 10, "bob@email.com", "Bob5000");
            expect(result.getRole()).toEqual("Engineer");
        });
    });
});