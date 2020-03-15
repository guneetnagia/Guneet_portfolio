import React, { Component } from 'react';
import image from '../../img/img.png'

const Avatar = () => {
    return (
        <div className="avatar">
            <img  className="avatar__img" src={image}/>
        </div>
    );
}


export default Avatar;