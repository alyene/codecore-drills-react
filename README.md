# codecore-drills-react

## Intro
 CodeCore Group Project: CodeCore Drillz, a coding quiz app built using Node, Express, and React.js. The app allows you to sign-up for an account, login, and do coding drills created by the site administrator.

 This is a single page application that uses React.js on the front end, which interacts with the Node.js 
backend via RESTful API calls. The React and Node projects are separate and run independently, and both
of them are included in this repository.

## Dependencies
### Backend
 - Express.js - Node.js web library
 - PostgreSQL - database storage
 - Sequelize - ORM for data modeling and interacting with the Postgres database
 - Passport.js - library for user authentication

### Frontend
- React.js - Facebook's reactive UI library
- Other - custom written router to switch between components at the app index


## Running the Project
After cloning the repo you must first start the Node server, and then start the React client.

## Start Node Server
In Terminal, navigate to
```
./node/
```
and run :
```
$ yarn install
```
```
$ yarn start
```

## Start React Client
In a new Terminal window or tab, navigate to
```
./react/client/
```
and run :
```
$ yarn install
```
```
$ yarn start
```

React should automatically open up a window in your browser and navigate to 
```
localhost:3006
```
if it has started. You can also navigate there manually in any web browser.

Happy Coding!

