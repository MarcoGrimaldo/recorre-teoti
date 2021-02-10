import React, { Component } from 'react';
import M from "materialize-css";
import Image1 from '../../Images/3.jpg';

export default class Navbar extends Component {
    componentDidMount() {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    }   

    render() {
        return (
            <div>
                <nav className="blue-grey darken-4">
                    <div className="nav-wrapper container">
                    <a href="/" className="brand-logo"><h5>{'RecorreTeotihuacán'}</h5></a>
                    <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/">{'Inicio'}</a></li>
                        <li><a href="/reserva">{'Reserva'}</a></li>
                        <li><a href="/contacto">{'Contacto'}</a></li>
                    </ul>
                    </div>
                </nav>

                <ul className="sidenav grey lighten-3" id="slide-out">
                    {/*<li><img src={Image1}/></li>*/}
                    <li><a href="/" className="blue-grey darken-4 white-text">{'Recorre Teotihuacán'}</a></li>
                    <li><a href="/" className="waves-effect"><i className="material-icons">home</i>{'Inicio'}</a></li>
                    <li><a href="/reserva" className="waves-effect"><i className="material-icons">bookmark_border</i>{'Reserva'}</a></li>
                    <li><a href="/contacto" className="waves-effect"><i className="material-icons">place</i>{'Contacto'}</a></li>
                    <li><div className="divider"></div></li>
                    <li><a href="/contacto" className="waves-effect"><i className="material-icons">local_phone</i>{'+52 554826482'}</a></li>
                    <li><a href="/contacto" className="waves-effect"><i className="material-icons">mail_outline</i>{'example@example.com'}</a></li>

                </ul>
            </div>
        )
    }
}
