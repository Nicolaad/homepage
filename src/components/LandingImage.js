import React from 'react';
import "./LandingImageCSS.css"
import landingPageImage from "../visuals/landingPageImage.jpg"
const LandingImage = () => {
    return (
      <div className="LandingImage">
      <h2>Nicolai A. Dalaaker</h2>
      <img src={landingPageImage} alt="Large image of me">
      </img>

      </div>
    );
};

export default LandingImage;
