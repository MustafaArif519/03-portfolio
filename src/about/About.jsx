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
          My name is Mustafa Arif and I am currently a bachelors student majoring in computer
          science at the University of Michigan Ann Arbor set to graduate December 2023. As a 
          software engineer
          I have experience in machine learning algorithms, distributed systems, and embedded systems.
          I am also currently doing contract work for web projects ranging from frontend 
          portfolio websites to scalable full stack solutions for businesses.
          This semester, I'm expanding my knowledge by studying operating systems.
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

        {/*<MDBContainer fluid className="py-5" style = {textStyle}>
        <div className='p-5 text-center'>
        <h1 className='mb-3' style ={{color: "#FFCB05"}}>
          A Brief History of (My) Time:
          </h1>
        </div>
      <div className="main-timeline-2">
        <div className="timeline-2 left-2">
          <MDBCard>
           
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">Starting First Semester as a Pre-Med Student</h4>
              <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> August 2020
              </p>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 right-2">
          <MDBCard>
            
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">Switching from Pre-Med to Computer Science</h4>
              <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> August 2022
              </p>
              <p className="mb-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 left-2">
          <MDBCard>
           
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">Coding Theory Research Assistant</h4>
              <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> April 2023 - August 2023
              </p>
              <p className="mb-0">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 right-2">
          <MDBCard>
          
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">Full Stack Web Developer Contractor</h4>
              <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> 2014
              </p>
              <p className="mb-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 left-2">
          <MDBCard>
           
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">Mussum ipsum cacilds</h4>
              <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> 2013
              </p>
              <p className="mb-0">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Itaque earum rerum hic tenetur a
                sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat.
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </MDBContainer> */}
      </section>
    </>
  );
}