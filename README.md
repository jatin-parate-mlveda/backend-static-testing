## Purpose

- Use this setup for new backend projects.
- see [SETUP.md](SETUP.md) file for setup instructions.

### Features

- linter and formatter support
- auto formatting on commit
- prevent commit if has linting errors
- unit/integration and e2e tests with jest
- clinic.js for finding potential performance bottlenecks

## Versions of tools used while creating this project

- node: v16.4.0
- npm: v7.18.1

## Scripts

- `lint`: to lint the project using eslint
- `format`: format the code using prettier only (can be used for files other than .js and .json)
- `validate`: first validate and format the code using eslint and then build the project
- `prepare`: install husky while running **npm install**
- `build`: to build src folder
- `start`: build and start project from build directory
- `start:local`: run project locally using nodemon and inline babel compiler
- `test`: test using `jest` and `supertest`
- `clinic:doctor`: runs clinic doctor **(only for reference)**
- `clinic:flame`: generates clinic flame graph **(only for reference)**
- `clinic:bubbleprof`: generates bubble graph by clinic js **(only for reference)**

## Tools used

- **eslint**: for linting

- **prettier**: for formatting

- **eslint-config-airbnb-base**: airbnb eslint rules

- **eslint-plugin-import**: support for ES6+ in eslint

- **eslint-config-prettier**: turn off conflicting rules of eslint with prettier

- **eslint-plugin-prettier**: show prettier formatting errors in eslint

- **husky**: for pre-commit hooks to lint and format code before commit

- **lint-staged**: Format staged html, css, scss, js and json files with eslint and prettier

- **@babel/register**: To compile babel js at runtime

- **core-js@3**: Required polyfills for ECMA code to support older node versions

- **regenerator-runtime**: Polyfills for generators/yield and async functions

- **jest**: For tests

- **supertest**: For e2e tests

- **clinic.js**: For finding performance problems

## Instructions

- Refer [env](env) file for environment variables setup
- to run locally
  - rename `env` file to `.env.local`
  - run `npm install`
  - run `npm run start:local`

## Tasks ran on commit

- runs `lint-staged` which runs `eslint` and `prettier` for staged files
- runs `testAndValidateBuild` script
  - which tests only changed files and
  - runs build command to test if there is no issue in building with babel

## _VSCode_ settings

- Intall **ESLint** plugin by **Dirk Baeumer**

- Install **Prettier** plugin by **Prettier**

- Paste following in vscode's settings.json

  "editor.defaultFormatter": "dbaeumer.vscode-eslint"

- If you want to autoformat on save

  "editor.formatOnSave": true
