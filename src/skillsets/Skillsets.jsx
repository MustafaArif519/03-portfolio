import React,  { useState } from 'react';
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

export default function Skillsets() {

  const textStyle = {
    fontFamily: "Font Name, Courier",


  };
  
  const programmingLanguages = [
    {
      name: "C++",
    },
    {
      name: "C",
    },
    {
      name: "Python",
    },
    {
      name: "Arduino",
    },
    {
      name: "Javascript",
    },
    {
      name: "SQL",
    },
    {
      name: "Bash Script",
    },
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },

  ];

  const libraries = [
    {
      name: "React JS",
    },
    {
      name: "Scikit Learn",
    },
    {
      name: "Pandas",
    },
    {
      name: "Numpy",
    },
    {
      name: "Jinja",
    },
    {
      name: "arrow",
    },
    {
      name: "Material Design Bootstrap",
    },

  ];

  const frameworks = [
    {
      name: "Django",
    },
    {
      name: "Flask",
    },


  ];

  const hobbies = [
    {
      name: "running",
    },
    {
      name: "frisbee",
    },
    {
      name: "badminton",
    },


  ];

  const technologies = [
    {
      name: "Vite",
    },
    {
      name: "AWS",
    },
    {
      name: "Elastic Beanstalk",
    },
    {
      name: "Docker",
    },
    {
      name: "Unix/Linux",
    },
    {
      name: "Git",
    },
    {
      name: "Github",
    },
    {
      name: "Amazon SES",
    },
    {
      name: "EC2",
    },
    {
      name: "Firebase",
    },
    {
      name: "Google Cloud",
    },
    {
      name: "Route 53",
    },
    {
      name: "Amazon RDS",
    },
    {
      name: "MySQL",
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

  return (
    <>
      <MDBContainer className="py-5" style = {textStyle}>
        <MDBCol lg="12">
          <MDBCard className="mb-5 p-3">
            <h1 className="d-flex align-items-center justify-content-center">Skillsets</h1>
            <MDBCardBody>
              <MDBRow className="mb-4">
                <div className="d-flex align-items-center justify-content-center">
                  {/* <MDBIcon icon="search" /> */}
                  <input
                    className="form-control form-control-sm ml-3"
                    type="text"
                    placeholder="ex: python, aws, linux, etc..."
                    aria-label="Search"
                    // Step 2: Add an event handler for input changes
                    onChange={handleSearchInputChange}
                    // Step 2: Set the input value to the searchQuery state
                    value={searchQuery}
                  />
                </div>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="5">
                  <MDBCardText>
                  <strong>Programming Languages:
                  </strong>
                  </MDBCardText>
                </MDBCol>
                <MDBCol sm="7">
                  <MDBCardText className="text-muted">
                    {extractNamesAsText(programmingLanguages)}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="5">
                  <MDBCardText>
                  <strong>Libraries:
                  </strong>
                  </MDBCardText>
                </MDBCol>
                <MDBCol sm="7">
                  <MDBCardText className="text-muted">
                    {extractNamesAsText(libraries)}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="5">
                  <MDBCardText>
                  <strong>Frameworks:
                  </strong>
                  </MDBCardText>
                </MDBCol>
                <MDBCol sm="7">
                  <MDBCardText className="text-muted">
                    {extractNamesAsText(frameworks)}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="5">
                  <MDBCardText><strong>
                    Technologies:
                    </strong></MDBCardText>
                </MDBCol>
                <MDBCol sm="7">
                  <MDBCardText className="text-muted">
                    {extractNamesAsText(technologies)}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="5">
                  <MDBCardText>
                  <strong>Hobbies:
                  </strong>
                  </MDBCardText>
                </MDBCol>
                <MDBCol sm="7">
                  <MDBCardText className="text-muted">
                    {extractNamesAsText(hobbies)}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>

          <MDBRow>
            <MDBCol md="6"></MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBContainer>
    </>
  );
}