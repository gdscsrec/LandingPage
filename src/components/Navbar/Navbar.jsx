import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import gdsclogo from "../images/logogdsc.png"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.elements";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <IconContext.Provider value={{ color: "gray" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={handleClick} click={click}>
              <img  src={gdsclogo} alt=""  width= "70%" />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/Home">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/About">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/Events">Events</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/Achievements">Achievements</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
