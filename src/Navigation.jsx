import Nav from 'react-bootstrap/Nav';
import { Outlet, Link } from "react-router-dom";
import { useState, useCallback } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBBtn,
    MDBIcon,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModal,
    MDBModalBody,
    MDBModalFooter,
    MDBBadge,
    MDBNavbarLink,


} from 'mdb-react-ui-kit';

export default function Navigation() {

    const [showNavNoToggler, setShowNavNoToggler] = useState(false);

    const logo = {
        fontFamily: "Font Name, Courier",

        fontSize: "30px",
        paddingLeft: "10px",
        paddingRight: "10px",

        color:"#FFCB05",

      };

    return (
        <>
            <MDBNavbar sticky expand='lg' light className="navigator" >
                <MDBContainer fluid>

                    <MDBNavbarBrand>
                        <Nav.Link onClick = {() => setShowNavNoToggler(false)} 
                        as={Link} to={`/`} style={logo}>
                        &#123;M&#125;
                        </Nav.Link>
                    </MDBNavbarBrand>
 
                    

                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarTogglerDemo02'
                        aria-controls='navbarTogglerDemo02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavNoToggler(!showNavNoToggler)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNavNoToggler}>
                        <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem className='active'>

                                <Nav.Link style={{color: "#FFCB05"}} onClick = {() => setShowNavNoToggler(false)} 
                                as={Link} to={`/`}>&lt;About /&gt;</Nav.Link>

                            </MDBNavbarItem>
                            {/* <MDBNavbarItem>
                                <Nav.Link as={Link} to={`/about`}>About</Nav.Link>
                            </MDBNavbarItem> */}


                            

                            <MDBNavbarItem>
                                <Nav.Link style={{color: "#FFCB05"}} onClick = {() => setShowNavNoToggler(false)} 
                                as={Link} to={`/skillsets`}>&lt;Skillsets /&gt;</Nav.Link>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <Nav.Link style={{color: "#FFCB05"}} onClick = {() => setShowNavNoToggler(false)} 
                                as={Link} to={`/projects`}>&lt;Projects /&gt;</Nav.Link>
                            </MDBNavbarItem>


                            <MDBNavbarItem>
                                <Nav.Link style={{color: "#FFCB05"}} onClick = {() => setShowNavNoToggler(false)} 
                                as={Link} to={`/contract`}>&lt;Contract Work /&gt;</Nav.Link>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <Nav.Link style={{color: "#FFCB05"}} onClick = {() => setShowNavNoToggler(false)} 
                                as={Link} to={`/tutoring`}>&lt;Tutoring /&gt;</Nav.Link>
                            </MDBNavbarItem>

                        </MDBNavbarNav>





                    </MDBCollapse>
                </MDBContainer>

            </MDBNavbar>
            <Outlet />

        </>
    );
}