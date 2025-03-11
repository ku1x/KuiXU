import React from 'react'
import './Footer.css'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container grid">
                <div className="footer__socials">
                    <a href="https://www.instagram.com/kui.ku_i/" target="_blank" rel="noreferrer" className="footer__social-links">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/kui-xu/" target="_blank" rel="noreferrer" className="footer__social-links">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/ku1x" target="_blank" rel="noreferrer" className="footer__social-links">
                        <FaGithub />
                    </a>
                </div>

                <p className="footer__copyright text-cs">
                    &copy; 2023 <span> Kui Xu </span>. All rights reserved.
                </p>

                <p className="footer__copyright text-cs">
                    Developed by <span> Kui Xu </span>
                </p>

            </div>
        </footer>
    )
}

export default Footer