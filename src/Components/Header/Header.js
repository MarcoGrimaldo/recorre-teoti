import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="section grey lighten-4">
                <h2 className='center'>{this.props.h2H}</h2>
                <h5 className='center'>{this.props.h5H}</h5>
            </div>
        )
    }
}
