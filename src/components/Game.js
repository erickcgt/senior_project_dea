function submit(){
    var gamepage = document.getElementById("gamepagediv");
    console.log(gamepage);
    var display = document.createElement("p")
    display.textContent = display.textContent = document.getElementById("search").value;
    gamepage.appendChild(display);

    if(document.getElementById("search").value == "<script>alert('Attack Successful')</script>"){
        alert("Attack Successful");
    }

    return;
}

function submit2(){
    var gamepage = document.getElementById("search-container-2");
    console.log(gamepage);

    if(document.getElementById("search-2").value == "https://test-website.com/accounts?info=Usernames'--"){

        let usernamesArr = ["codebike", "neithercostume", "itachi", "randomturtle", "volcanoshark", "orangegator", "purpledonkey"];
        let table = document.createElement("TABLE");

        for(let i = 0; i < usernamesArr.length; i++){
            var row = table.insertRow(i);
            row.style.border = "1px solid black";
            row.insertCell(0).innerHTML = usernamesArr[i];
        }

        var header = table.createTHead();
        let headerRow = header.insertRow(0);
        header.style.fontWeight = 'bold';
        header.style.border = "1px solid black";
        headerRow.insertCell(0).innerHTML = "Usernames";
        gamepage.appendChild(table);
    }

    return;
}

function submit3(){
    var gamepage = document.getElementById("search-container-3");
    console.log(gamepage);

    if(document.getElementById("email").value == "administrator'--"){
        alert("Logged in as admin");

    }
    return;
}

function GamePage(){

    const centerItems = {
        justify: "center"
    
      };
      
    return(
        <div id="gamepagediv">
            <h1>Game Page!</h1>
            <p> 1. This first question focuses on Cross-Site Scripting (XSS). Type in a JavaScript command into the search bar to run a JavaScript alert that displays "Attack Successful". <br/>
                Hint: Wrap the JavaScript code with the script tag.  
            </p>
            
            <div className="search-container">
                <input type="text" placeholder="Search...." id="search"></input>
                <button onClick={submit}>Submit</button>
            </div>

            <p> 2. This question focuses on running a SQL injection attack. Imagine that when we insert this URL into a browser https://test-website.com/accounts?info=Usernames <br/>
                this SQL command (SELECT * FROM accounts WHERE info = 'Usernames' AND hidden = 0) is run to return you a list of both usernames that are not hidden and those that are hidden. <br/>
                Update the URL so that a SQL injection attack is changed so that both unhidden and hidden usernames are displayed.
            </p>

            <div id="search-container-2" style={centerItems}>
            <input type="text" placeholder="Search...." id="search-2"></input>
            <button onClick={submit2}>Submit</button>
            </div>

            <p> 3. This question is a different varitation of a SQL injection attack. We have a login form where a person can type in their username and password. <br/>
                If a user types in "Bob" into the username and "12345" into the password field, a SQL query is performed on the database that looks like this <br/>
                SELECT * FROM users WHERE username = 'Bob' AND password = '12345'. If a website doesn't have the features necessary to protect against SQL injection,<br/>
                someone can alter the SQL query to enable them to login as an administrator. Change the username and password so you can login as the administrator.
            </p>

            <div id="search-container-3">
            <input type="text" placeholder="Email..." id="email"></input>
            <input type="text" placeholder="Password...}" id="password"></input>
            <button onClick={submit3}>Login</button>
            </div>
        </div>
    );
}

export default GamePage;