const sqlQueries = {
    // Get departments: id, name
    departments: `SELECT * FROM departments`,

    // Get roles: title, salary, department
    roles: `SELECT roles.title, roles.salary, departments.name AS department
    FROM roles
    LEFT JOIN departments
    ON roles.department_id = departments.id`,

    // Get employees: id, name, role, salary, department, manager
    employees: `SELECT e.id, e.first_name, e.last_name, r.title, r.salary, d.name 
    AS department, 
    CONCAT(m.first_name, " ", m.last_name)
    AS manager
    FROM employees e
    LEFT JOIN roles r
    ON e.role_id = r.id
    LEFT JOIN departments d
    ON r.department_id = d.id
    LEFT JOIN employees m
    ON e.manager_id = m.id`,

    // Get all roles for inquirer
    inqRoles: `SELECT id, title FROM roles`,

    // Get all managers for inquirer
    inqManagers: `SELECT m.id, CONCAT(m.first_name, " ", m.last_name)
    FROM employees e
    INNER JOIN employees m
    ON e.manager_id = m.id`,

    // Get all departments for inquirer
    inqDepartments: `SELECT * FROM departments`,

    // Get all employees for inquirer
    inqEmployees: `SELECT CONCAT(first_name, " ", last_name) AS full_name FROM employees`
}

module.exports = sqlQueries;