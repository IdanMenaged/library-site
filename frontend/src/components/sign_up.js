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


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            showForm: false
        };
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
                        <Form>
                            <FormGroup>
                                <Label for="email">email</Label>
                                <Input type="email" name="email" id="email" />
                                <Label for="password">password</Label>
                                <Input type="password" name="password" id="password" />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button>Cancel</Button>
                        <Button color="primary">Submit</Button>
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
}

export default SignUp;