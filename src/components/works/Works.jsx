import React from 'react';
import CustomCard from './CustomCard';
import { Container } from '@mui/material';
import { projectsData } from '../../common/projectData';
import './works.css';


function Works() {
    return (
        <div className="works-section">
                        <h1 className="works-title">My works</h1>      

            <div className="projects-container"> 
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
         </div>
        </div>
    );
}

export default Works;
