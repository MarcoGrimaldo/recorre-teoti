import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
        <section className="section blue-grey darken-4 white-text center scrollspy">
            <div className="row">
                <div className="col s12">
                    <h4>{'¡Siguenos!'}</h4>
                    <p>
                        {'Enterate primero de nuestras promociones'}
                    </p>
                    <a href="https://www.facebook.com/" target="blank" className="white-text">
                        <i className="fab fa-facebook fa-3x"></i>
                    </a>
                    <a href="https://web.whatsapp.com/" target="blank" className="white-text">
                        <i className="fab fa-whatsapp fa-3x"></i>
                    </a>
                    <a href="https://mail.google.com/" target="blank" className="white-text">
                        <i className="fas fa-envelope fa-3x"></i>
                    </a>
                </div>
            </div>
        </section>
        )
    }
}
