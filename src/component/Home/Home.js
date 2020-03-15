import React, { Component } from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';


class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <hr />
                <Body />
            </div>
        );
    }
}

export default Home;