import React, { Component } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Contact from '../Components/Contact/Contact';

export default class Contacto extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Header
                    h2H="Contactanos"
                    h5H="Pregunta lo que desees."
                />
                <Contact/>
                <Footer/>
            </div>
        )
    }
}
