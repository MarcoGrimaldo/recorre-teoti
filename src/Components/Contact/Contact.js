import React, { Component } from 'react';
import './Contact.css'

export default class Contact extends Component {
    render() {
        return (
            <section id="contact" className="section grey lighten-4 section-contact scrollspy">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="card-panel teal darken-4 white-text center">
                                <i className="material-icons">email</i>
                                <h5>{'Recorre Teotihuacán'}</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit taciti quam. Nibh eu sociis tempor cubilia litora hac interdum.</p>
                            </div>
                            <ul className="responsive-map-container">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30052.599405205827!2d-98.89337315266336!3d19.688132358295185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ea845eb30ff9%3A0xad84278bbe6d0c38!2sPir%C3%A1mide%20del%20Sol!5e0!3m2!1ses-419!2smx!4v1612993223390!5m2!1ses-419!2smx" width="450" height="350" frameBorder="1" style={{border:0}} aria-hidden="false" tabIndex="0"></iframe>
                            </ul>
                        </div>
                        <div className="col s12 m6">
                            <div className="card-panel grey lighten-3">
                                <h5 className="center">{'¡Contactanos!'}</h5>
                                <form>
                                    <div className="input-field">
                                        <input type="text" id="name" className="validate"/>
                                        <label htmlFor="name" className="teal-text text-darken-4">{'Nombre'}</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" id="email" className="validate"/>
                                        <label htmlFor="email" className="teal-text text-darken-4">{'Email'}</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="number" id="phone" className="validate"/>
                                        <label htmlFor="phone" className="teal-text text-darken-4">{'Telefono'}</label>
                                    </div>
                                    <div className="input-field">
                                        <textarea id="message" className="materialize-textarea" data-length="120"></textarea>
                                        <label htmlFor="message" className="teal-text text-darken-4">{'Mensaje'}</label>
                                    </div>
                                    <div className="center">
                                        <input type="submit" value="Submit" className="btn teal darken-4"/>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
