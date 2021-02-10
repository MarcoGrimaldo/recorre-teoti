import React, { Component } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';
import Servicios from '../Components/Servicios/Servicios';
import Footer from '../Components/Footer/Footer';
import ReservaBoton from '../Components/ReservaBoton/ReservaBoton';
import Gallery from '../Components/Gallery/Gallery';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Banner/>
                <Servicios/>
                <ReservaBoton/>
                <Gallery/>
                <Footer/>
            </div>
        )
    }
}
