import React from "react";
import "./Hero.css";
const Hero = () => {
    return (
        <div className="HeroContainer">
            <div className="HeroContainerLeft">
                <h1 className="HeroTitle">CodeUnite to belong and become </h1>

                <p className="HeroText">
                    We adopt you , melt & model your skills & finally deliver
                    you to the market place as valid IT expert unleash the
                    talent within you
                </p>
                <button className="HeroButton">Contact us</button>
            </div>
            <img className="Img" src="{imgHero}" alt="" />
        </div>
    );
};

export default Hero;
