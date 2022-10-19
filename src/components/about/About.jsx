import React from 'react'
import './about.css'
import { FaAward,FaLanguage } from 'react-icons/fa';
import {MdOutlineCastForEducation} from 'react-icons/md';
import AboutMe from '../../assets/about_me.PNG';

const About = ()=>{
    return (<section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={AboutMe} alt="About Image"/>
                </div>
            </div>
            <div className="about__content">
            <div className="about__cards">
                <article className="about__card">
                    <MdOutlineCastForEducation className="about__icon"/>
                    <h5>Education</h5>
                    <div><small>BSC IN CSE</small></div>
                    <div><small>University Of Dhaka, Bangladesh.</small></div>
                </article>
                <article className="about__card">
                    <FaLanguage className="about__icon"/>
                    <h5>Language</h5>
                   <div> <small>Japanese: JLPT N2.</small></div>
                   <div> <small>English: Business.</small></div>
                   <div> <small>Others: Bangla(Native), Hindi.</small></div>
                </article>
                <article className="about__card">
                    <FaAward className="about__icon"/>
                    <h5>Experience</h5>
                    <div><small>1.5+ Years of Working Experience in the Software Industry.</small></div>
                </article>
            </div>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
        </div>
    </section>)
}
export default About