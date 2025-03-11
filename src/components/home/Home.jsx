//*home component
import React, { useState } from 'react';
import './home.css';
import profileImg from '../../assets/profile-img.jpg';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import {resume} from '../../data';


import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import CV from '../../assets/KuiXU_CV_resume.pdf';

const Home = () => {

    return (
        <section className="home" id="home">
            <div className="home__wrapper">
                <div className="home__container container">
                    <ul className="home__circles">
                        <li className="home__circle circle__one"></li>
                        <li className="home__circle circle__two"></li>
                        <li className="home__circle circle__three"></li>
                        <li className="home__circle circle__four"></li>
                    </ul>

                    <p className='home__subtitle text-cs'>
                        Hello, <span>My Name Is</span>
                    </p>
                    <h1 className="home__title text-cs">
                        <span>Kui</span> XU
                    </h1>
                    <p className="home__job">
                        <span className="text-cs">I Am</span> <b>Digital Designer</b>
                    </p>
                    <div className="home__img-wrapper">
                        <div className="home__banner">
                            <img src={profileImg} alt="" className="home__profile" />
                        </div>

                        <img src={shapeOne} alt="" className="shape shape__1" />
                        <img src={shapeTwo} alt="" className="shape shape__2" />
                        <img src={shapeTwo} alt="" className="shape shape__3" />

                    </div>



                    <div className="home__description">
                        <p className="text-cs">
                            {resume.description}
                        </p>
                    </div>
                    <div className="home__socials">
                        <a href="https://www.instagram.com/kui.ku_i/" target="_blank" rel="noreferrer" className="home__social-links">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/in/kui-xu/" target="_blank" rel="noreferrer" className="home__social-links">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/ku1x" target="_blank" rel="noreferrer" className="home__social-links">
                            <FaGithub />
                        </a>
                    </div>
                    <div className="home__btns">
                        <a download='' href={CV} className="btn text-cs">Download CV</a>
                        <a href="#skills" className="hero__link text-cs">My Skills</a>
                    </div>
                </div>

                <div className="section__deco deco__left">
                    <img src={shapeOne} alt="" className="shape" />
                </div>
            </div>


        </section>
    );
};

export default Home;
