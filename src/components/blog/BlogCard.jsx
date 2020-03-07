import React from 'react';
import thumbnail from '../../assets/blog-placeholder.jfif';

const BlogCard = props => {
    return(
        <div className="blog-card">
            <div className="card-text">
                <h2>{props.blog.title}</h2>
                <p>{props.blog.description}</p>
                <p>Published: {props.blog.date}</p>
            </div>
           
            <img src={thumbnail} alt="thumbnail" style={{ width: '350px', height: '220px' }}/>
        </div>
    )
}

export default BlogCard;