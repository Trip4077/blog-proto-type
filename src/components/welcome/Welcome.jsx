import React, { useState, useEffect }  from 'react';

import './Welcome.css';

const Welcome = () => {
    const [ cssClass, setCssClass ] = useState(null)

    useEffect(() => {
        setCssClass('visible')
    }, [])

    return (
        <div className="welcome">
            <h1 className={ `welcome-header ${cssClass}` }>Living In The Middle...</h1>

            <div className={ `welcome-list ${cssClass}` }>
                <p>Blogs</p>
                <p>Photos</p>
                <p>Community</p>
            </div>
        </div>
    )
}

export default Welcome;