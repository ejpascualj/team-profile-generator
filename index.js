// Require inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');

// Require classes
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Require generate functions
const generate = require('./src/generate')

//Empty employees array 
const employees = [];

addMember = () => {
    inquirer.prompt([{
        type: "list",
        message: "Enter role",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role",
    },
    {
        message: "Enter name",
        name: "name",
    },
    {
        message: "Enter id",
        name: "id",
    },
    {
        message: "Enter email",
        name: "email",
    },
    {
        message: `Enter office`,
        name: "additionalProperty",
        when: function(answers){
            return answers.role === "Manager"
        },
    },
    {
        message: `Enter github`,
        name: "additionalProperty",
        when: function(answers){
            return answers.role === "Engineer"
        },
    },
    {
        message: `Enter school`,
        name: "additionalProperty",
        when: function(answers){
            return answers.role === "Intern";
        },
    },
    {
        type: "list",
        message: "Do you want to add more team members?",
        choices: ["yes", "no"],
        name: "addMore"
    }])
        .then(({role, name, id, email, additionalProperty, addMore}) => {
            let member;
            switch (role) {
                case "Manager":
                    member = new Manager(name, id, email, additionalProperty);
                    break;
                case "Engineer":
                    member = new Engineer(name, id, email, additionalProperty);
                    break;
                case "Intern":
                    member = new Intern(name, id, email, additionalProperty)
            };
            console.log(member)
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
};

generate.generateHTML();
addMember();