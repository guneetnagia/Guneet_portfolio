import React, { Component } from 'react';

class Contact extends Component {
    render(){
        return(
            <div className="contact">
                <div className="contact__id">guneet.nagia@outlook.com<i className="fa fa-envelope"></i></div>
                <div className="contact__link">https://github.com/guneetnagia<i className="fa fa-github" /></div>
                <div className="contact__number">+91-8956179747 <i className="fa fa-phone"></i></div>
            </div>
        );
    }
}

export default Contact;