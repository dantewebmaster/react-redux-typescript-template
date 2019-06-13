# React Redux Typescript Template
Initial template to start a project with *React + Redux + Redux Saga* using Typescript.

## Start project
`npm/yarn install` to install all packages  
`npm/yarn start`  to start the project on localhost:3000

## Folder Structure
```bash
src
├─── components            # All the Views/Presentational components organized by folders (ComponentName/index.tsx)
│    ├─── RepositoryList   # Example view component
│    ├─── Root             # Component used as start point for the application, initialize the Redux configs
│    └─── UserList         # Example view component
├─── models                # Folder containing all the application interfaces
├─── pages                 # Page components are used to isolate the logic components from presentational ones
│    ├─── HomePage         # Page component example
│    ├─── NotFoundPage     # Page component example
│    ├─── RepositoriesPage # Page component example
│    └─── UsersPage        # Page component example
├─── services              # All the API calls are placed here (each service on a specific file)
├─── helpers               # Reusable Helpers and Utilities
├─── store                 # Contains all the core structure for the Redux store
│    └─── ducks            # Redux features/ducks main folder
│        ├─── repositories # Holds all specific reducer files, actions, types, sagas and reducers (index.ts)
│        └─── users        # Holds all specific reducer files, actions, types, sagas and reducers (index.ts)
└─── __tests__             # Tests folder have all unit test
```

## Test
Use `npm/yarn run test` to start the basic test.

## Changelog
- Initial Version: 1.0.0
