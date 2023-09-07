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


const Electromyography = () => {
    return (
      <>
         <MDBCard style={{height: "600px", maxWidth: "400px",}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='images/emg.png' fluid alt='...' style={{height:"200px"}}/>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle style={{height: "70px"}}><h3>Electromyography Arduino/Python</h3></MDBCardTitle>
        <MDBCardText>
          Open source project to convert electrical signals measured from EMG sensor in patient's residual
          limb and covert to mechanical movement in prosthetic arm. Movements determined by threshold
          values in Arduino and classified via machine learning in Python both with high accuracy.
        </MDBCardText>

        
 
      </MDBCardBody>
      <MDBCardFooter>
        <MDBBtn color = "secondary" href = "https://github.com/MichiganNeuroProsthetics/emg-classifier"
         target= "_blank">
        <MDBIcon fab icon="github" size='2x' style={{ color: '#3b5998' }} />
        </MDBBtn>


        </MDBCardFooter>
    </MDBCard>
      
      
      </>
    );
  };
  
  export default Electromyography;