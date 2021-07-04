import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {Nav, NavbarContainer, NavImg, MobileIcon, NavMenu, NavItem, NavLinks} from './navElements';

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
                    <NavImg src="images/Profile Icon.png"
                    to='/' 
                    onClick={toggleHome} 
                    ></NavImg>
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
                            <NavLinks to='experience'
                            smooth = {true}
                            duration = {500}
                            spy = {true}
                            exact = 'true'
                            offsett = {-80}>Experience</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects'
                            smooth = {true}
                            duration = {500}
                            spy = {true}
                            exact = 'true'
                            offsett = {-80}>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'
                            smooth = {true}
                            duration = {500}
                            spy = {true}
                            exact = 'true'
                            offsett = {-80}>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    
                </NavbarContainer>
            </Nav>
        </React.Fragment>
    );
};

export default NavBar;
