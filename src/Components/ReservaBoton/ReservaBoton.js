import React, { Component } from 'react'

export default class ReservaBoton extends Component {
    render() {
        return (
        <section className="section section-book teal darken-4 white-text center">
            <div className="container">
                <div className="row">
                    <div className="col s12 center">
                        <a href="/reserva" className="btn btn-large waves-effect white teal-text text-darken-4">
                            {'¡Quiero reservar!'}<i className="material-icons left">send</i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
