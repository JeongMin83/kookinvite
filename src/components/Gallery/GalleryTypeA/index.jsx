import React from 'react';
import './style.css';
import gallery from '../../../common/images/gallery.png';

function GalleryTypeA(props) {
    return (
        <div id="area-gallery">
            <img src={gallery} alt="" style={{ width: '100%' }} />
            {props.value.map((v, i) => (
                <img src={v} alt="" style={{ width: '90%', margin: '10px auto' }} />
            ))}
        </div>
    );
}

export default GalleryTypeA;
