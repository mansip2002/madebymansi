import React, {useState} from 'react';
import {Button} from '../Sidebar/ButtonElement';
import {HeroContainer, HeroBg, HeroContent, HeroBtnWrapper, HeroH1, HeroP, ArrowForward, ArrowRight} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg></HeroBg>
            <HeroContent>
                <HeroH1> Virtual Banking Made Easy</HeroH1>
                <HeroP> Sign Up for a new account today and receive $200 in credit towards your next payment.</HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter ={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Get started {hover ? <ArrowForward/> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
