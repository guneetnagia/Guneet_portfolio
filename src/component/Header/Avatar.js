import React, { Component } from 'react';
import image from '../../img/img.png'

const Avatar = () => {
    return (
        <div className="story">
            <figure className="story__shape">
                <img src={image} className="story__image" />
            </figure>
        </div>
    );
}


export default Avatar;