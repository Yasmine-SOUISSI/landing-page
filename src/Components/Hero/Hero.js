import React from "react";
import "./Hero.css";
const Hero = () => {
    return (
        <div className="HeroContainer">
            <div className="HeroContainerLeft">
                <h1 className="HeroTitle">CodeUnite : to belong and become </h1>
                <p className="HeroText">
                    We adopt you melt and model your skills with the best tools
                    and techniques.
                </p>
                <button className="HeroButton">Contact us</button>
            </div>
            <img className="Img" src="{imgHero}" alt="" />
        </div>
    );
};

export default Hero;
