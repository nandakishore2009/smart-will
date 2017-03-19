import React, { Component } from 'react';

// import Gavel from 'material-ui/svg-icons/action/gavel';
import { Icon, Navbar, NavItem } from 'react-materialize';
// import SvgIcon from 'material-ui/SvgIcon';


class Header extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Navbar brand={<div ><Icon>assessment</Icon>Smart Will</div>} className="teal darker-1" right>
        <NavItem>Getting started</NavItem>
        <NavItem>About</NavItem>
      </Navbar>
    );
  }
}

export default Header;
