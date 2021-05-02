import React from 'react';

const ProjectCard = ({project}) => {
    return (
        <div className='col-md-4 col-sm-12 d-flex justify-content-center my-4'>
            <div className="card shadow" style={{ width: '22rem'}}>
                <img src={project.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{project.name}</h5>
                        <p className="card-text">{project.description}</p>
                        <div className='my-4'>
                            <span className='btn btn-secondary text-light m-1'>{project.tool[0]}</span>
                            <span className='btn btn-secondary text-light m-1'>{project.tool[1]}</span>
                            <span className='btn btn-secondary text-light m-1'>{project.tool[2]}</span>
                            <span className='btn btn-secondary text-light m-1'>{project.tool[3]}</span>
                            <span className='btn btn-secondary text-light m-1'>{project.tool[4]}</span>
                            <span className='btn btn-secondary text-light m-1'>{project.tool[5]}</span>
                        </div>
                        <hr/>
                        <div className="footer">
                            <a target="_blank" rel="noopener noreferrer" href={project.gitLink}><span className='btn btn-success' style={{marginRight: '10px'}}>GitHub</span></a>
                            <a target="_blank" rel="noopener noreferrer" href={project.liveSite}><span className='btn btn-danger'>LiveSite</span></a>
                        </div>
                    </div>
            </div> 
        </div>
    );
};

export default ProjectCard;