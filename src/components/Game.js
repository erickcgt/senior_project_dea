function submit(){
    var gamepage = document.getElementById("gamepagediv");
    console.log(gamepage);
    var display = document.createElement("p")
    display.textContent = display.textContent = document.getElementById("search").value;
    gamepage.appendChild(display);
    return;
}

function GamePage(){

   

    return(
        <div id="gamepagediv">
            <h1>Game Page!</h1>
            <div className="search-container">
                <input type="text" placeholder="Search...." id="search"></input>
                <button onClick={submit}>Submit</button>
            </div>
        </div>
    );
}

export default GamePage;