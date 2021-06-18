import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './header_1024.css';
import footer_logo from '../../pictures/arn_logo_footer.png'
import { Navbar } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton'
import Nav from 'react-bootstrap/Nav'
import footer_facebook from '../../pictures/facebook/facebook.png'
import footer_github from '../../pictures/github/github.png'
import footer_instagram from '../../pictures/instagram/instagram.png'
import footer_linkedin from '../../pictures/linkedin/linkedin.png'
import footer_twitter from '../../pictures/twitter/twitter.png'
import { AiFillCloseSquare } from 'react-icons/ai';




function header_1024() {
    return (
        <div>
            <div className='body'>
                <Container>
                    <Row>
                        <Col>
                            <Navbar className='nav_1024' variant="" >
                                <Navbar.Brand href="">
                                    <img src={footer_logo} className='menu_1024_logo'
                                    />
                                </Navbar.Brand>
                            </Navbar>
                        </Col>
                        <Col>

                            <a href='/contact'><AiFillCloseSquare className='icon_1024' />  </a>
                        </Col>
                    </Row>
                </Container>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link className='about_1024' href="">ABOUT</Nav.Link>
                        <Nav.Link className='services_1024' eventKey="">SERVICES</Nav.Link>
                        <Nav.Link className='works_1024' eventKey="">WORKS</Nav.Link>
                        <Nav.Link className='career_1024' eventKey="">CAREER</Nav.Link>
                        <Nav.Link className='contact_1024' eventKey="/contact">CONTACT</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <span className='en_1024' eventKey="">EN</span>
                    </Nav.Item>
                    <Nav.Item>
                        <span className='ru_1024' eventKey="">RU</span>
                    </Nav.Item>
                    <Nav.Item>
                        <span className='hy_1024' eventKey="">HY</span>
                    </Nav.Item>
                </Nav>
                <Container>
                    <Row>
                        <Col>
                            <img src={footer_facebook} className='footer_facebook_1024'></img>
                            <img src={footer_github} className='footer_github_1024'></img>
                            <img src={footer_instagram} className='footer_instagram_1024'></img>
                            <img src={footer_linkedin} className='footer_linkedin_1024'></img>
                            <img src={footer_twitter} className='footer_twitter_1024'></img>

                        </Col>
                        <Col>
                            <button className='button_1024'><p className='button_text_1024'>GET EN ESTIMATE</p></button>
                        </Col>
                    </Row>
                </Container>


            </div>

        </div>
    )
}




export default header_1024