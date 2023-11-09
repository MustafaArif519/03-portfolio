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

export default function Skillsets({theme}) {

  const textStyle = {
    fontFamily: "Font Name, Courier",


  };

  let textClass = "py-5 text-grey";

  if(theme == "dark"){
    textClass = "py-5 text-white";
  }
  
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
    {
      name: "PyTorch",
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

  const coursework = [
    {
      name: "EECS 280: Programming and Data Structures",
    },
    {
      name: "EECS 203: Discrete Math",
    },
    {
      name: "EECS 281: Data Structures and Algorithms",
    },
    {
      name: "EECS 370: Introduction to Computer Organization",
    },
    {
      name: "EECS 376: Foundations of Computer Science",
    },
    {
      name: "EECS 485: Web Systems",
    },
    {
      name: "EECS 493: User Interface Development",
    },
    {
      name: "MATH 214: Linear Algebra",
    },
    {
      name: "EECS 445: Introduction to Machine Learning",
    },
    {
      name: "EECS 482: Introduction to Operating Systems",
    },
    {
      name: "EECS 497: Human Centered Software Development",
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
      name: "S3 Buckets",
    },
    {
      name: "Amplify",
    },
    {
      name: "npm",
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

  return (
    <>
      <MDBContainer className={textClass} style = {textStyle}>
        <MDBRow>
        <MDBCol lg="8">
          <MDBCard className="mb-5 p-3" background= {theme}>
          <h1 style={headingStyle}>
      Languages/Technologies
    </h1>
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
                  <MDBCardText style={{ fontWeight: 'bold' }}>
                  Programming Languages:
                  
                  </MDBCardText>
                </MDBCol>
                <MDBCol sm="7">
                  <MDBCardText >
                    {extractNamesAsText(programmingLanguages)}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="5">
                  <MDBCardText style={{ fontWeight: 'bold' }}>
                  Libraries:
                  
                  </MDBCardText>
                </MDBCol>
                <MDBCol sm="7">
                  <MDBCardText className="">
                    {extractNamesAsText(libraries)}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="5">
                  <MDBCardText style={{ fontWeight: 'bold' }}>
                  Frameworks:
                  
                  </MDBCardText>
                </MDBCol>
                <MDBCol sm="7">
                  <MDBCardText className="">
                    {extractNamesAsText(frameworks)}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="5">
                  <MDBCardText style={{ fontWeight: 'bold' }}>
                    Technologies:
                    </MDBCardText>
                </MDBCol>
                <MDBCol sm="7">
                  <MDBCardText className="">
                    {extractNamesAsText(technologies)}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="5">
                  <MDBCardText style={{ fontWeight: 'bold' }}>
                  Hobbies:
                  
                  </MDBCardText>
                </MDBCol>
                <MDBCol sm="7">
                  <MDBCardText className="">
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
        <MDBCol lg="4">
          <MDBCard className="mb-5 p-3" background = {theme}>
            <h1 className="d-flex align-items-center justify-content-center">Coursework</h1>
            <MDBCardBody>
              <MDBRow className="mb-4">
                <div className="d-flex align-items-center justify-content-center">
                  {/* <MDBIcon icon="search" /> */}
                  <input
                    className="form-control form-control-sm ml-3"
                    type="text"
                    placeholder="ex: operating systems, machine learning etc..."
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