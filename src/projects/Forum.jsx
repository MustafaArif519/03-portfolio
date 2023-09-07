import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBIcon,
  MDBCardFooter
} from 'mdb-react-ui-kit';


const Forum = () => {
    return (
      <>
         <MDBCard style={{height: "600px", maxWidth: "400px",}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='images/forum.png' fluid alt='...' style={{height:"200px"}}/>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle style={{height: "70px"}}><h3 style={{ fontWeight: 'bold' }}>Forum Backend</h3></MDBCardTitle>
        <MDBCardText>
          Open source project to create a deployable forum backend for a frontend application.
          Created using Django framework and supports sign in through social accounts such as Google and 
          Facebook. Currently uses sqlite3 as database but can be hosted on Amazon RDS fairly easily.
        </MDBCardText>

        
 
      </MDBCardBody>
      <MDBCardFooter>
        <MDBBtn color = "secondary" href = "https://github.com/MustafaArif519/forum" target= "_blank">
        <MDBIcon fab icon="github" size='2x' style={{ color: '#3b5998' }} />
        </MDBBtn>


        </MDBCardFooter>
    </MDBCard>
      
      
      </>
    );
  };
  
  export default Forum;