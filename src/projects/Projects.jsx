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

export default function  Projects ({theme}) {

  const textStyle = {
    fontFamily: "Font Name, Courier",


  };

  let textClass = "py-3 p-1 text-grey";

  if(theme == "dark"){
    textClass = "py-3 p-1 text-white";
  }


  return (
    <>
    <MDBContainer className={textClass} style = {textStyle}>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '100px', 
  justifyContent: 'center', alignItems: "center"}}>
        <Cake theme = {theme} />
        <Electromyography theme = {theme} />
        
        <Forum theme = {theme} />
        <Wikipedia theme = {theme} />


        </div>
    </MDBContainer>

    </>
  );
}