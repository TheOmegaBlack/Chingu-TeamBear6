# WeAreYourTeam (backend)

Backend repository for https://github.com/chingu-voyage4/Bears-Team-6

## Table of Contents

* [Prerequisites](#prerequisites)
* [Project structure](#project-structure)
* [API](#api)
* [Usage](#usage)
* [Probably stuff from the wiki/workflow/guidelines/etc](#probably-stuff-from-the-wikiworkflowguidelinesetc)
* [Application stack](#application-stack)
* [Team members](#team-members)

## Prerequisites

| Prerequisite | Version |
| ------------ | ------- |
| node.js      | `^8`    |
| npm          | `^5`    |
| mongoDB      | `^3`    |

## Installation

Do we need this section?

## Project structure

| Directory         | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| **`config`**      | database, passport, etc.                                        |
| **`controllers`** | controller files                                                |
| **`models`**      | Mongoose models                                                 |
| **`routes`**      | router files                                                    |
| **`static`**      | auto-generated front-end files; should not be modified manually |
| **`tests`**       | tests for the API, models, etc                                  |

## API

(as of Sprint 2)

* `/api`
  * `/auth/login`
    * POST - Logs in a user using email and password
  * `/auth/register`
    * POST - Registers a new user
  * `/users` (protected)
    * GET - Gets a list of all users
    * POST - Creates a new user (do we still need this?)
  * `/users/:id` (protected)
    * GET - Gets a user with the specified ID
    * PUT - Updates a user with the specified ID
  * `/users/profile` (protected)
    * GET - Gets the user profile data
    * PUT - Update the user profile data
  * `/interests` (protected)
    * GET - Gets a list of all interest
    * POST - Creates a new interest
  * `/interests/:id` (protected)
    * GET - Gets an interest with the specified ID
    * PUT - Updates an interest with the specified ID
    * DELETE - Delete an interest with the specified ID
  * `/interests/find/:name` (protected)
    GET - Get a list of interest that match the specified name

## Usage

### `npm start`

Starts the server on port 3000, or on the value specified by the `PORT` environment variable.

### `npm run dev`

Same as `npm start`, but the server is launched using nodemon.

### `npm run eslint`

Runs ESLint on the files (except those in the `static` directory).

### `npm run eslint:fix`

Runs ESLint with the `--fix` flag.

### `npm test`

Runs mocha on the `tests` directory.

### `npm postinstall`

Builds the front-end in the `static` directory.

## Probably stuff from the wiki/workflow/guidelines/etc

How to, etc.

## Application stack

* React
* Redux
* Express
* Mongoose
* Socket.io
* Flow
* Jest + Mocha

## Team Members

* [Sacha Morgese](https://github.com/TheOmegaBlack) (Project Manager)
* [Vladimir Logachev](https://github.com/VladimirLogachev)
* [Nguyễn Thế Tùng](https://github.com/tungnt-580)
* [Michael Alegrado](https://github.com/mikeale03)
* [Kev Comedia](https://github.com/kevcomedia)
