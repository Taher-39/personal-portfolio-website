import React from 'react';
import Navbar from '../Navbar/Navbar';
import ProjectCard from './ProjectCard';
import projectsData from './ProjectsData';
const Projects = () => {
    return (
        <div className='backgroundColor'>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    {
                        projectsData.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;