import React, { Component } from 'react';
import './Incluye.css';

export default class Incluye extends Component {
    render() {
        return (
        <section id="explore" className="section section-icons grey lighten-4 center">
            <div className="container">
                <div className="row">
                    <h3 className="center">
                         {'En este recorrido se incluye:'}
                    </h3>
                    <div className="col s6 m3">
                        <div className="card-panel">
                        <i className="em em-helmet_with_white_cross"></i>
                            <h5>{'Equipo'}</h5>
                            <p>{'Renta de equipo y protección'}</p>
                        </div>
                    </div>
                    <div className="col s6 m3">
                        <div className="card-panel">
                        <i className="em em-bike" aria-label="BICYCLE"></i>
                            <h5>{'Bicicleta'}</h5>
                            <p>{'Renta de bicicleta para el recorrido'}</p>
                        </div>
                    </div>
                    <div className="col s6 m3">
                        <div className="card-panel">
                        <i className="em em-stopwatch"></i>
                            <h5>{'3 Horas'}</h5>
                            <p>{'De 3:00 hrs a 3:30 hrs de recorrido'}</p>
                        </div>
                    </div>
                    <div className="col s6 m3">
                        <div className="card-panel">
                        <i className="em em-droplet" aria-label="DROPLET"></i>
                            <h5>{'Liquidos'}</h5>
                            <p>{'Hidratación constante durante el camino'}</p>
                        </div>
                    </div>
                    <div className="col s6 m3">
                        <div className="card-panel">
                        <i className="em em-raising_hand" aria-label="HAPPY PERSON RAISING ONE HAND"></i>
                            <h5>{'Guía'}</h5>
                            <p>{'Guia en todo el recorrido a realizar'}</p>
                        </div>
                    </div>
                    <div className="col s6 m3">
                        <div className="card-panel">
                        <i className="em em-burrito" aria-label="BURRITO"></i>
                            <h5>{'Comida'}</h5>
                            <p>{'Disfruta de unos ricos burritos'}</p>
                        </div>
                    </div>
                    <div className="col s6 m3">
                        <div className="card-panel">
                        <i className="em em-ferris_wheel" aria-label="FERRIS WHEEL"></i>
                            <h5>{'Feria'}</h5>
                            <p>{'Disfruta un día en la feria uuff'}</p>
                        </div>
                    </div>
                    <div className="col s6 m3">
                        <div className="card-panel">
                        <i className="em em-soap" aria-label="BAR OF SOAP"></i>
                            <h5>{'Seguro'}</h5>
                            <p>{'Tomando las medidas necesarias'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
