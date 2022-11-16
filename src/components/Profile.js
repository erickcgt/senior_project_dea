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

export default function ProfilePage() {

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
      
    //fetch user data
    var userInfo = {};
    fetch("http://localhost:5000/userInfo", {
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
            userInfo = data;
        });
    console.log("USERINFO: ",userInfo)
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
                        <MDBCardText>John Doe</MDBCardText>
                    </MDBCol>
                    </MDBRow>
                    <hr style={line}/>
                    <MDBRow>
                    <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                        <MDBCardText>example@example.com</MDBCardText>
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
                        <MDBCardText className="mb-1" style={progressText}>Learn - (5/6 Completed)</MDBCardText>
                        <MDBProgress className="rounded" height='30'>
                        <MDBProgressBar striped animated width={83} valuemin={0} valuemax={100}> 83% </MDBProgressBar>
                        </MDBProgress>
                        <div style={spaceAfterBar}></div>
                        <MDBCardText className="mt-4 mb-1" style={progressText}>Game - (3/5 Completed)</MDBCardText>
                        <MDBProgress className="rounded" height='30'>
                        <MDBProgressBar striped animated width={60} valuemin={0} valuemax={100}> 60% </MDBProgressBar>
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