import React, { Component } from 'react';
import image from '../../img/img.png'

const Avatar = () => {
    return (
        <div className="avatar">
            <figure className="avatar__shape">
                <img src={image} className="avatar__image" />
            </figure>
        </div>
    );
}


export default Avatar;