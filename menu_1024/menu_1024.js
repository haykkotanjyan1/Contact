import React from 'react'
import Header_1024 from './header_1024/header_1024'
import Contact from '../contact_components/contact';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



function menu_1024() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/contact" path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/menu_1024">
                        <Header_1024 />
                    </Route>
                </Switch>
            </Router>

        </div>
    )
}
export default menu_1024