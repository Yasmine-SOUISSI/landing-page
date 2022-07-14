import React from "react";
import "./About.css";
import amy from "../../2.jpg";

const About = () => {
    const data = [
        {
            title: "Goal Focused",
            description:
                "Our start up union , aims to build , melt and shape our students from different backgrounds to turn out confirmed talents, who are able to master their implementation skills being autonomous while performing .",
        },
        {
            title: "Core Values",
            description:
                "Make our students be part of a large and solid Union of experts & to belong to an engaged Comunity that is eager to collaborate and fortify  itself through our different programs and implications.",
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
            <div class="about-top">
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
