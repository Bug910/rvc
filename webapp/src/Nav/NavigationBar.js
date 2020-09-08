import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class NavigationBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Link to={"/"} className="nav-link" >Добро пожаловать!</Link>
                    <Link to={"list"} className="nav-link" >Список работникв</Link>
                    <Link to={"add"} className="nav-link" >Добавить работника</Link>
                </Nav>
            </Navbar>
        )
    }
}