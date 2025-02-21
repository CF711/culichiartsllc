import React from "react";

import Carousel from 'react-bootstrap/Carousel';

function importAll(r) {
    return r.keys().map(r);
  }

function PhotoCarousel() {
    const filenames = importAll(require.context('../../Assets/Carousel/', false, /\.(png|jpe?g|svg)$/));
    console.log(filenames);
  return (
    <Carousel variant="dark">
        {filenames.map((filename => {

            return (
                <Carousel.Item className="photo-carousel">
                    <img
                        className="d-block w-100"
                        src={filename}
                        alt="Third slide"
                        style={{maxHeight: "300px", maxWidth: "300px", margin: "auto"}}
                    />
                </Carousel.Item>
            ) 
        }))}
    </Carousel>
  );
}

export default PhotoCarousel;