import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class NavigationBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Link to={"/"} className="nav-link" >Home page</Link>
                    <Link to={"list"} className="nav-link" >Дашборд</Link>
                    <Link to={"add"} className="nav-link" >Профиль</Link>
                </Nav>
            </Navbar>
        )
    }
}