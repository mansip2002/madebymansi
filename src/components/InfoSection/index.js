import React from 'react'
import {InfoContainer, InfoRow, Column1, Column2, PositionDates, TopLine, Heading, CompanyName, Img, ImgWrap, RoleDescription} from './InfoElements';
import lightpost from '../../images/lightpost.png';

const InfoSection = ({lightText, lightBg, id, imgStart, topLine, darkText, headline, alt}) => {
    return (
        <React.Fragment>
            <InfoContainer lightBg={lightBg} id={id}>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <ImgWrap>
                            <Img src={lightpost} alt={alt}/>
                        </ImgWrap>
                        </Column1>
                        <Column2>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <CompanyName 
                            darkText = {darkText}
                            >
                            University of Toronto                                          
                            </CompanyName>
                            <PositionDates darkText={darkText}>
                            Research Assistant | May 2021 - Present    
                            </PositionDates>
                            <RoleDescription darkText={darkText}>
                            <li>
                            Assisting with a scoping review on visual attention in automated driving
                            </li>
                            </RoleDescription>
                            <CompanyName 
                            darkText = {darkText}
                            >
                            Trelent                                          
                            </CompanyName>
                            <PositionDates darkText={darkText}>
                            Software Developer Intern | May 2021 - Present   
                            </PositionDates>
                            <RoleDescription darkText={darkText}>
                            <li>
                            Working on redesigning the client dashboard using ReactJS, HTML, and CSS 
                            </li>
                            </RoleDescription>
                            <CompanyName 
                            darkText = {darkText}
                            >
                            Toronto District School Board                                          
                            </CompanyName>
                            <PositionDates darkText={darkText}>
                            Summer Camp Counselor – Programming and Arts | July 2019 - August 2019    
                            </PositionDates>
                            <RoleDescription darkText={darkText}>
                            <li>
                            Taught elementary campers the basics of programming in Python 
                            </li>
                            <li>
                            Developed daily agendas, budget proposals, attendance sheets, and trip outlines 
                            </li>

                            </RoleDescription>
                        </Column2>
                    </InfoRow>
            </InfoContainer>
            
        </React.Fragment>
    )
}

export default InfoSection

