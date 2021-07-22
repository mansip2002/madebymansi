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
                            Research Assistant | May 2021 - August 2021    
                            </PositionDates>
                            <RoleDescription darkText={darkText}>
                            <li>
                            what you did 
                            </li>
                            <li>
                            what you did 
                            </li>
                            <li>
                            what you did 
                            </li>
                            </RoleDescription>
                            <CompanyName 
                            darkText = {darkText}
                            >
                            University of Toronto                                          
                            </CompanyName>
                            <PositionDates darkText={darkText}>
                            Research Assistant | May 2021 - August 2021    
                            </PositionDates>
                            <RoleDescription darkText={darkText}>
                            <li>
                            what you did 
                            </li>
                            <li>
                            what you did 
                            </li>
                            <li>
                            what you did 
                            </li>
                            </RoleDescription>
                            <CompanyName 
                            darkText = {darkText}
                            >
                            University of Toronto                                          
                            </CompanyName>
                            <PositionDates darkText={darkText}>
                            Research Assistant | May 2021 - August 2021    
                            </PositionDates>
                            <RoleDescription darkText={darkText}>
                            <li>
                            what you did 
                            </li>
                            <li>
                            what you did 
                            </li>
                            <li>
                            what you did 
                            </li>
                            </RoleDescription>
                            <CompanyName 
                            darkText = {darkText}
                            >
                            University of Toronto                                          
                            </CompanyName>
                            <PositionDates darkText={darkText}>
                            Research Assistant | May 2021 - August 2021    
                            </PositionDates>
                            <RoleDescription darkText={darkText}>
                            <li>
                            what you did 
                            </li>
                            <li>
                            what you did 
                            </li>
                            <li>
                            what you did 
                            </li>
                            </RoleDescription>
                        </Column2>
                    </InfoRow>
            </InfoContainer>
            
        </React.Fragment>
    )
}

export default InfoSection

