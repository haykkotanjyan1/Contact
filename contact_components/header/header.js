import React from 'react'
import './header.css';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../pictures/arn_logo.png';
import logo2x from '../../pictures/arn_logo@2x.png';
import logo3x from '../../pictures/arn_logo@3x.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import Media from 'react-media';





function Header() {
    return (

        <div className='header'>
            <Container className='header_container'>
                <Row>
                    <Col>
                        <Navbar bg="white" expand="lg">
                            <img src={logo} srcset={{ logo2x }, { logo3x }} className="arn_logo"></img>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll" >
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                                >
                                <Form inline>
                                    <Nav.Link href="/about" className='about'>About</Nav.Link>
                                    <Nav.Link href="/services" className='services'>Services</Nav.Link>
                                    <Nav.Link href="/works" className='works'>Works</Nav.Link>
                                    <Nav.Link href="/career" className='career'>Career</Nav.Link>
                                    <Nav.Link href="/contact" className='contact'>Contact</Nav.Link>
                                    <button className='btn_header'><p className='get-an-estimate'>GET AN ESTIMATE</p></button>
                                    <select className='lang_select'>
                                        <option>ARM</option>
                                        <option>ENG</option>
                                        <option>RUS</option>
                                    </select>
                                </Form>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Header