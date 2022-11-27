import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function App() {

    const carousel = {           
                   
        position: "absolute",
        top: "calc(50% + 40px)",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }

    const title = {
        fontFamily:"Gluten",        
        color:"white"
    }

    const caption = {
        fontFamily:"Gluten",
        color:"white"
    }

    const image = {
        height:"8rem"
    }

 

  return (
    <MDBCarousel showControls showIndicators style={carousel}>
      <MDBCarouselItem        
        className='w-100 d-block'
        itemId={1}
        src='./welcomeBkgdBlue.png'
        alt='...'
        
      >
        <img src='./welcomeImg.png' style={image}></img>
        <h5 style={title}>Welcome User!</h5>
        <p style={caption}>Please navigate to the "Learn" page to read up on important topics, and then head over to the "Game" page to test your knowledge.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='./welcomeBkgdOrange.png'
        alt='...'
      >
        <img src='./scoreImg.png' style={image}></img>
        <h5 style={title}>Checking Your Score</h5>
        <p style={caption}>Take a look at your "My Profile" page to see your progress. There you can see how many sections and game questions you have completed. Keep up the great work!</p>
      </MDBCarouselItem>
      <MDBCarouselItem        
        className='w-100 d-block'
        itemId={3}
        src='./welcomeBkgdBlue.png'
        alt='...'
      >
        <img src='./creatorImg.png' style={image}></img>
        <h5 style={title}>The Creators</h5>
        <p style={caption}>This website was created by University of Florida students Daymao Silva, Erick Gonzalez, and Annalina Becker for their Fall 2022 senior project. They were advised under Professor Cheryl Resch.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}