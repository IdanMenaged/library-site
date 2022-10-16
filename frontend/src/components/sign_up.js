import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {
    Modal,
    ModalBody,
    ModalHeader,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    ModalFooter,
} from 'reactstrap'

import { USERS_URL } from '../CONSTANTS';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            password: '',
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            passwordConfirm: ''
        };

        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>Sign Up</Button>
                <Modal isOpen={this.state.showForm}>
                    <ModalHeader toggle={this.toggle}>
                        Sign Up
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="email">email</Label>
                                <Input
                                onChange={this.handleChange}
                                type="email"
                                name="email"
                                id="email"
                                />
                                <Label for="password">password</Label>
                                <Input
                                onChange={this.handleChange}
                                type="password"
                                name="password"
                                id="password"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                onChange={this.handleChange} type="submit"
                                />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggle}>Cancel</Button>
                        {/* <Button
                        onClick={this.toggle}
                        color="primary"
                        >
                        Submit
                        </Button> */}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }

    toggle() {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const data = {
            password: this.state.password,
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            confirmPassword: this.state.confirmPassword
        };

        fetch(USERS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => console.log(response.text()));
        event.preventDefault();
    }
}

export default SignUp;