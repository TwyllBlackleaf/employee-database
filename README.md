# Employee Database

A command line tool for keeping a database of employees.

![A screenshot showing a table of employees](/screenshot.png)

## Features

- Uses Inquirer to prompt user for input
- Displays tables using console.table
- Interacts with a database using MySQL2

## How to Use

You will need MySQL in order to use the database. Make sure that your MySQL server is turned on.

Run `npm i` to install dependencies. You will also need to create a .env file and save your MySQL host, username, and password there as DB_HOST, DB_USER, and DB_PASS. 

The first time you use the database, run `source ./db/schema.sql` and `source ./db/seeds/sql` in MySQL to create and seed the database and tables.

Start the program using `node index` or `npm start` in the command line.

For further detail, see the how-to video at this link: <https://drive.google.com/file/d/1FkEQ-MnzEKEvSHL2e8BwCgMLP4HD_4r4/view>

## Known Issues

- Selecting "0: None" for a new employee's manager causes an error.
- In order to select a newly created role using the Inquirer prompts for creating a new employee or updating an employee's role, you will need to quit the program using ^C and reopen it by running `node index` again before Inquirer will see the new data.
- The walkthrough video references "plump turnips" instead of "plump helmets".

## About the Author

Kat Dixon is a developing developer with interests in accessibility, security, and the intersections between the two.