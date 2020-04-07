import React, { useState, useEffect } from 'react';
import GalleryPreview from './GalleryPreview';

import axios from 'axios';

import './Gallery.css';


const Gallery = () => {
    const [ photos, setPhotos ] = useState( [] );

    useEffect(() => {
        axios.get( 'http://localhost:5000/api/images/' )
        .then( res => setPhotos( res.data ) )
        .catch( err => console.log(err) );
    });

    return(
        <div className="gallery">
            <h2>Gallery</h2>
            <div className="display">
            {
                photos.slice( 0, 6 ).map( photo => <GalleryPreview photo={photo} /> )
            } 
            </div>
        </div>
    )
}

export default Gallery;