import React from 'react';

const NewsLetterForm = () => {
    return(
        <form name="newsletter">
            <div className="input-label">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className="input-label">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>

            <button>Sign Up!</button>
        </form>
    )   
}

export default NewsLetterForm;