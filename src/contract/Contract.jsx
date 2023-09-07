import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBCardHeader,
  MDBCardTitle,
  MDBCardFooter,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function  Contract () {
  const textStyle = {
    fontFamily: "Font Name, Courier",


  };


  return (
    <>
    <MDBContainer className="py-5" style = {textStyle}>
    <h2 style={{height:"100px", textAlign: "center", color:"#FFFFFF"}}>
      <div style = {textStyle} >
        <span >Web solutions that are </span>
        <TypeAnimation 
      sequence={[
        ' creative',
        1000, 
        ` scalable`,
        1000,
        ` responsive`,
        1000,
        ` modern`,
        1000,
        ` efficient`,
        1000,
        ` cost-effective`,
        1000,
        ` fault tolerant`,
        1000,

      ]}
      wrapper="span"
      speed={20}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>
    </h2>
    <MDBCard alignment='' >
      <MDBCardHeader style= {{minHeight:"90px"}}>
      <h3>Unlock the full potential of your project – I'm here to turn your vision 
          into reality as your full stack developer for hire!</h3>
      
          
          </MDBCardHeader>
      <MDBCardBody>
        
        <MDBCardText>
          <h3>
          Impressed with what you see? Contact me for contract work using: 
          <p style={{ fontWeight: 'bold' }}> mustaf@umich.edu</p>
          <br />
          <br />
          <p>Looking forward to hearing from you!</p>
          </h3>
        </MDBCardText>



      </MDBCardBody>
      <MDBCardFooter className='text-muted'>

      <div style={{ display: 'flex', alignItems: 'center' }}>
  <span style={{ marginRight: '10px' }}>See how I made this website here -&gt;</span>
  <MDBBtn color="secondary" href="https://github.com/MustafaArif519/portfolio/" target="_blank">
    <MDBIcon fab icon="github" size='1x' style={{ color: '#3b5998' }} />
  </MDBBtn>
</div>

      </MDBCardFooter>
    </MDBCard>
    </MDBContainer>
    </>
  );
}