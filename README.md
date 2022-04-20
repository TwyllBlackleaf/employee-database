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

I'm a web developer who’s hungry for knowledge– and for opportunities to apply that knowledge as a programmer to enhance user experience; improve accessibility and security; and create stable, well-crafted, and elegantly functional code. I have a bachelor’s degree in English from Vanderbilt University and a certificate from Vanderbilt University Coding Boot Camp, a full-stack web development boot camp where I worked with JavaScript, HTML5, CSS, Node.js, Express, MySQL, Sequelize, MongoDB, and React.

With my background in English, passion for psychology, and lived experience with disability and neurodivergence, along with my love of learning for learning’s sake, I bring value to any team through supporting others, enhancing communication between team members, and quickly picking up technologies needed for the project.

In my spare time, I run games of Dungeons and Dragons, which provides a lot of experience with managing interpersonal interactions, considering and making deliberations on technical questions, and herding cats!
