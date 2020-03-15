import React, { PureComponent } from 'react';
import WorkExp from './Workexp';
import Skills from './Skills';
import Interests from './Interests';

class Body extends PureComponent {
    render(){
        return(
            <div className="row" style= {{borderTop: "1px solid"}}>
                <div className="col-1-of-2"><WorkExp /></div>
                <div className="col-1-of-2">
                    <Skills />
                    <Interests />
                    </div>
            </div>
        );
    }
}

export default Body;