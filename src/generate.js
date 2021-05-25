// Require inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');
// Require classes
const Employee = require("../lib/Employee")
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
    return new Promise((resolve, reject) => {
        console.log(member);
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const github = member.getGithub();
            data = `<div class="col-6">
            <div class="card">
                <h5>${name}</h5>
                <h5>Engineer</h5>
                <ul>
                    <li>ID: ${id}</li>
                    <li>Email ${email}</li>
                    <li>GitHub: ${github}</li>
                </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div>
            <div>
            <h5>${name}</h5>
            <h5>Intern</h5>
            <ul>
                <li>ID: ${id}</li>
                <li>Email Address: ${email}</li>
                <li>School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const office = member.getOffice();
            data = `<div>
            <div" style="width: 18rem">
            <h5>${name}<br /><br />Manager</h5>
            <ul>
                <li>ID: ${id}</li>
                <li>Email Address: ${email}</li>
                <li>Office Phone: ${office}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("team member added");
        fs.appendFile("./dist/index.html", data, (err) => {
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