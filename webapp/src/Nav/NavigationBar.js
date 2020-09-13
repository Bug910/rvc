import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class NavigationBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Link to={"/"} className="nav-link" >Home</Link>
                    <Link to={"list"} className="nav-link" >Дашборд</Link>
                    <Link to={"registration"} className="nav-link" >Login</Link>
                </Nav>
            </Navbar>
        )
    }
}