const sqlQueries = require("./sqlQueries");
const db = require("../db/connection");
const { roles } = require("./sqlQueries");

var rolesOptions = [];


const getRoleChoices = function(sql) {
    var rolesList = [];

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        rolesOptions = rows;
        
        rolesOptions.forEach(({ title }) => {
            rolesList.push(title);
        });
    });

    return (rolesList);
}

const get

const questions = {
    whatDo: {
        type: "list",
        name: "whatDo",
        message: "What would you like to do?",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role"
        ]
    },
    department: {
        type: "input",
        name: "departmentName",
        message: "Please enter the new department name",
        validate: deptNameInput => {
            if (deptNameInput) {
                return true;
            } else {
                console.log("New department name is required.");
                return false;
            }
        }
    },
    role: [
        {
            type: "input",
            name: "roleName",
            message: "Please enter the name of the new role.",
            validate: roleNameInput => {
                if (roleNameInput) {
                    return true;
                } else {
                    console.log("New role name is required.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "roleSalary",
            message: "Please enter the salary for the new role.",
            validate: roleSalaryInput => {
                if (parseFloat(roleSalaryInput)) {
                    return true;
                } else {
                    console.log("Salary for new role is required and must be a number.");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "roleDepartment",
            message: "Please choose what department the role falls under.",
            choices: getRoleChoices(sqlQueries.inqRoles)
        }
    ]
}

module.exports = questions;