## Steps to setup

### install following dependencies

- dev dependencies

  - husky

    - install then run

          npx husky install

  - lint-staged
  - eslint
  - eslint-config-airbnb-base
  - eslint-plugin-import
  - eslint-config-prettier
  - eslint-plugin-prettier
  - prettier

- copy following scripts from [package.json](package.json)

  - "lint": "eslint --ignore-path .gitignore .",
  - "prettier": "prettier --ignore-path .gitignore --write \"src\*_/_.+(js|json)\"",
  - "format": "npm run lint -- --fix",
  - "validate": "npm run lint",
  - "prepare": "husky install"

- copy [.gitignore](https://github.com/jatin-parate-mlveda/frontend-static-testing-setup/blob/master/.gitignore) file for prettier and eslint ignore

### prettier setup

- copy [.prettierrc](.prettierrc) file to project root

### eslint setup

- copy [.eslintrc.json](.eslintrc.json) file, which contains eslint config

### husky and lint-staged setup

- copy [.lintstagedrc](.lintstagedrc) file to project root

- run

      npx husky set .husky/pre-commit "npx lint-staged && npm run validate"

### vscode setup

- Intall **ESLint** plugin by **Dirk Baeumer**

- Install **Prettier** plugin by **Prettier**

- copy [.vscode](.vscode) ([settings.json](.vscode/settings.json) file in that folder specifically which contains formatting and linting rules for various files) folder to project root
