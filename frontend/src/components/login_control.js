import React from 'react';
import {
    Nav, NavItem, NavLink
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

class LoginControl extends React.Component {
    render() {
        if (this.props.isLoggedIn) {
            return (
                <Nav pills
                >
                    <NavItem>
                        <NavLink
                        active
                        href="#"
                        >
                        sign out
                        </NavLink>
                    </NavItem>
                </Nav>
            );
        }
        else {
            return (
                <Nav pills>
                    <NavItem>
                        <NavLink
                        href='#'
                        active
                        >
                        login
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink active href='#'>sign up</NavLink>
                    </NavItem>
                </Nav>
            );
        }
    }
}

export default LoginControl;