import React, { useState } from 'react';
import axios from 'axios';

const NewsLetterForm = () => {
    const [ formData, setFormData ] = useState( { email: null, password: null } );
    const [ message, setMessage ] = useState( '' )

    const changeHandler = e => {
        e.preventDefault();

        const field = e.target.name;
        const value = e.target.value;

        const formInfo = { ...formData }

        formInfo[field] = value

        setFormData( formInfo )
    }

    const registerUser = e => {
        e.preventDefault();

        axios.post( 'http://localhost:5000/api/auth/register', formData )
             .then( res => setMessage( "Registration Successful!" ) )
             .catch( err => setMessage( err.response.data.message ) );
    }
   
    return(
        <>
            <p>{message}</p>
            <form name="newsletter" onSubmit={ registerUser } >
                <div className="input-label">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" onChange={changeHandler} required />
                </div>
                <div className="input-label">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={changeHandler} required />
                </div>

                <button type='submit'>Sign Up!</button>
            </form>
        </>
    )   
}

export default NewsLetterForm;