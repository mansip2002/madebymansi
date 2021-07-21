import React from 'react';
import Icon1 from '../../images/arduinoCar.png';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-2.svg';

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
                    <ProjectIcon src={Icon2}/>
                    <ProjectsH2>Upper</ProjectsH2>
                    <ProjectsBold>MERN: MongoDB, ExpressJS, ReactJS, NodeJS</ProjectsBold>
                    <ProjectsP>A webapp that allows students from the University of Toronto to share how long online tasks and assignments took them to complete.</ProjectsP>
                    <br></br>
                    <a href ="https://github.com/mansip2002/UpperYear" target="_blank" rel="noopener noreferrer">
                        View More
                    </a>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src="images/Profile Icon.png" />
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
