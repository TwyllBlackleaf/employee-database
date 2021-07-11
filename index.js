const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");
const db = require("./db/connection");
const sqlQueries = require("./utils/sqlQueries");
const questions = require("./utils/questions");

const askWhatDo = function() {
    inquirer.prompt(questions.whatDo)
        .then(({ whatDo }) => {
            if (whatDo === "View all departments") {
                db.query(sqlQueries.departments, (err, rows) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log(rows);
                });
            } else if (whatDo === "View all roles") {
                db.query(sqlQueries.roles, (err, rows) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log(rows);
                });
            } else if (whatDo === "View all employees") {
                db.query(sqlQueries.employees, (err, rows) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log(rows);
                });
            } else if (whatDo === "Add a department") {

            } else if (whatDo === "Add a role") {
                
            } else if (whatDo === "Add an employee") {

            } else if (whatDo === "Update an employee role") {

            } else {
                console.log("Error: need to choose an option");
                return;
            }
        });
}

const init = function() {
    askWhatDo();
}

init();

/* db.query(sqlQueries.employees, (err, rows) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(rows);

    rows.forEach(row => {
        console.log(row.id);
    });
}) */