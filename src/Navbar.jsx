import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from 'reactstrap';
import './App.css'

function Navbar(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Nav tabs>
      <NavItem>
        <NavLink href="#" active>
        238-Maktab
        </NavLink>
      </NavItem>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret>
        <Link to={'/input'}>
        Regestratsia
        </Link>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Oqtuvchilar</DropdownItem>
          <DropdownItem disabled>Delektor</DropdownItem>
          <DropdownItem>Zam Delektor</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Honalar</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        
        <NavLink href="#">
          <Link to={'/filter'}> 
          Oquvchilar Reytin
          </Link>
        </NavLink>
        
      </NavItem>
      <NavItem>
        <NavLink href="#">Malumotlar</NavLink>
      </NavItem>
    </Nav>
  );
}

export default Navbar;