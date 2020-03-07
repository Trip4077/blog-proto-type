import React from 'react';
import BlogCard from './BlogCard';

import './Blog.css';

const RecentBlogs = () => {
    const text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta officia, dolorum vitae aut doloribus fugiat sunt veritatis itaque obcaecati cumque quasi in..."

    let current_datetime = new Date()
    let formatted_date = (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + "-" + current_datetime.getFullYear()

    const blogs = [ {title: "Title 1", description: text, date: formatted_date}, {title: "Title 2", description: text, date: formatted_date}, {title: "Title 3", description: text, date: formatted_date}, {title: "Title 3", description: text, date: formatted_date}, {title: "Title 3", description: text, date: formatted_date}, {title: "Title 3", description: text, date: formatted_date} ]

    return (
        <div className="recent-blogs">
            <h2>Recent Blogs: </h2>
            <div className="card-container">
                {
                    blogs.map( blog => <BlogCard blog={blog} /> )
                }
            </div>
        </div>
    )
}

export default RecentBlogs;