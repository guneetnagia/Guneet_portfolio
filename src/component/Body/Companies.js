import React from 'react';

const Companies = () => {
    return (
        <div className="companies">
            <div className="companies__name">HSBC</div>
            <div className="companies__role">Team Lead, Full Stack Developer</div>
            <div className="row">
                <h4 className="col-1-of-2 companies__date">01/2020 - Present</h4>
                <h4 className="col-1-of-2 companies__place">Pune, India</h4>
            </div>
            <div>
            <div className="companies__role">Accompolishments</div>
                <ul>
                    <li>Reference site about Lorem Ipsum, giving information on its origins, as well as a random ... Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                </ul>
            </div>
        </div>
    );
}

export default Companies;