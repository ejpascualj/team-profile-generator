// Require inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');
// Require classes
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

generateHTML = () => {
    const html =
        `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Team</title>
        <!-- Latest compiled and minified CSS & JS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
    </head>
    <body>
        <header>
            <h1>Team Profile</h1>
        </header>
        <div>
            <div>`;
    fs.writeFile("./dist/index.html", html, (err) => {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

generateMemberHTML = (member) => {
    const name = member.name;
    const role = member.getRole();
    const id = member.id;
    const email = member.email;
    let prop = "";
    let propValue;
    switch (role) {
        case "Engineer":
            prop = "GitHub"
            propValue = member.getGithub();
            break;
        case "Manager":
            prop = "Office"
            propValue = member.office;
            break;
        case "Intern":
            prop = "GitHub"
            propValue = member.office;
            break;
    };
    return new Promise((resolve, reject) => {
        let html = `<div>
            <div>
                <h5>${name}</h5>
                <h5>${role}</h5>
                <ul>
                    <li>ID: ${id}</li>
                    <li>Email ${email}</li>
                    <li>${prop}: ${propValue}</li>
                </ul>
            </div>
        </div>`;
        console.log("team member added");
        fs.appendFile("./dist/index.html", html, (err) => {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}

closeHTML = () => {
    const html = ` </div>
    </div>
    
    </body>
    </html>`;
    fs.appendFile("./dist/index.html", html, (err) => {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}

// module.exports = generate;
exports.generateHTML = generateHTML;
exports.generateMemberHTML = generateMemberHTML;
exports.closeHTML = closeHTML;