# Database Creator

A mini project that create/initialization database for Postgres, SQLServer, and MYSQL based on the configured models and data seeders using sequelize ORM.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Environment

Generate .env file using .env.example in docs.

### Installation

A step by step guide that will tell you how to get the development environment up and running.

1. Install node dependencies ➡ `npm install`
2. Configure your own models ➡ `./models`
3. Export configured models in ➡ `./models/index.js`
4. Configure your own data seeders ➡ `./setup/Seeders.js`
5. Run ➡ `npx sequelize-auto -h [Host] -d [Database] -u [Username] -x [Password] -p 5432 --dialect [Dialect] -o ./sequelize-auto`
6. Copy relationships from `./sequelize-auto/init-models.js` to `./setup/Relationships.js`
7. Initialization database ➡ `npm start`
8. Rest database ➡ `npm run rest`
