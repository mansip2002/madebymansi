import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-2.svg';

import {ProjectsH1, ProjectsH2, ProjectsP, ProjectsWrapper, ProjectsContainer, ProjectIcon, ProjectCard} from  './projectElements';

const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectCard>
                    <ProjectIcon src={Icon1} />
                    <ProjectsH2>Name</ProjectsH2>
                    <ProjectsP>A webapp that scraps data from journal articles for scoping reviews.</ProjectsP>
                    <ProjectsP>Python, Django, JS</ProjectsP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon2} />
                    <ProjectsH2>Name</ProjectsH2>
                    <ProjectsP>A webapp that scraps data from journal articles for scoping reviews.</ProjectsP>
                    <ProjectsP>Python, Django, JS</ProjectsP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon3} />
                    <ProjectsH2>Name</ProjectsH2>
                    <ProjectsP>A webapp that scraps data from journal articles for scoping reviews.</ProjectsP>
                    <ProjectsP>Python, Django, JS</ProjectsP>
                </ProjectCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
