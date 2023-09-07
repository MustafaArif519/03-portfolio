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

export default function About() {
  const textStyle = {
    fontFamily: "Font Name, Courier",


  };

  const downloadResume = () => {
  // Replace 'pdf-sample.pdf' with the actual URL of your PDF file
  const pdfUrl = 'images/Arif_Resume_2023.pdf';

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
    const pdfUrl = 'images/TWM25BHH.pdf';
  
    // Create an anchor element
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
  
    // Set the download attribute with the desired filename
    anchor.download = 'Arif_Mustafa_Transcript.pdf';
  
    // Trigger a click event on the anchor to initiate the download
    anchor.click();
  
    };
  
  return (
    <>
      <section >
        <MDBContainer className="py-5">


          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
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
                      <MDBIcon fab icon="linkedin" size='3x' style={{ color: '#3b5998' }} />
                    </a>

                    <a href="https://github.com/MustafaArif519"
                      className='me-4 text-reset' target="_blank" rel="noopener noreferrer">
                      <MDBIcon fab icon="github" size='3x' style={{ color: '#3b5998' }} />
                    </a>


                  </MDBCol>
                </MDBCardBody>
              </MDBCard>


            </MDBCol>

            <MDBCol lg ="8">
            <MDBCard alignment='' style={textStyle}>
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
        <MDBCardTitle> <h3>~$whoami (Who I Am)</h3> </MDBCardTitle>
        <br />
        <MDBCardText>
          My name is Mustafa Arif and I am currently a bacehlors student majoring in computer
          science at the University of Michigan set to graduate December 2023. As a software engineer
          I have experience in full stack development, distributed systems, and embedded systems.
          I am also currently taking courses in developing operating systems and machine learning this
          semester. 
          If you happen to be a recruiter and stumble accross my website, feel free to send me 
          an email! :D

        </MDBCardText>



      </MDBCardBody>
      <MDBCardFooter className='text-muted'>
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