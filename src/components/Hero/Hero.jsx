import React from 'react';
import './Hero.css';
import collaborationImage from "../../assets/hero.png"

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>The Ultimate Collaboration</h1>
                <p className="subheading">Platform for Freelancers, Students & Employers</p>
                <p className="subheading">Connect, Collaborate, Earn</p>
            </div>
            <div className="hero-image">
                <img src={collaborationImage} alt="Collaboration" />
            </div>
        </section>
    );
}

export default Hero;
