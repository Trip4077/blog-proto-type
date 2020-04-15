import React from 'react';

const BlogCard = props => {
    return(
        <div className="blog-card">
            <div className="card-text">
                <h2>{props.blog.title}</h2>
                <p>{props.blog.content.slice( 0, 120 ) }</p>
                <p>Published: {props.blog.created_at}</p>
            </div>
           
            <img src={props.blog.urls[0]} alt="thumbnail" style={{ width: '350px', height: '220px' }}/>
        </div>
    )
}

export default BlogCard;