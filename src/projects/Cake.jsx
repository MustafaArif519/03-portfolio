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


const Cake = () => {
    return (
      <>
         <MDBCard style={{height: "600px", maxWidth: "400px",}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='images/cake.png' fluid alt='...' style={{height:"200px"}}/>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle style={{height: "70px"}}><h3>Cake Boutique Website</h3></MDBCardTitle>
        <MDBCardText>
          Contract work involving a full-stack project for a local bakery. The backend was developed
          using Django framework in Python and deployed to AWS Elastic Beanstalk. The frontend was 
          deployed to firebase and the database was hosted on AWS Relational Database.
        </MDBCardText>

        
 
      </MDBCardBody>
      <MDBCardFooter>
        <MDBBtn color = "secondary" href = "https://github.com/MustafaArif519/cake/" target= "_blank">
        <MDBIcon fab icon="github" size='2x' style={{ color: '#3b5998' }} />
        </MDBBtn>


        </MDBCardFooter>
    </MDBCard>
      
      
      </>
    );
  };
  
  export default Cake;
  
  
  
  
  