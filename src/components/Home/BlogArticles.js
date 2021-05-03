import React from 'react';
import blogsData from '../Blogs/BlogData';
import BlogArticlesCard from './BlogArticlesCard';
const BlogArticles = () => {
    const filterBlogs = blogsData.slice(0,3)
    return (
        <div class="p-3" style={{ minHeight: '400px' }}>
            <div className="container">
                <h2 className='text-center text-light'>Some Of My Articles</h2>
                <div className="row">
                    {
                        filterBlogs.map(blog => <BlogArticlesCard key={blog.id} blog={blog}></BlogArticlesCard>)
                    }
                </div>
                <div className="text-center mb-3">
                    <a href="/blogs">
                        <button className='btn btn-success text-light'>Explore More Blogs</button>
                    </a>
                </div>
                <hr className='text-light' style={{ height: '3px' }} />
            </div>
        </div>
    );
};

export default BlogArticles;