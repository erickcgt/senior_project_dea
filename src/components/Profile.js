import React from 'react';
import './personalProfile.css';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon, MDBProgress, MDBProgressBar, MDBBtn } from 'mdb-react-ui-kit';

export default function PersonalProfile() {

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

  return (
    <section style={container}>
         <h4 style={heading}>My Profile</h4>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="8" className="mb-4 mb-lg-0">
            <MDBCard style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                   <MDBTypography tag="h5">Jane Doe</MDBTypography>
                  <MDBCardText>CS Undergraduate</MDBCardText>  
                  <MDBBtn outline color="light" style={{height: '36px', overflow: 'visible'}}>
                    Edit profile
                  </MDBBtn>             
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">info@example.com</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Password</MDBTypography>
                        <MDBCardText className="text-muted">*********</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBTypography tag="h6">My Progress</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Learn</MDBTypography>
                        <MDBProgress className="rounded" height='30'>
                        <MDBProgressBar striped animated width={83} valuemin={0} valuemax={100}> 83% </MDBProgressBar>
                        </MDBProgress>
                        <MDBCardText style={{paddingTop:'20px'}}>5/6 Sections Completed</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Game</MDBTypography>
                        <MDBProgress className="rounded" height='30'>
                        <MDBProgressBar striped animated width={60} valuemin={0} valuemax={100}> 60% </MDBProgressBar>
                        </MDBProgress>  
                        <MDBCardText style={{paddingTop:'20px'}}>3/5 Games Completed</MDBCardText>                      
                      </MDBCol>
                    </MDBRow>                    
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}