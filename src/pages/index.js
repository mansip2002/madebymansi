import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { home0bjOne, home0bjThree, home0bjTwo } from '../components/InfoSection/Data';
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
            <HeroSection />
            <InfoSection {...home0bjOne}/>
            <InfoSection {...home0bjTwo}/>
            <Projects />
            <InfoSection {...home0bjThree}/>
        </React.Fragment>
    )
}

export default Home
