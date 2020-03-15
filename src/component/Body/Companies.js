import React from 'react';

const Companies = () => {
    return (
        <div className="companies u-margin-bottom-medium">
            <div className="heading-sub companies__name">HSBC</div>
            <div className="heading-sub">Team Lead, Full Stack Developer</div>
            <div className="row">
                <h4 className="col-1-of-2 heading-small companies__details">01/2020 - Present</h4>
                <h4 className="col-1-of-2 heading-small companies__details">Pune, India</h4>
            </div>
            <div>
            <div className="heading-small companies__accom">Accomplishment</div>
                <ul>
                    <li> &#10003; Reference site about Lorem Ipsum, giving information on its origins, as well as a random ... Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>&#10003; Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                </ul>
            </div>
        </div>
    );
}

export default Companies;