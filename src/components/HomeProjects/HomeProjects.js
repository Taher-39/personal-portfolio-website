import React from 'react';
import projectsData from '../Projects/ProjectsData'
import HomeProjectCard from './HomeProjectCard';
const HomeProjects = () => {
    const filterProjects = projectsData.slice(0,3)
    return (
        <section class="p-5" style={{ minHeight: '400px' }}>
            <h2 className='text-center text-light'>Recent Projects I Done Well.</h2>
            <div className="row">
                {
                    filterProjects.map(project => <HomeProjectCard project={project} key={project.id}></HomeProjectCard>)
                }
            </div>
            <div className="text-center mb-3">
                <a href="/projects">
                    <button className='btn btn-success text-light'>Explore More Projects</button>
                </a>
            </div>
            <hr className='text-light' style={{ height: '3px' }} />
        </section>
    );
};

export default HomeProjects;