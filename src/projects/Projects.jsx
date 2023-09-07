import React from 'react';
import Cake from './Cake'
import Forum from './Forum'
import Electromyography from './Electromyography'
import Wikipedia from './Wikipedia';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function  Projects () {

  const textStyle = {
    fontFamily: "Font Name, Courier",


  };


  return (
    <>
    <MDBContainer className="py-3 p-1" style = {textStyle}>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '100px', 
  justifyContent: 'center', alignItems: "center"}}>
        <Cake />
        <Electromyography />
        
        <Forum />
        <Wikipedia />


        </div>
    </MDBContainer>

    </>
  );
}