
# specs used while creating this project

- node: v16.4.0
- npm: v7.18.1

# Scripts

- lint: to lint the project using eslint
- format: format the code using prettier only (can be used for files other than .js and .json)
- validate: first validate and format the code using eslint and then build the project
- prepare: install husky while running **npm install**

  

# Tools used

- **eslint**: for linting

- **prettier**: for formatting

- **eslint-config-airbnb-base**: airbnb eslint rules

- **eslint-plugin-import**: support for ES6+ in eslint

- **eslint-config-prettier**: turn off conflicting rules of eslint with prettier

- **eslint-plugin-prettier**: show prettier formatting errors in eslint

- **husky**: for pre-commit hooks to lint and format code before commit.

  

# *VSCode* settings

- Intall **ESLint** plugin by **Dirk Baeumer**

- Install **Prettier** plugin by **Prettier**

- Paste following in vscode's settings.json
   

     "editor.defaultFormatter": "dbaeumer.vscode-eslint"

- If you want to autoformat on save
   

     "editor.formatOnSave": true
