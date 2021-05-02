import React from 'react';

const BlogsCard = ({blog}) => {
    return (
        <div className='col-md-4 col-sm-12 d-flex justify-content-center my-4'>
            <div className="card shadow" style={{ width: '22rem' }}>
                <img src={blog.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.description}</p>
                    <hr />
                    <div className="footer">
                        <a target="_blank" href={blog.link} rel="noopener noreferrer" ><span className='btn btn-danger'>Explore</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsCard;