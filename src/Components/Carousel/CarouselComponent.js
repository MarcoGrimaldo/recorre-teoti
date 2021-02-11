import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../../Images/1.jpg';
import Image2 from '../../Images/2.jpg';
import Image3 from '../../Images/3.jpg';


export default class CarouselComponent extends Component {
    render() {
        return (
            <div className="container section">
            <Carousel className="presentation-mode" showThumbs={false} showStatus={false} infiniteLoop={true}>                
                <div>
                    <img src={Image1} style={{width: 'auto', height: '400px'}}/>
                </div>
                <div>
                    <img src={Image2} style={{width: 'auto', height: '400px'}}/>
                </div>
                <div>
                    <img src={Image3} style={{width: 'auto', height: '400px'}}/>
                </div>
            </Carousel>
            </div>
        )
    }
}
