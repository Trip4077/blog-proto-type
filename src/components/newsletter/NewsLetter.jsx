import React from 'react';
import NewsLetterForm from './NewsLetterForm';

import './NewsLetter.css';

const NewsLetter = () => {
    return(
        <div className="newsletter">
            <h2>Join The NewsLetter Today!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nisi ex cupiditate aliquid. Nobis impedit quaerat eaque asperiores illum, cum, tempore repellat pariatur recusandae quisquam, perspiciatis quas doloribus dicta amet?</p>
            <NewsLetterForm />
        </div>
    )
}

export default NewsLetter;