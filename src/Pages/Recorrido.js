import React, { Component } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import CarouselComponent from '../Components/Carousel/CarouselComponent';
import Footer from '../Components/Footer/Footer';
import Incluye from '../Components/Incluye/Incluye';
import ReservaBoton from '../Components/ReservaBoton/ReservaBoton';
import Header from '../Components/Header/Header';



export default class Recorrido extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Header
                    h2H="Tour en Teotihuacán"
                    h5H="¡Atrevete a vivir esta aventura!"
                />
                <CarouselComponent/>
                <Incluye/>
                <ReservaBoton/>
                <Footer/>
            </div>
        )
    }
}
