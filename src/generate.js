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
        <meta charset="utf-8">   
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <title>Team</title>
    </head>
    <body>
        <header class="bg-danger bg-gradient">
            <h1 class="text-center text-white">Team Profile</h1>
        </header>
        <div>
            <div class="container">`;
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
            propValue = member.github;
            break;
        case "Manager":
            prop = "Office"
            propValue = member.office;
            break;
        case "Intern":
            prop = "School"
            propValue = member.school;
            break;
    };
    return new Promise((resolve, reject) => {
        let data = 
        `<div class="card-deck">
            <div class="card" style="width: 18rem;">
                <h4 class="card-title text-center"> ${name} </h4>
                <h5 class="card-subtitle mb-2 text-muted text-center"> ${role} </h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> ID: ${id} </li>
                    <li class="list-group-item"> Email ${email} </li>
                    <li class="list-group-item"> ${prop}: ${propValue} </li>
                </ul>
            </div>
        </div>`;
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
    const data = 
    ` </div>
    </div> 
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>
    <script src="https://pingendo.com/assets/bootstrap/bootstrap-4.0.0-alpha.6.min.js"></script>  
    </body>
    </html>`;
    fs.appendFile("./dist/index.html", data, (err) => {
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