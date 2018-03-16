# WeAreYourTeam (backend)

**DRAFT**

Backend repository for https://github.com/chingu-voyage4/Bears-Team-6

## Table of Contents

TOC

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

(as of Sprint 1)

* `/api`
  * `/auth/local-login`
    * POST - Logs in a user using email and password
  * `/auth/register`
    * POST - Registers a new user
  * `/users` (protected)
    * GET - Gets a list of all users
    * POST - Creates a new user (do we still need this?)
  * `/users/:id` (protected)
    * GET - Gets a user with the specified ID
    * PUT - Updates a user with the specified ID

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

Us!
