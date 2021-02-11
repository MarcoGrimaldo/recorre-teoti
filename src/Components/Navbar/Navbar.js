import React, { Component } from 'react';
import M from "materialize-css";
import {Link} from 'react-router-dom';

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
                    <Link to="/" className="brand-logo"><h5>{'RecorreTeotihuacán'}</h5></Link>
                    <Link data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/">{'Inicio'}</Link></li>
                        <li><Link to="/reserva">{'Reserva'}</Link></li>
                        <li><Link to="/contacto">{'Contacto'}</Link></li>
                    </ul>
                    </div>
                </nav>

                <ul className="sidenav grey lighten-3" id="slide-out">
                    {/*<li><img src={Image1}/></li>*/}
                    <li><Link to="/" className="blue-grey darken-4 white-text">{'Recorre Teotihuacán'}</Link></li>
                    <li><Link to="/" className="waves-effect"><i className="material-icons">home</i>{'Inicio'}</Link></li>
                    <li><Link to="/reserva" className="waves-effect"><i className="material-icons">bookmark_border</i>{'Reserva'}</Link></li>
                    <li><Link to="/contacto" className="waves-effect"><i className="material-icons">place</i>{'Contacto'}</Link></li>
                    <li><div className="divider"></div></li>
                    <li><Link to="/contacto" className="waves-effect"><i className="material-icons">local_phone</i>{'+52 554826482'}</Link></li>
                    <li><Link to="/contacto" className="waves-effect"><i className="material-icons">mail_outline</i>{'example@example.com'}</Link></li>

                </ul>
            </div>
        )
    }
}
