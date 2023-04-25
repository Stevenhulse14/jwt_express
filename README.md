# Steps to creating a complete express server

_Hint_ Install the dependancies when you need them.

1. Build out our file Structure

   - Create our entry for our db ( client.js ) create our express server entrypoint ( server.js )
   - run commands npm init
   - npm i express
   - create basic express server with routing to api folder, and creating an auth and index.js for routing

2. Get Middleware and Error Handlers configured.

   - Static Middleware is preinstalled with express app.use(express.static('public'))
   - Json Middleware is preinstalled with express app.use(express.json())
   - Morgan is a logging middleware
     - npm i morgan
     - import morgan and utilize the middleware app.use(morgan('dev'))

3. Next lets finish our Registeration route

   - Create Logical if else statements to see if the information is correct.
   - Create
   -
   - TEST WITH THUNDER CLIENT
     - Type in url 'localhost:8080/api/user/register'
     - Go into Header input Content-Type - application/json
     - GO to the body and put in a object with username and password

4. Intro to JWT
   -JWT sign and verify methods

   - Sign is a function that takes in an object and a jwt and encrypts both
   - verify takes the token itself and verify
   - create playerInvite route.

5. Create Db
   - npm i pg
   - Utilizing your client file import Client and connect to the db. const {Client} = require('pg')
   - const client = new Client("postgres://localhost:5432/fakeusers")
   - Create the createNewUser() and fetchUserbyUsername()
