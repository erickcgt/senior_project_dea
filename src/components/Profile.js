import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage, 
  MDBProgress,
  MDBProgressBar
 
} from 'mdb-react-ui-kit';

export default class ProfilePage extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        userInfo: null
      };
    }
    componentDidMount(){
      fetch("http://localhost:5000/userInfo", 
        {
          method: "POST",
          crossDomain:true,
          headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
          token:window.localStorage.getItem("token"),
        }),
        }).then((res)=>res.json())
        .then(data=>{
          this.setState({userInfo: data.data});
        });
    }
    render(){
      const container = {
        display: "block",        
        marginLeft: "auto",
        marginRight: "auto",        
        fontFamily:"Gluten",
        paddingTop: "50px"
    
      };
      const heading = {
        fontFamily: "Gluten",
        color: "#2613fe",
        fontSize: "40px",
        paddingBottom: "10px",
        textDecorationLine: "underline"
      };
      const userCard = {                
        outline: "5px solid #2613fe"      
      }
      const progressCard = {    
        outline: "5px solid #f07552"           
      }
      const line = {
        color: "#2613fe",
        opacity: "100"
      }
      const progressText = {
        color: "black",
        paddingBottom: "20px"
      }
      const progressHeader = {
        color: "black",
        textDecorationLine: "underline",
        fontSize: "20px",
        paddingBottom: "21px",
        paddingTop: "20px"
      }    
      const spaceAfterBar = {
        paddingBottom: "35px"
      }
      const cardSpacing = {
        paddingLeft: "20px"
      }
      
      if(this.state.userInfo == null){
        return <div></div>
      }
      var fullName = this.state.userInfo["fname"] + " " + this.state.userInfo["lname"];
      var email = this.state.userInfo["email"];
      var gameScore = this.state.userInfo["gamescore"].reduce((a, b) => a + b, 0);
      var gameMax = this.state.userInfo["gamescore"].length;
      var gamePercentage = Math.floor(gameScore/gameMax * 100);
      var learnScore = this.state.userInfo["learnscore"].reduce((a, b) => a + b, 0);
      var learnMax = this.state.userInfo["learnscore"].length;
      var learnPercentage = Math.floor(learnScore/learnMax * 100);
      return (
        <section style={container}>
            <h4 style={heading}>My Profile</h4>
        <MDBContainer className="py-5">         
            <MDBRow>
            <MDBCol lg="4">
                <MDBCard className="mb-4" style={userCard}>
                <MDBCardBody className="text-center">
                    <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px', paddingBottom: '50px' }}
                    fluid />                      
                    <MDBRow>
                    <MDBCol sm="3">
                        <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                        <MDBCardText>{fullName}</MDBCardText>
                    </MDBCol>
                    </MDBRow>
                    <hr style={line}/>
                    <MDBRow>
                    <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                        <MDBCardText>{email}</MDBCardText>
                    </MDBCol>
                    </MDBRow>
                    <hr style={line}/>
                    <MDBRow>
                    <MDBCol sm="3">
                        <MDBCardText>Password</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                        <MDBCardText>*******</MDBCardText>
                    </MDBCol>
                    </MDBRow>        
                        
                </MDBCardBody>
                </MDBCard>            
            </MDBCol>          
            <MDBCol lg="8" style={cardSpacing}>
                <MDBCard className="mb-4" style={progressCard}>
                <MDBCardBody>
                <MDBCardText className="mb-4" style={progressHeader}>My Progress</MDBCardText>
                        <MDBCardText className="mb-1" style={progressText}>Learn - ({learnScore}/{learnMax} Completed)</MDBCardText>
                        <MDBProgress className="rounded" height='30'>
                        <MDBProgressBar striped animated width={learnPercentage} valuemin={0} valuemax={100}> {learnPercentage}% </MDBProgressBar>
                        </MDBProgress>
                        <div style={spaceAfterBar}></div>
                        <MDBCardText className="mt-4 mb-1" style={progressText}>Game - ({gameScore}/{gameMax} Completed)</MDBCardText>
                        <MDBProgress className="rounded" height='30'>
                        <MDBProgressBar striped animated width={gamePercentage} valuemin={0} valuemax={100}> {gamePercentage}% </MDBProgressBar>
                        </MDBProgress>
                        <div style={spaceAfterBar}></div>
                    
                </MDBCardBody>
                </MDBCard>

            
            </MDBCol>
            </MDBRow>
        </MDBContainer>
        </section>
      );
    }
    
}