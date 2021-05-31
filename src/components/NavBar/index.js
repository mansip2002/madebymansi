import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, Navlogo, MobileIcon, NavMenu, NavItem, NavLinks} from './navElements';

const NavBar = () => {
    return (
        <React.Fragment> 
            <Nav>
                <NavbarContainer>
                    <Navlogo to='/'>home</Navlogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='experience'>Experience</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects'>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    
                    <NavBtn>
                      <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </React.Fragment>
    );
};

export default NavBar;
