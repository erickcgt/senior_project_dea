# Running our App

INITIALLY, YOU NEED CLONE THE REPO:
1) make a folder somewhere on your computer
2) cd to that folder from the command line
3) run git clone https://github.com/erickcgt/senior_project_dea.git

IF CHANGES ARE MADE TO THE LIVE REPO (HERE ON GITHUB) AND YOU WANT YOUR LOCAL REPO TO GET THOSE CHANGES:
1) cd to your local folder (the parent folder of your .git file)
2) run git pull origin main

IF YOU HAVE MADE LOCAL CHANGES (IN YOUR LOCAL REPO) AND WANT TO PUT THEM ON THE LIVE REPO (HERE ON GITHUB):
1) cd to your local folder (the parent folder of your .git file)
2) run git add .
3) run git commit -m "your commit message"
4) run git push


REACT/BOOTSTRAP INSTALLATIONS:
Run the following commands to install everything thats necessary for React and Bootstrap

1) npm i mdb-react-ui-kit

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
7) npm install --save dotenv

Then within the package.json file, replace the scripts value "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
  
  with "scripts": {
    "start": "node server.js"
  }
  
Also, if the name value is note "Server", replace that name with "Server". It should be "Server" by default.

To connect to a MongoDB database, run command "touch .env" in server folder and add these lines to the .env file: DB_USERNAME=username and 
DB_PASSWORD=password and replace username and password with credentials for your database. For added security, add the .env to your .gitignore
if you plan on using GitHub for your repository. 


To run the server use the following command: node server
