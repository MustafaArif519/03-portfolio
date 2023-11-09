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


const Cake = ({theme}) => {



  
    return (
      <>
         <MDBCard style={{height: "600px", maxWidth: "400px",}}  background={theme}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='images/cake.png' fluid alt='...' style={{height:"200px"}}/>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle style={{height: "70px"}}><h3 style={{ fontWeight: 'bold' }}>Cake Boutique Website</h3></MDBCardTitle>
        <MDBCardText style={{ maxHeight: '150px', overflowY: 'auto' }}>
  Contract work involving a full-stack project for a local bakery. The backend was developed
  using Django framework in Python and deployed to AWS Elastic Beanstalk. The frontend was developed using
  React js via Vite frontend tooling package and npm package manager. 
  deployed to AWS Amplify. The domain name was provided by AWS Route 53 service and images were 
  stored using AWS S3 buckets for scalability. 
</MDBCardText>


        
 
      </MDBCardBody>
      <MDBCardFooter>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <MDBBtn color="secondary" href="https://github.com/MustafaArif519/cake/" target="_blank">
      <MDBIcon fab icon="github" size="2x" style={{ color: '#3b5998' }} />
    </MDBBtn>
    <MDBBtn color="secondary" href="https://www.faridascakeboutique.com/" target="_blank">
    <MDBIcon fas icon="globe" size="2x" style={{ color: '#3b5998' }} />
      
    </MDBBtn>
  </div>
</MDBCardFooter>

    </MDBCard>
      
      
      </>
    );
  };
  
  export default Cake;
  
  
  
  
  