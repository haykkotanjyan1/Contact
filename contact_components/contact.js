import About from '../contact_components/about/about'
import Header from '../contact_components/header/header'
import Footer from '../contact_components/footer/footer'
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Contact() {
    return (
        <div>
            <Link to="/contact"></Link>
            <Header />
            <About />
            <Footer />
        </div>
    )
}


export default Contact