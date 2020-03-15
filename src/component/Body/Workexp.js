import React from 'react';
import Companies from './Companies';

const WorkExp =()=>{
    return(
        <div className="experience">
            <div className="experience__title">Work Experience</div>
            <Companies />
            <br />
            <Companies />
            <br />
            <Companies />
        </div>
    );
}

export default WorkExp;