import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './about.css';

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

export default function About({theme, iconColor}) {
  const textStyle = {
    fontFamily: "Font Name, Courier",


  };

  const downloadResume = () => {
  // Replace 'pdf-sample.pdf' with the actual URL of your PDF file
  const pdfUrl = 'images/Arif_Resume_2024.pdf';

  // Create an anchor element
  const anchor = document.createElement('a');
  anchor.href = pdfUrl;

  // Set the download attribute with the desired filename
  anchor.download = 'Arif_Mustafa_Resume.pdf';

  // Trigger a click event on the anchor to initiate the download
  anchor.click();

  };

  const downloadTranscript = () => {
    // Replace 'pdf-sample.pdf' with the actual URL of your PDF file
    const pdfUrl = 'images/TER8WILM.pdf';
  
    // Create an anchor element
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
  
    // Set the download attribute with the desired filename
    anchor.download = 'Arif_Mustafa_Transcript.pdf';
  
    // Trigger a click event on the anchor to initiate the download
    anchor.click();
  
    };


    let textClass = "py-5 text-grey";

    if(theme == "dark"){
      textClass = "py-5 text-white";
    }

  
  return (
    <>
      <section >
        <MDBContainer className={textClass}>


          <MDBRow >
            <MDBCol lg="4" >
              <MDBCard className="mb-4" background={theme}>
                <MDBCardBody className="text-center" >
                  <MDBCardImage
                    src="images/profile.jpg"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '300px' }}
                    fluid />
                  <br />
                  <br />
                  <span>
                    <MDBIcon far icon="envelope" /> mustaf@umich.edu <span />

                  </span>
                  <br />
                  <span>
                    <MDBIcon fas icon="phone" /> (248)-525-1754 <span />

                  </span>

                  <br />
                  <br />
                  <MDBCol>


                    <MDBRow lg="6">
                      <MDBCol lg="6">
                        <div className="d-flex justify-content-center mb-2">
                          <MDBBtn color="secondary" style={{ height: '100%', width: "90%" }}
                          onClick={downloadResume}>
                            <MDBIcon far icon="file" />
                            <br />Resume
                          </MDBBtn>
                        </div>
                      </MDBCol>
                      <MDBCol lg="6">
                        <div className="d-flex justify-content-center mb-2">
                          <MDBBtn color="secondary" style={{ height: '100%', width: "90%" }}
                          onClick={downloadTranscript}>
                            <MDBIcon fas icon="graduation-cap" />
                            <br />Transcript
                          </MDBBtn>
                        </div>
                      </MDBCol>
                    </MDBRow>

                    <br />

                    <a href='https://www.linkedin.com/in/mustafa-arif-9a46a0239/'
                      target="_blank" rel="noopener noreferrer"
                      className='me-4 text-reset' >
                      <MDBIcon fab icon="linkedin" size='3x' style={{ color: iconColor }} />
                    </a>

                    <a href="https://github.com/MustafaArif519"
                      className='me-4 text-reset' target="_blank" rel="noopener noreferrer">
                      <MDBIcon fab icon="github" size='3x' style={{ color: iconColor }} />
                    </a>


                  </MDBCol>
                </MDBCardBody>
              </MDBCard>


            </MDBCol>

            <MDBCol lg ="8">
            <MDBCard alignment='' style={textStyle} background={theme}>
      <MDBCardHeader style= {{minHeight:"130px", textStyle}}>
        
      <TypeAnimation
      sequence={[
        'Hello World, Nice to Meet You!',
        1000, 
        `Welcome to Mustafa Arif's Personal Website!`,
        1000,
        `Currently Seeking Full Time Entry Level Positions!`,
        1000,
        `Check Out My Projects Under Projects`,
        1000,
        `Feel Free To Connect With Me on Linkedin!`,
        1000,

      ]}
      wrapper="span"
      speed={20}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
          
          </MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle> <h3 style={{ fontWeight: 'bold' }}>~$whoami (Who I Am)</h3> </MDBCardTitle>
        <br />
        <MDBCardText>
        My name is Mustafa Arif and I am currently a freelance full stack web developer. I earned my 
Computer Science degree at the University of Michigan Ann Arbor and graduated in December 2023. As a software engineer
          I have experience in machine learning algorithms, distributed systems, 
          GPU computing, full-stack web development, and operating systems. 
          I am currently engaged in contract work, undertaking diverse web projects that encompass
           everything from crafting sleek frontend portfolio websites to architecting scalable 
           full-stack solutions for businesses. Concurrently, I find immense satisfaction in tutoring 
           fellow college students at my university. This serves as a means of imparting the knowledge 
           and insights I was privileged to receive during my time as a student, contributing to the
            academic growth of my peers.
          If you happen to be a recruiter and stumble accross my website, feel free to send me 
          an email! :D

        </MDBCardText>



      </MDBCardBody>
      <MDBCardFooter className=''>
        <p>Check out my experience and projects under their respective tabs!</p>
        
      </MDBCardFooter>
    </MDBCard>
            </MDBCol>

          </MDBRow>

         </MDBContainer>

      </section>
    </>
  );
}