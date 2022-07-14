import React from "react";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";
import "./Service.css";
import { AiOutlineArrowRight } from "react-icons/ai";
function ServiceList() {
    return (
        <section class="work">
            <div class="work-content-left">
                <h2 class="work-title">Our services</h2>
                <p class="work-description">
                    We provide full learning program to our students through
                    three solid phases. We provide full learning program to our
                    students through three solid phases.
                </p>
                <div class="work-button">
                    <p class="work-button-text">
                        Get in touch with us{" "}
                        <AiOutlineArrowRight class="work-icons" />{" "}
                    </p>
                </div>
            </div>
            <div class="work-content-right">
                <div class="card2">
                    <div className="work-icon">
                        {" "}
                        <RiNumber1 className="icons" />
                    </div>

                    <h5 class="work-title2">Training Course</h5>
                    <p class="work-description">
                        We provide training courses to our students through
                        partice from zero to hero assisted by an instructor.
                    </p>
                </div>
                <div class="card2">
                    <div className="work-icon">
                        {" "}
                        <RiNumber2 className="icons" />
                    </div>
                    <h5 class="work-title2">Work Lab</h5>
                    <p class="work-description">
                        We provide a work lab after completion of the training
                        session assisted by an IT expert.
                    </p>
                </div>
                <div class="card2">
                    <div className="work-icon">
                        {" "}
                        <RiNumber3 className="icons" />
                    </div>
                    <h5 class="work-title2">Internship Program</h5>
                    <p class="work-description">
                        We provide a Internship program and placement for our
                        students, in one of our companies partners.
                    </p>
                </div>
                <div class="card2">
                    <div className="work-icon">
                        {" "}
                        <RiNumber4 className="icons" />
                    </div>
                    <h5 class="work-title2">Hackathon</h5>
                    <p class="work-description">
                        We organize hackathon for our students to improve their
                        skills and knowledge.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ServiceList;
