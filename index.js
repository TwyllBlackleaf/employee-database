const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");
const db = require("./db/connection");
const sqlQueries = require("./utils/sqlQueries");



db.query(sqlQueries.employees, (err, rows) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(rows);

    rows.forEach(row => {
        console.log(row.id);
    });
})