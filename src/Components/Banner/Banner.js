import React, { Component } from 'react';
import Imgone from '../../Images/2.jpg';
import Imgtwo from '../../Images/6.jpg';
import Imgthree from '../../Images/denoche.jpg';
import M from "materialize-css";
import {Link} from 'react-router-dom';

export default class Banner extends Component {
    componentDidMount() {
        let collapsible = document.querySelectorAll(".slider");
    
        M.Slider.init(collapsible,{indicators:false,
            height:500,
            transition: 500,
            interval:6000});
      } 
    

    render() {
        return (
            <section className="slider" id="home">
            <ul className="slides">
                <li>
                    <img src={Imgone} alt="Vacation" />
                    <div className="caption center-align">
                        <h2>{'Recorre Teotihuacán'}</h2>
                        <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                        {'De una manera distinta, divertida e informativa que hará que tu visita a "La ciudad de los Dioses" sea una autentica aventura.'}
                        </h5>
                    </div>
                </li>
                <li>
                    <img src={Imgtwo} alt="Budgets" />
                    <div className="caption center-align">
                        <h2>{"Tour de aventura en cuatrimoto"}</h2>
                        <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                        {'Recorrido, aventura, degustaciones, pulque ¡y más!'}
                        </h5>
                        <Link to="/recorrido" className="btn btn-large cyan darken-3">{"Ver más"}</Link>
                    </div>
                </li>
                <li>
                    <img src={Imgthree} alt="Vacation" />
                    <div className="caption center-align">
                        <h2>{"Recorre Teotihuacán Bajo las estrellas"}</h2>
                        <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit taciti quam.
                        </h5>
                        <Link to="/recorrido" className="btn btn-large cyan darken-3">{"Ver más"}</Link>
                    </div>
                </li>
            </ul>
        </section>
        )
    }
}
