function MyWelcomePage(){

    const welcomeHeader = {        
        fontFamily: "Gluten",
        fontSize: "40px",
        color: "#FA4616" 
    };
    const welcomeText = {        
        fontFamily: "Gluten",
        fontSize: "22px" 
    };
    const welcomeContainer = {
        border: "15px double #2613fe",
        width: "700px",
        padding: "30px 30px",        
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    };
    return(
        <div style={welcomeContainer}>
        <div style={welcomeHeader}>Welcome, User!</div>
        <div style={welcomeText}>Please navigate through the website to read about different security topics, and then test your knowledge through the game. Score points by thoroughly reading and answering questions as well as completing activities in the game. Check our your profile to see your stats. Best of luck!</div>
        </div>
    );
}

export default MyWelcomePage;