import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './about.css';
import Form from 'react-bootstrap/Form'
import { FaBeer } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import facebook from '../../pictures/svg/facebook.svg'
import linkedin from '../../pictures/svg/linkedin.svg'
import twitter from '../../pictures/svg/twitter.svg'
import github from '../../pictures/svg/github.svg'
import instagram from '../../pictures/svg/instagram.svg'
import contact from '../../pictures/contacts.png'
import contact2x from '../../pictures/contacts@2x.png'
import contact3x from '../../pictures/contacts@3x.png'
// import flag from '../../pictures/Flag_of_Artsakh.png'
import Countrycode from '../countrycode/countrycode'
import { slide as Menu } from 'react-burger-menu'
import Checkbox from '@material-ui/core/Checkbox';





function contecst() {
    return (
        <div className='contexts'>

            <Container className='about_container'>
                <Row>
                    <Col>
                        <div className='contact_us_col'>
                            <span className='contact_us_text'>CONTACT US</span>
                            <input className='name' placeholder='Your name*'></input>
                            <input className='surname' placeholder='LastName*'></input>
                            <input className='email' placeholder='Email*'></input>
                            <Countrycode />
                            <input className='company' placeholder='Company'></input>
                            <span className='help_text'>HOW CAN WE HELP?</span>
                            <input className='your_message' placeholder='Your message...*'></input>
                            <label>

                                <input type="checkbox" className='check_box' />


                                <span className='checkbox_text'>Yes, I want to subscribe</span>
                            </label>
                            <button className='send_button'><span className='send_text'>SEND</span></button>
                            <p className='privacy_policy'>
                                By clicking the button I agree with the collection and processing of my
                                personal data as described in the <a className='privacy_link' href=''>Privacy policy.</a>
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className='info_col'>
                            <div>
                                <p className='email_text'>Prefer to email or phone?</p>
                                <span className='infoarnologyam'>inf@arnology.am</span>
                                <hr className='horizontal' />
                                <p className='first_info_number'>+374 77 06 53 03</p>
                                <p className='second_info_number'>+374 41 96 06 26</p>
                                <p className='find_text'>Find Us</p>
                                <img src={facebook} className='facebook'></img>
                                <img src={linkedin} className='linkedin'></img>
                                <img src={twitter} className='twitter'></img>
                                <img src={github} className='github'></img>
                                <img src={instagram} className='instagram'></img>
                                <p className='yerevan'>YEREVAN</p>
                                <p className='address_yerevan'>49 Tigran Mets Avenue, 5th floor Armenia, Yerevan</p>
                                <Row>
                                    <Col>
                                        <p className='leon'>LEON</p>
                                        <p className='leon_address'>49 Tigran Mets Avenue, 5th floor Armenia, Yerevan</p>
                                    </Col>
                                    <Col>
                                        <p className='la'>LA</p>
                                        <p className='la_address'>49 Tigran Mets Avenue, 5th floor Armenia, Yerevan</p>
                                    </Col>
                                </Row>
                                <img src={contact}
                                    srcset={{ contact2x },
                                        { contact3x }}
                                    className="contact_picture"></img>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default contecst