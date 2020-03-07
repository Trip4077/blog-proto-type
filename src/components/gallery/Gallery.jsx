import React from 'react';
import GalleryPreview from './GalleryPreview';

import './Gallery.css';
import placholder from '../../assets/blog-placeholder.jfif';


const Gallery = () => {
    const photos = [ placholder, placholder, placholder, placholder, placholder, placholder ]

    return(
        <div className="gallery">
            <h2>Gallery</h2>
            <div className="display">
            {
                photos.map( photo => <GalleryPreview photo={photo} /> )
            } 
            </div>
        </div>
    )
}

export default Gallery;