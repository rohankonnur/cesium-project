# cesium-project

##How to Run This Project

- Make sure you have installed all dependencies (i.e. express, postgresql, cors)
- Create a postgres database and set it up according to the server/database.sql structure
  - Make sure to set up credentials in db.js so that REST API can access the database
- In one terminal, go into the server directory and run `node index`
- In another terminal, go into the client directory and run `npm start`
  - the localhost webpage should start
