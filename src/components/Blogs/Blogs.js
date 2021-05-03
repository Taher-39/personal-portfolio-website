import React from 'react';
import Navbar from '../Navbar/Navbar';
import blogsData from './BlogData'
import BlogsCard from './BlogsCard'
const Blogs = () => {
    return (
        <div className='backgroundColor'>
           <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    {
                        blogsData.map(blog => <BlogsCard key={blog.id} blog={blog}></BlogsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;