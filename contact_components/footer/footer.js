import './footer.css'
import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import footer_logo from '../../pictures/arn_logo_footer.png'
import map from '../../pictures/world_map.png'
import footer_facebook from '../../pictures/facebook/facebook.png'
import footer_github from '../../pictures/github/github.png'
import footer_instagram from '../../pictures/instagram/instagram.png'
import footer_linkedin from '../../pictures/linkedin/linkedin.png'
import footer_twitter from '../../pictures/twitter/twitter.png'
import Nav from 'react-bootstrap/Nav';

function Footer() {
    return (
        <div className="Footer">
            <Container className='footer_container'>
                <Row>
                    <Col>
                        <img src={footer_logo} className='arn_logo_footer'></img>
                    </Col>
                </Row>


                <Row>
                    <Col className='first_col'>
                        <p className='footer_contact'>Contact</p>
                        <p className='footer_email'>arnologyllc@gmail.com</p>
                        <p className='footer_phone_number'>+374 90 00 00 00</p>
                        <p className='footer_phone_number_second'>+374 90 00 00 00</p>
                    </Col>
                    <Col className='second_col'>
                        <p className='footer_company'>Company</p>
                        <p className='footer_about'>About</p>
                        <p className='footer_career'>Career</p>
                        <p className='footer_team'>Team</p>
                        <p className='footer_get_estimate'>GetEstimate</p>
                        <p className='footer_privacy_policy'>PrivacyPolicy</p>
                        <p className='footer_faq'>FAQ</p>
                    </Col>
                    <Col className='third_col'>
                        <p className='footer_services'>Services</p>
                        <p className='footer_develop'>Backend Web Development
                            API Development Services
                            Devops Consulting Services
                            Django Development
                            Frontend Web Development
                            React Development
                            Angular Development
                            Mobile Development
                            Python Development
                            Product Design</p>
                    </Col>
                    <Col className='fourth_col'>
                        <img src={map} className='footer_map'></img>
                        <p className='footer_design'>User Interface Design<br />
                            UX Design Services<br />
                            Software Product Development<br />
                            Data Warehouse Consulting<br />
                            Case Studies<br />
                            DoveMed<br />
                            Best Egg<br />
                            PetDialog<br />
                            FormForce<br />
                            CloudVelox
                        </p>

                    </Col>
                </Row>
                <hr className='footer_horizontal' />
                <Row>
                    <Col>
                        <p className='copy_text'>Copyright. 2021</p>
                    </Col>
                    <Col>
                        <Nav className='justify-content-end'>
                            <img src={footer_facebook} className='footer_facebook'></img>
                            <img src={footer_github} className='footer_github'></img>
                            <img src={footer_instagram} className='footer_instagram'></img>
                            <img src={footer_linkedin} className='footer_linkedin'></img>
                            <img src={footer_twitter} className='footer_twitter'></img>
                        </Nav>
                    </Col>
                </Row>


            </Container>
        </div>
    );
}

export default Footer;
