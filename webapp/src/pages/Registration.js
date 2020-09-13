import React, {Component} from "react";
import {Form,Button} from "react-bootstrap";

export class Registration extends Component {
    render() {
        return (
           <div>
            <Form className={"mr-5"}>
                <Form.Group controlId="login">
                    <Form.Label>Login</Form.Label>
                    <Form.Control type="text" placeholder="Enter login" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="Password2">
                    <Form.Control type="password" placeholder="Confirm the password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Click me" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
           </div>
        )
    }
}