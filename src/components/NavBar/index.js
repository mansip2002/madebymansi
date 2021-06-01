import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {Nav, NavbarContainer, Navlogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './navElements';

const NavBar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <React.Fragment> 
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <Navlogo to='/' onClick={toggleHome}>home</Navlogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' 
                            smooth = {true}
                            duration = {500}
                            spy = {true}
                            exact = 'true'
                            offsett = {-80}

                            >About</NavLinks>
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
