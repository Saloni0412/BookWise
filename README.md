# BookWise [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

BookWise is a web application that allows users to Create a book management system that allows users to track and manage their personal library.

## Table of Contents

- [Features](#features)
- [Installtion](#installation)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)
- [Deployment](#deployment)

## Features

- User Registration, Login and Logout: Users can create an account, log inand log put to access personalized features.
- Book Details: Users can view detailed information about a book, including the title, author, cover image, and description.
- Add Books: Users can contribute to the book collection by adding new books to the database.

## Installation

### Heroku Deployment

1. Access the application in Heroku: [BookWise](https://mighty-garden-26521.herokuapp.com/)
2. Sign up or log in to create a new account.
3. Create and manage your own Books from the your bookshelf.

### Local Installation

1. Clone the repository
```
git clone https://github.com/Saloni0412/BookWise.git
```
2. Navigate to the project directory.
```
cd <saved-directly>
```
3. Install the dependancies.
```
npm install
```
4. set up the database
- Create a .env file
- Create a MySQL database using the provided SQL schema file (schema.sql).
```
mysql -u root -p
```
```
source ./db/schema.sql
```
- update the database connection details in the seed.js file in the seeds.
``` 
node ./seeds/seed.js
```
5. Start the application:
```
node server.js
```
6. Access the application through your brwser.
```
http://localhost:3001/
```
7. Sign up or log in to create a new account.
8. Create and manage your own Books from the your bookshelf.

## Technologies

- Front-end: HTML, CSS, JavaScript, Handlebars.js
- Back-end: Node.js, Express.js
- Database: MySQL
- User Authentication: bcrypt.js, express-session

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.

## Credits

- [@AndreBesner](https://github.com/AndreBesner)
- [@AngadBatth](https://github.com/AngadBatth) 
- [@Hiroro1989](https://github.com/Hiroro1989)
- [@MarekAlexPolak](https://github.com/MarekAlexPolak)
- [@Saloni0412](https://github.com/Saloni0412)

## License

This project is licensed under the [MIT License](LICENSE).

## Deployment

[https://mighty-garden-26521.herokuapp.com/](https://mighty-garden-26521.herokuapp.com/)

<!-- add screenshot here -->






