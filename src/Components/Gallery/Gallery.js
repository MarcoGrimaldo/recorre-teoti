import React, { Component } from 'react';
import './Gallery.css';
import M from 'materialize-css';


const Photo = ({img,alt}) => {
    return(
        <div className="col s12 m3 marg">
            <img className="materialboxed responsive-img" src={img} alt={alt} />
        </div>
    );
}

class PhotoGallery extends Component {
    state = {
        photo: [
            {
                id: 1,
                img: "https://source.unsplash.com/1600x900/?hotel",
                alt: "hotel"
            },
            {
                id: 2,
                img: "https://source.unsplash.com/1600x900/?restaurant",
                alt: "restaurant"
            },
            {
                id: 3,
                img: "https://source.unsplash.com/1600x900/?nature",
                alt: "nature"
            },
            {
                id: 4,
                img: "https://source.unsplash.com/1600x900/?beach",
                alt: "beach"
            },
            {
                id: 5,
                img: "https://source.unsplash.com/1600x900/?travel",
                alt: "travel"
            },
            {
                id: 6,
                img: "https://source.unsplash.com/1600x900/?sea",
                alt: "sea"
            },
            {
                id: 7,
                img: "https://source.unsplash.com/1600x900/?building",
                alt: "building"
            },
            {
                id: 8,
                img: "https://source.unsplash.com/1600x900/?climbing",
                alt: "climbing"
            },
        ]
    }

    render () {
        return (
            <div className="row">
                {this.state.photo.map(gal => (
                    <Photo key={gal.id}
                    img={gal.img} alt= {gal.alt} />
                ))}
            </div>
        );
    }
}

const GalleryC = () =>{
    return (
        <section id="gallery" className="section section-gallery scrollspy">
            <div className="container">
                <h4 className="center">
                    {'Fotos'}
                </h4>
                <PhotoGallery/>
            </div>
        </section>
    )
} 

export default class Gallery extends Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(elems, {});
    }
    render() {
        return (
            <div>
                <GalleryC/>
            </div>
        )
    }
}
