import React, { PureComponent } from 'react';
import Title from './Title';
import Avatar from './Avatar';
import Contact from './Contact';

class Header extends PureComponent {
    render() {
        return (
            <div className="">
                <div className="row u-margin-bottom-medium">
                    <div className="col-2-of-4"><Title /></div>
                    <div className="col-1-of-4"><Avatar /></div>
                    <div className="col-1-of-4"><Contact /></div>
                </div>
            </div>
        );
    }
}

export default Header;