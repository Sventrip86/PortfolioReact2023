import React from 'react';
import CustomCard from './CustomCard';
import { Container } from '@mui/material';
import { projectsData } from '../../common/projectData';

function Works() {
    return (
        <div>
            <Container>
            {projectsData.map((project, index) => (
                <CustomCard 
                    key={index}
                    imageSrc={project.imageSrc}
                    title={project.title}
                    description={project.description}
                    githubLink={project.githubLink}
                    liveLink={project.liveLink}
                    technologies={project.technologies}
                    languages={project.languages}
                />
            ))}
            </Container>
        </div>
    );
}

export default Works;
