import React from 'react';
import GithubLogo from '../../images/github.png';
import LinkedinLogo from '../../images/linkedin.png';
import EmailLogo from '../../images/email.jpg';
import {Text, ProjectsContainer, ProjectIcon, ProjectCard} from  './contactElements';

const contactMe = () => {
    return (
        <ProjectsContainer id='contact'>
            <Text>Want to chat? Feel free to reach out, even if it's just to talk about your favourite books. </Text>
            <br></br>
            <ProjectCard> 
                <a href ="https://github.com/mansip2002" target="_blank" rel="noopener noreferrer">
                <ProjectIcon src={GithubLogo} alt="car"></ProjectIcon>
                </a>
                <a href ="https://www.linkedin.com/in/mansi-patel-2002/" target="_blank" rel="noopener noreferrer">
                <ProjectIcon src={LinkedinLogo} alt="car"></ProjectIcon>
                </a>
                <a href ="mailto:mansi2156@gmail.com" target="_blank" rel="noopener noreferrer">
                <ProjectIcon src={EmailLogo} alt="car"></ProjectIcon>
                </a>
            </ProjectCard>

        </ProjectsContainer>
    )
}

export default contactMe
