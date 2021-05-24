// Require the three classes, need inquirer and fs
// CreateManager(), CreateEngineer(), CreateIntern(), What-to-do-next?(), calls fs.write file and writes the file.
// Require inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');
// Require classes
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// Require generate functions
const generate = require('./src/generate')
// const generateHTML = require("./src/generate");
// const generateMemberHTML = require("./src/generate");
// const closeHTML = require("./src/generate");

const employees = [];

addMember = () => {
    inquirer.prompt([{
        type: "list",
        message: "Enter role",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role"
    },
    {
        message: "Enter name",
        name: "name"
    },
    {
        message: "Enter id",
        name: "id"
    },
    {
        message: "Enter email",
        name: "email"
    }])
        .then(({name, role, id, email}) => {
            let additionalProperty = "";
            if (role === "Manager") {
                additionalProperty = "office";
            } else if (role === "Engineer") {
                additionalProperty = "github";
            } else {
                additionalProperty = "school";
            }
            inquirer.prompt([{
                message: `Enter ${additionalProperty}`,
                name: "additionalProperty"
            },
            {
                type: "list",
                message: "Do you want to add more team members?",
                choices: ["yes","no"],
                name: "addMore"
            }])
                .then(({additionalProperty, addMore }) => {
                    let member;
                    if (role === "Manager") {
                        member = new Manager(name, id, email, additionalProperty);
                    } else if (role === "Engineer") {
                        member = new Engineer(name, id, email, additionalProperty);
                    } else {
                        member = new Intern(name, id, email, additionalProperty);
                    }
                    employees.push(member);
                    generate.generateMemberHTML(member)
                        .then(() => {
                            if (addMore === "yes") {
                                addMember();
                            } else {
                                generate.closeHTML();
                            }
                        });

                });
        });
}

generate.generateHTML();
addMember();