import React, { Component } from 'react';
import './Reserva.css';
import M from 'materialize-css';

export default class Reserva extends Component {
    componentDidMount() {
        let sidenav = document.querySelector('select');
        M.FormSelect.init(sidenav, {});
        var elems = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elems, {});
        let sidenav1 = document.querySelector('.select2');
        M.FormSelect.init(sidenav1, {});
    }   
    render() {
        return (
            <div id="booking" className="section1">
                <div className="section-center">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 ">
                                <div className="container center" id="containerCenter">
                                    <h4 className="center">Reserva!</h4>
                                    <div className="input-field col s12">
                                        <select>
                                        <option value="" disabled selected>Selecciona tu recorrido</option>
                                        <option value="1">Teotihuacán bajo las estrellas</option>
                                        <option value="2">Aventura en cuatrimoto</option>
                                        <option value="3">Aventura en bicicleta</option>
                                        <option value="4">Tour guiado a pie</option>
                                        </select>
                                        <label>Recorrido</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="date_piker" type="text" className="datepicker"/>
                                        <label htmlFor="date_piker">Fecha</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <select className="select2">
                                        <option value="" disabled selected>Horario</option>
                                        <option value="1">8:00 AM</option>
                                        <option value="2">2:00 PM</option>
                                        </select>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="last_name" type="text" className="validate"/>
                                        <label htmlFor="last_name">Tú nombre</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="no_adultos" type="number" className="validate"/>
                                        <label htmlFor="no_adultos">Adultos</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="no_ninos" type="number" className="validate"/>
                                        <label htmlFor="no_ninos">Niños</label>
                                    </div>
                                    <button className="btn waves-effect waves-light teal darken-4 white-text" type="submit" name="action">Siguiente
                                        <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
