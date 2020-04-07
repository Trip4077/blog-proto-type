import React from 'react';
import BlogCard from './BlogCard';

import './Blog.css';

const RecentBlogs = props => {
    return (
        <div className="recent-blogs">
            <h2>Recent Blogs: </h2>
            <div className="card-container">
                {
                    props.blogs.map( blog => <BlogCard blog={blog} /> )
                }
            </div>
        </div>
    )
}

export default RecentBlogs;