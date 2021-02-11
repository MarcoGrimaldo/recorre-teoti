import React, { Component } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Reserva from '../Components/Reserva/Reserva';

export default class ReservaPage extends Component {
    render() {
        return (
            <div >
                <Navbar/>
                <Reserva/>
                <Footer/>
            </div>
        )
    }
}
