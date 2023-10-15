import React from 'react';
import './style.css';

function Loading() {
    return (
        <div className="loading-wrapper">
            <div className="loading-container">
                <div className="loading"></div>
                <div id="loading-text">loading</div>
            </div>
        </div>
    );
}

export default Loading;
