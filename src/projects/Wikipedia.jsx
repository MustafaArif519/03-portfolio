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


const Wikipedia = ({theme}) => {
    return (
      <>
         <MDBCard style={{height: "600px", maxWidth: "400px",}} background={theme}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='images/wikipedia.png' fluid alt='...' style={{height:"200px"}}/>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle style={{height: "70px"}}><h3 style={{ fontWeight: 'bold' }}>Wikipedia Search Pipeline</h3></MDBCardTitle>
        <MDBCardText style={{ maxHeight: '150px', overflowY: 'auto' }}>
          Map-Reduce style Pipeline that calculates tf-idf score for every word per document from 
          a series of real wikipedia articles. Results of pipeline are then used by a REST API
          developed in Django to serve page results based on search query.
        </MDBCardText>

        
 
      </MDBCardBody>
      <MDBCardFooter>

        Email me for viewing access



        </MDBCardFooter>
    </MDBCard>
      
      
      </>
    );
  };
  
  export default Wikipedia;