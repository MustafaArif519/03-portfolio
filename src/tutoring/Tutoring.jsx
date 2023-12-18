import React, { useState } from 'react';
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
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function Tutoring({theme, iconColor}) {

  const textStyle = {
    fontFamily: "Font Name, Courier",


  };

  let textClass = "py-5 text-grey";
console.log(theme);
  if(theme == "dark"){
    textClass = "py-5 text-white";
  }

  const coursework = [
    {
      name: "AP Biology",
    },
    {
      name: "AP Physics C",
    },
    {
      name: "AP Chemistry",
    },
    {
      name: "AP Calculus BC (AB)",
    },
    {
      name: "Genetics/Bacteriology/Biotechnology/Embryology (GBBE)",
    },
    {
      name: "AP English Language",
    },
    {
      name: "AP English Literature",
    },
    {
      name: "AP Environmental Science",
    },
    {
      name: "AP Computer Science Principles",
    },
    {
      name: "AP Computer Science",
    },
    {
      name: "Algebra 2 Honors",
    },
    {
      name: "Algebra 1 Honors",
    },
    {
      name: "Geometry Honors",
    },
    {
      name: "Precalculus Honors",
    },
    {
      name: "AP Statistics",
    },
    {
      name: "Chemistry 1",
    },
    {
      name: "Biology 1",
    },
    {
      name: "Genetics 1",
    },
    {
      name: "9 Honors English Lit/Comp",
    },
    {
      name: "10 Honors English Lit/Comp",
    },
  ];
  



  // Step 1: Create a state variable for the search query
  const [searchQuery, setSearchQuery] = useState('');




  // Step 3: Filter items based on the search query
  function extractNamesAsText(items) {
    // Check if the input is an array and is not empty
    if (!Array.isArray(items) || items.length === 0) {
      return 'No items to extract';
    }

    // Step 3: Filter items based on the search query
    const filteredItems = searchQuery
      ? items.filter(item =>
        item.name
          .toLowerCase()
          .split(' ') // Split item name into words
          .some(word =>
            searchQuery
              .trim()
              .toLowerCase()
              .split(' ') // Split trimmed search query into words
              .map(queryWord => queryWord.replace(/,$/, '')) // Remove commas at the end of query words
              .some(searchWord => word.includes(searchWord))
          )
      )
      : items;

    // Use the map function to extract the "name" property from each filtered item
    const names = filteredItems.map(item => item.name);

    // Join the extracted names with commas and return as plain text
    return names.join(', ');
  }
  // Step 2: Add an event handler to update the search query state
  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };


  const [secondSearchQuery, setSecondSearchQuery] = useState('');

  // Step 3: Filter items based on the search query
  function extract2NamesAsText(items) {
    // Check if the input is an array and is not empty
    if (!Array.isArray(items) || items.length === 0) {
      return 'No items to extract';
    }

    // Step 3: Filter items based on the search query
    const filteredItems = secondSearchQuery
      ? items.filter(item =>
        item.name
          .toLowerCase()
          .split(' ') // Split item name into words
          .some(word =>
            secondSearchQuery
              .trim()
              .toLowerCase()
              .split(' ') // Split trimmed search query into words
              .map(queryWord => queryWord.replace(/,$/, '')) // Remove commas at the end of query words
              .some(secondSearchQuery => word.includes(secondSearchQuery))
          )
      )
      : items;

    // Use the map function to extract the "name" property from each filtered item
    const names = filteredItems.map(item => item.name);

    // Join the extracted names with commas and return as plain text
    return (
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    );
  }
  // Step 2: Add an event handler to update the search query state
  const handleSearch2InputChange = event => {
    setSecondSearchQuery(event.target.value);
  };


  const headingStyle = {
    textAlign: 'center',
    whiteSpace: 'normal', // Change to 'nowrap' or 'break-spaces' for wrapping

  };

  const downloadTranscript = () => {
    // Replace 'pdf-sample.pdf' with the actual URL of your PDF file
    const pdfUrl = 'images/Arif_Mustafa_High_School_Transcript.pdf';

    // Create an anchor element
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;

    // Set the download attribute with the desired filename
    anchor.download = 'Arif_Mustafa_High_School_Transcript.pdf';

    // Trigger a click event on the anchor to initiate the download
    anchor.click();

  };


  return (
    <>
      <MDBContainer className={textClass} style={textStyle} >
        <MDBRow>
          <MDBCol lg="7">

            <MDBCard className="mb-5 p-3" background={theme}>
              <h1 style={headingStyle}>
                A Short Story
              </h1>
              <MDBCardBody >
                I repeated Algebra 1, not something you would expect from someone who is
                offering to tutor for Physics C or Calculus BC in their opening statement. However
                I am someone who believes in transparency and that my clients should know my full
                credentials and experiences before hiring me. With that, I make the confession that
                I am not some prodigy despite maintaining a 4.0 and taking 11 AP classes.
                In fact, I would go as far as to say I am slightly below average
                when it comes to learning new concepts. I am someone who needs to be involved with what
                I am learning to truly understand and excel in it, there is not a single class I have
                taken in high school or college that didn't require anything other than my best effort.
                Through my struggles, I have gained insight on what exactly makes challenging concepts
                challenging, and how I and others struggling can tackle these concepts head on and come
                out understanding them better than most. I have found that finding the right answer to
                a question is often a trivial matter, and what matters most is the process of how we got
                there. The way we organize our work and thoughts and what approaches we consider taking
                are what allow us to not only find the correct answers to test questions but also provide
                a new way of problem solving for obstacles we encounter outside of the classroom as well.
                While I can't promise my client will get a specific grade after my tutoring sessions, I
                can promise to provide them with a style of thinking and analysis that would allow them
                to do so while tailoring my teaching approach to best suit each individual's
                learning style.

              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6"></MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol lg="5">
            <MDBCard className="mb-5 p-3" background={theme}>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol>
                    <MDBBtn color="secondary"
                      onClick={downloadTranscript}>
                      <MDBIcon fas icon="graduation-cap" />
                      <br />Transcript
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol style={{ padding: '10px 0', fontSize: "20px" }}>
                    GPA : 4.0 (uw)
                  </MDBCol>
                </MDBRow>

              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mb-5 p-3" background={theme}>
              <h1 className="d-flex align-items-center justify-content-center"> Classes</h1>
              <MDBCardBody >
                <MDBRow className="mb-4">
                  <div className="d-flex align-items-center justify-content-center">
                    {/* <MDBIcon icon="search" /> */}
                    <input
                      className="form-control form-control-sm ml-3"
                      type="text"
                      placeholder="ex: AP Biology, GBBE, etc..."
                      aria-label="Search"
                      // Step 2: Add an event handler for input changes
                      onChange={handleSearch2InputChange}
                      // Step 2: Set the input value to the searchQuery state
                      value={secondSearchQuery}
                    />
                  </div>
                </MDBRow>
                {extract2NamesAsText(coursework)}
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6"></MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}