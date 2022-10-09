import React from "react";
import {
    Navbar,
    NavbarBrand
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

import LoginControl from "./login_control";

class Header extends React.Component {
    render() {
        return (
            <Navbar>
                <NavbarBrand>
                    <h1>The Library of Alexendria 2.0</h1>
                    <h3>hopefully it can't burn this time !</h3>
                </NavbarBrand>
                <LoginControl isLoggedIn={false} />
            </Navbar>
        );
    }
}

export default Header;