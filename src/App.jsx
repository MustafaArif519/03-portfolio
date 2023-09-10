import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { useCallback } from "react";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import './App.css'
import Skillsets from './skillsets/Skillsets'
import Contract from './contract/Contract'
import ErrorPage from './ErrorPage'
import About from './about/About'
import Navigation from './Navigation';
import Projects from './projects/Projects'


function App() {



  return (
    <>

<Router >
<Navigation />
         
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contract" element={<Contract  />} />
            <Route path="/skillsets" element={<Skillsets  />} />

            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Feel free to connect with me on my socials:</span>
        </div>

        <div>
        <a href='https://www.linkedin.com/in/mustafa-arif-9a46a0239/'
                      target="_blank" rel="noopener noreferrer"
                      className='me-4 text-reset' >
                      <MDBIcon fab icon="linkedin" size='2x' style={{ color: '#3b5998' }} />
                    </a>

                    <a href="https://github.com/MustafaArif519"
                      className='me-4 text-reset' target="_blank" rel="noopener noreferrer">
                      <MDBIcon fab icon="github" size='2x' style={{ color: '#3b5998' }} />
                    </a>

          
        </div>
      </section>




    </MDBFooter>
    </>
  )
}

export default App
