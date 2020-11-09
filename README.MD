# Semafor sync mssql server to mongoDB app

## Libraries and frameworks

- `jest` - Jest is a JavaScript Testing Framework.
- `types/jest` - Definitions of types for Jest.
- `ts-jest` - A TypeScript preprocessor with source map support for Jest that lets you use Jest to test projects written in TypeScript.
- `eslint` - Cookie parser library for express. Used to
  decode/parse cookies into array/object.
- `ts-node` - TypeScript execution and REPL for node.js, with source map support.
- `typescript` - TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.
- `dotenv` - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration.
- `lodash` - A modern JavaScript utility library delivering modularity, performance & extras.
- `mssql` - Microsoft SQL Server client for Node.js.
- `mongoose` - Let's face it, writing MongoDB validation, casting and business logic boilerplate is a drag. That's why we wrote Mongoose.

## Dev enviroment

- `docker` - Package Software into Standardized Units for Development, Shipment and Deployment.
- `docker-compose` - Compose is a tool for defining and running multi-container Docker applications.
- `docker node js image` - Node.js is a JavaScript-based platform for server-side and networking applications.

## Application architecture

- `lib` - shared handlers for sync app
- `packages` - modules for sync app
- `collections` - mongo collections directory
- `collections/index` - main collection file for start collection action
- `collection/actions` - main file for start running mongo collection sync, load, update or delete processes
- `collections/adapters` - handlers for filter data from mssql to mongoDB collection update or load
- `collections/loaders` - handlers for loading data by mssql procedures
- `collections/tests` - jest tests for collection
- `collections/updaters` - handlers for updates mongoDB collections
- `collections/queries` - handlers containing mongoDB requests to update, delete, load, insert data into mongoDB collections
