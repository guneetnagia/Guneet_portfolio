import React, { PureComponent } from 'react';
import Name from './Name';
import Avatar from './Avatar';
import Contact from './Contact';

class Header extends PureComponent {
    render(){
        return(
            <div className="row">
                <div className="col-1-of-3"><Name /></div>
                <div className="col-1-of-3"><Avatar /></div>
                <div className="col-1-of-3"><Contact /></div>
            </div>
        );
    }
}

export default Header;