const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

describe("Employee", () => {
    // name
    describe("name", () => {
        it("should return employees name", () => {
            const name = "Bob";
            const result = new Employee(name, 1, "bob@email.com");
            expect(result.name).toEqual(name);
        });
    });
    // id
    describe("id", () => {
        it("should return employee id", () => {
            const id = 10;
            const result = new Employee("Bob", id, "bob@email.com");
            expect(result.id).toEqual(id);
        });
    });
    // email
    describe("email", () => {
        it("should return employee email", () => {
            const email = "bob@email.com";
            const result = new Employee("Bob", 10, email);
            expect(result.email).toEqual(email);
        });
    });
    // getName()
    describe("getName()", () => {
        it("should return employeesname", () => {
            const name = "Bob";
            const result = new Employee(name, 10, "bob@email.com");
            expect(result.getName()).toEqual(name);
        });
    });
    // getId()
    describe("getId()", () => {
        it("should return employee ID", () => {
            const id = 10;
            const result = new Employee("Bob", id, "bob@email.com");
            expect(result.getId()).toEqual(id);
        });
    });
    // getEmail()
    describe("getEmail()", () => {
        it("should return employee email", () => {
            const email = "bob@email.com";
            const result = new Employee("Bob", 10, email);
            expect(result.getEmail()).toEqual(email);
        });
    });
    // getRole()
    describe("getRole()", () => {
        it("should return employee's role", () => {
            const result = new Employee("Bob", 10, "bob@email.com");
            expect(result.getRole()).toEqual("Employee");
        });
    });
});