import React from 'react';
import Icon1 from '../../images/arduinoCar.png';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/Profile Icon.png';
import Icon4 from '../../images/chromeExtension.png';

import {ProjectsH1, ProjectsH2, ProjectsP, ProjectsWrapper, ProjectsContainer, ProjectIcon, ProjectCard, ProjectsBold} from  './projectElements';

const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectCard>
                    <ProjectIcon src={Icon1}/>
                    <ProjectsH2>Obstacle Avoiding Car</ProjectsH2>
                    <ProjectsBold>Arduino, C++, Fritzing (for schematic)</ProjectsBold>
                    <ProjectsP>A miniature robot car that can avoid solid surface obstacles. The initial skeleton was built using an ultrasonic range finder, wheels, and 2 DC motors.</ProjectsP>
                    <br></br>
                    <a href ="https://github.com/mansip2002/arduinoCar" target="_blank" rel="noopener noreferrer">
                        View More
                    </a>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon4}/>
                    <ProjectsH2>Research Article Scraper</ProjectsH2>
                    <ProjectsBold>Javascript, CSS, HTML</ProjectsBold>
                    <ProjectsP>A chrome extension website scraper that returns a summary depending on input parameters (date of publication, objective, name, and journal) of a research article on Elsevier.</ProjectsP>
                    <br></br>
                    <a href ="https://github.com/mansip2002/chromeExtensionScraper" target="_blank" rel="noopener noreferrer">
                        View More
                    </a>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon3} />
                    <ProjectsH2>This website!</ProjectsH2>
                    <ProjectsBold>HTML, ReactJS, CSS, Photoshop, Illustrator</ProjectsBold>
                    <ProjectsP>I love to design things and so I created this site to better represent that. All images were created by me using Photoshop and Illustrator. </ProjectsP>
                    <br></br>
                    <a href ="https://github.com/mansip2002/madebymansi" target="_blank" rel="noopener noreferrer">
                        View More
                    </a>
                </ProjectCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
