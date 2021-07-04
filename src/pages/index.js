import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import NavBar from '../components/NavBar';
import InfoSection from '../components/InfoSection';
import { home0bjOne, home0bjTwo } from '../components/InfoSection/Data';
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
            <InfoSection {...home0bjOne}/>
            <Projects />
            <InfoSection {...home0bjTwo}/>
        </React.Fragment>
    )
}

export default Home
