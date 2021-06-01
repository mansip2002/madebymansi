import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-2.svg';

import {ProjectsH1, ProjectsH2, ProjectsP, ProjectsWrapper, ProjectsContainer, ProjectIcon, ProjectCard} from  './projectElements';

const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>My Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectCard>
                    <ProjectIcon src={Icon1} />
                    <ProjectsH2>Reduce Expenses</ProjectsH2>
                    <ProjectsP>We talk a lot about stuff</ProjectsP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon2} />
                    <ProjectsH2>Reduce Expenses</ProjectsH2>
                    <ProjectsP>We talk a lot about stuff</ProjectsP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon3} />
                    <ProjectsH2>Reduce Expenses</ProjectsH2>
                    <ProjectsP>We talk a lot about stuff</ProjectsP>
                </ProjectCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
