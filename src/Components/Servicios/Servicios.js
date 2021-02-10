import React, { Component } from 'react';
import ImgOne from '../../Images/Servicios/1-min.jpg'; //caminata
import ImgTwo from '../../Images/Servicios/2-min.jpg'; //estrellas
import ImgThree from '../../Images/Servicios/3-min.jpg'; //globos
import ImgFour from '../../Images/Servicios/4-min.jpg'; //mexico
import ImgFive from '../../Images/Servicios/5-min.jpg'; //motos
import ImgSix from '../../Images/Servicios/6-min.jpg'; //bici
import './Servicios.css'

export default class Servicios extends Component {
    render() {
        return (
        <section id="adventures" className="section section-adventure scrollspy">
            <div className="container">
                <div className="row">
                    <h3 className="center">
                        {"Nuestros Servicios"}
                    </h3>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src={ImgTwo} alt="act1"/>
                                <a className="btn-floating activator halfway-fab waves-effect waves-light cyan darken-3"><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>{'Recorre Teotihuacán bajo las estrellas'}</p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">{'Recorre Teotihuacán bajo las estrellas'}<i className="material-icons right">close</i></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit taciti quam</p>
                            </div>
                            <div className="card-action">
                                <a href="/recorrido" className="light-blue-text text-darken-3">{'Más información...'}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src={ImgFive} alt="act2"/>
                                <span className="card-title"></span>
                                <a className="btn-floating activator halfway-fab waves-effect waves-light cyan darken-3"><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>{'Tour de aventura en cuatrimoto en Teotihuacán'}</p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">{'Tour de aventura en cuatrimoto en Teotihuacán'}<i className="material-icons right">close</i></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit taciti quam</p>
                            </div>
                            <div className="card-action">
                                <a href="/recorrido" className="light-blue-text text-darken-3">{'Más información...'}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src={ImgSix} alt="act3"/>
                                <a className="btn-floating activator halfway-fab waves-effect waves-light cyan darken-3"><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>{'Tour de aventura en bicicleta en Teotihuacán'}</p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">{'Tour de aventura en bicicleta en Teotihuacán'}<i className="material-icons right">close</i></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit taciti quam</p>
                            </div>
                            <div className="card-action">
                                <a href="/recorrido" className="light-blue-text text-darken-3">{'Más información...'}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src={ImgOne} alt="act3"/>
                                <a className="btn-floating activator halfway-fab waves-effect waves-light cyan darken-3"><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>{'Tour a pie guiado en Teotihuacán'}</p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">{'Tour a pie guiado en Teotihuacán'}<i className="material-icons right">close</i></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit taciti quam</p>
                            </div>
                            <div className="card-action">
                                <a href="/recorrido" className="light-blue-text text-darken-3">{'Más información...'}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src={ImgThree} alt="act3"/>
                                <a className="btn-floating activator halfway-fab waves-effect waves-light cyan darken-3"><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>{'Aventura en globo aerostático'}</p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">{'Aventura en globo aerostático'}<i className="material-icons right">close</i></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit taciti quam</p>
                            </div>
                            <div className="card-action">
                                <a href="/recorrido" className="light-blue-text text-darken-3">{'Más información...'}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src={ImgFour} alt="act3"/>
                                <a className="btn-floating activator halfway-fab waves-effect waves-light cyan darken-3"><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>{'Visita las maravillas de México'}</p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">{'Visita las maravillas de México'}<i className="material-icons right">close</i></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit taciti quam</p>
                            </div>
                            <div className="card-action">
                                <a href="/recorrido" className="light-blue-text text-darken-3">{'Más información...'}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
