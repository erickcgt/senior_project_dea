# Running our App

To run the react portion just run: npm start


SERVER INSTALLATIONS:

To get the server to work, follow these instructions.

1) Delete the package.json and package-lock.json from the server folder

Then, run the following commands to install the necessary packages:

1) npm init
2) npm install express nodemon
3) npm install mongoose
4) npm install cors
5) npm install bcryptjs
6) npm install jsonwebtoken

Then within the package.json file, replace the scripts value "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
  
  with "scripts": {
    "start": "node server.js"
  }
  
Also, if the name value is note "Server", replace that name with "Server". It should be "Server" by default.


To run the server use the following command: node server
