# React Redux Typescript Template
Initial template to start a project with *React + Redux + Redux Saga* using Typescript.

## Start project
`npm/yarn install` to install all packages  
`npm/yarn start`  to start the project on localhost:3000

## Folder Structure
```bash
src
├─── components            # All the Views/Presentational components organized by folders (ComponentName/index.tsx)
│    ├─── RepositoryList
│    ├─── Root
│    └─── UserList
├─── models
├─── pages                 # Page components are used to isolate the logic components from presentational ones
│    ├─── HomePage
│    ├─── NotFoundPage
│    ├─── RepositoriesPage 
│    └─── UsersPage
├─── services              # All the API calls are placed here (each service on a specific file)
├─── store
│    └─── ducks
│        ├─── repositories
│        └─── users
└─── __tests__
```

## Test
Use `npm/yarn run test` to start the basic test.

## Changelog
- Initial Version
