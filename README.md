# Resume API

This repository contains my backend learning progress, where each feature is implemented step by step with meaningful Git commits.

## Project Structure

```text
resume-api/
│
├── backup/          # Earlier CRUD implementations using local/JSON data
├── models copy/     # Earlier manually created Sequelize models
├── config/          # Sequelize database configuration
├── migrations/      # Database schema and migration files
├── models/          # Sequelize models and relationships
├── controllers/     # Request handling and business logic
├── middleware/      # Custom Express middleware and validation
├── routes/          # API route definitions
├── app.js           # Application entry point
├── package.json
└── .gitignore
```

### `backup/` and `models copy/`

* **`backup/`** contains earlier CRUD implementations using local or JSON-based storage.
* **`models copy/`** contains earlier versions of the Sequelize models created before using Sequelize CLI.

These folders are kept for learning and comparison.

## Features

* Express server setup
* Modular folder structure
* REST API routing
* Controller architecture
* Relational database design
* Foreign key constraints
* Sequelize ORM integration
* Database migrations
* Sequelize associations
* JSON request parsing

## Tech Stack

* Node.js
* Express.js
* Sequelize ORM
* Sequelize CLI
* MySQL / PostgreSQL
* Git & GitHub

## Learning Objectives

* Understand Express architecture and request routing.
* Separate application logic using controllers.
* Understand relational database design.
* Implement one-to-many relationships and foreign keys.
* Use Sequelize for database operations and migrations.
* Build a scalable backend structure.

## API Documentation

The API documentation is available through Postman.

Currently implemented:

* Authentication API
* Document API

Remaining APIs will be added as development continues.

[View Postman API Documentation](https://documenter.getpostman.com/view/56589029/2sBY4SMJa5)

## Current Progress

* Project initialized and Express server configured
* Folder structure created
* Document routes and controllers added
* Database schema designed and migrated
* Sequelize associations implemented
* Controllers refactored to use Sequelize models
* CRUD operations for remaining tables
* Middleware and validation
* Authentication
* API testing

## Getting Started

### Clone Repository

```bash
git clone https://github.com/Manishjoshi03/resume-api
```

### Install Dependencies

```bash
npm install
```

### Setup Database

Make sure your database is running and update the credentials in:

```text
config/config.js
```

Run the migrations:

```bash
npx sequelize-cli db:migrate
```

### Start Server

```bash
node app.js
```

## Learning Notes

This project focuses on:

* Express request and response lifecycle
* REST API principles
* Database migrations using Sequelize CLI
* Sequelize models and associations
* Foreign keys and cascading operations
* Controller and route separation


## Author

**Manish Joshi**

Learning backend development with Node.js and Express as part of my full-stack web development journey.
