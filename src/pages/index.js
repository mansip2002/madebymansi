import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import NavBar from '../components/NavBar';
import InfoSection from '../components/InfoSection';
import IntroSection from '../components/IntroSection';
import Contact from '../components/Contact';
import { experience } from '../components/InfoSection/Data';
import { introduction } from '../components/IntroSection/Intro';
import Projects from '../components/Projects';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <React.Fragment>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle} />
            <IntroSection {...introduction}/>
            <InfoSection {...experience}/>
            <Projects />
            <Contact />
        </React.Fragment>
    )
}

export default Home
