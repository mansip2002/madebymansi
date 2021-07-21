import React from 'react';

import {Text, ProjectsContainer, ProjectIcon, ProjectCard} from  './contactElements';

const contactMe = () => {
    return (
        <ProjectsContainer id='contact'>
            <Text>Want to chat? Feel free to reach out, even if it's just to talk about your favourite books. </Text>
            <br></br>
            <ProjectCard> 
                <a href ="https://github.com/mansip2002" target="_blank" rel="noopener noreferrer">
                <ProjectIcon src="/images/github.png" alt="car"></ProjectIcon>
                </a>
                <a href ="https://www.linkedin.com/in/mansi-patel-2002/" target="_blank" rel="noopener noreferrer">
                <ProjectIcon src="/images/linkedin.png" alt="car"></ProjectIcon>
                </a>
                <a href ="mailto:mansi2156@gmail.com" target="_blank" rel="noopener noreferrer">
                <ProjectIcon src="/images/email.jpg" alt="car"></ProjectIcon>
                </a>
            </ProjectCard>

        </ProjectsContainer>
    )
}

export default contactMe
