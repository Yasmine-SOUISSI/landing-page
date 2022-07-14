import React from "react";
import "./About.css";
import amy from "../../2.jpg";

const About = () => {
    const data = [
        {
            title: "Goal Focused",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            title: "Continous improvement",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
    ];
    return (
        <section class="about">
            <div class="about-top">
                <div class="about-container">
                    <h2 class="about-heading">About Us</h2>
                    <h1 class="about-title">Our design solve problems</h1>
                    <p class="about-text">
                        We are a union of young comunity that is passionate
                        about IT and the different technologies. Our goal is to
                        help you to become a better developer.
                    </p>
                </div>
                <img class="about-img" src={amy} alt="" />
            </div>
            <div class="about-bottom">
                <h2 class="about-heading-2">Who we are</h2>
                <div class="about-container-2">
                    <div style={{ display: "flex", marginBottom: 20 }}>
                        {data.map((item) => (
                            <div class="about-container-bottom">
                                <h3 class="about-title-bottom">{item.title}</h3>
                                <p class="about-text-bottom">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <img class="about-img2" src="" alt="" />
                </div>
            </div>
        </section>
    );
};

export default About;
