import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavLink, NavbarBrand, Collapse, NavbarToggler } from 'reactstrap';

export class AppNav extends React.Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Navbar className="main-navbar" light expand="md">
        <NavbarBrand tag={Link} to="/">
          Music!
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse navbar isOpen={this.state.isOpen}>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
