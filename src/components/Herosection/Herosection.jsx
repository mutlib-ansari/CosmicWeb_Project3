import React from "react";
import "./herosection.css"; // Import CSS for styling


function Herosection() {
    return (
        <div className="hero-section">
            {/* Background Video */}
            <iframe
                className="background-video"
                src="https://www.youtube.com/embed/eTD0WWFIDAg?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=eTD0WWFIDAg&disablekb=1&rel=0"
                title="Background Video"
                allow="autoplay; encrypted-media"
            ></iframe>

            {/* Overlay */}
            <div className="overlay"></div>

           
            <div className="contenthero text-center text-white">
                <h1 className="display-4">
                    Your path is illuminated by a road-map of stars.
                </h1>
                <p className="lead">
                    Learn about astrology, zodiac signs, retrogrades, and more! Your world
                    becomes clearer once you understand how the universe influences it.
                </p>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-custom me-3">GET STARTED</button>
                    <button className="btn btn-outline-custom">DISCOVER MORE</button>
                </div>
            </div>

        </div>
    );
}

export default Herosection;

