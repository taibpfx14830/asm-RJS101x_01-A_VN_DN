import React from "react";
import { Navbar, NavbarBrand, Nav, Collapse, NavItem, NavbarToggler, } from "reactstrap";
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div className="bg-primary">
              <div className="container">
                <Navbar dark color="primary" light expand="md">
                    <NavbarBrand href="/"><img src="/assets/images/logo.png" alt="logo" height="40" width="50" /></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/nhansu"><i className="fa fa-users"></i>Nhân Viên</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/phongban"><i className="fa fa-id-card">Phòng Ban</i></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/bangluong"><i className="fa fa-money">Bảng Lương</i></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div >
            </div>
        )
    }

}

export default Header;
