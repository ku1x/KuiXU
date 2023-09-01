import React, { useEffect } from 'react'
import './header.css'
import { links } from '../../data'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { BsSun, BsMoon } from 'react-icons/bs'
import { Link, animateScroll } from 'react-scroll'
import shapeOne from '../../assets/shape-1.png';


//get stored theme
const getStorageTheme = () => {
    let theme = 'light-theme'
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme')
    }
    return theme
}


const Header = () => {

    const [showMenu, setShowMenu] = React.useState(false)
    const [scrollNav, setScrollNav] = React.useState(false)
    const [theme, setTheme] = React.useState(getStorageTheme())


    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    const scrollTop = () => {
        animateScroll.scrollToTop()
    }

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme')
        } else {
            setTheme('light-theme')
        }
    }

    //this ensures that the web page is properly styled and prevents scrolling when the menu is open
    useEffect(() => {
        document.body.classList.toggle('no-scroll', showMenu)
    }, [showMenu])

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    useEffect(() => {
        document.documentElement.className = theme
        localStorage.setItem('theme', theme)
    }, [theme])




    return (
        <header className={`header ${scrollNav ? 'scroll-header' : ''}`}>
            <nav className="nav">
                <Link to="/"
                    onClick={scrollTop}
                    className="nav__logo text-cs"
                >
                    Kui
                </Link>
                <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`}>
                    <div className="nav__data">
                        <ul className="nav__list">
                            {links.map(({ name, path }, index) => {
                                return (
                                    <li key={index} className="nav__item">
                                        <Link
                                            className="nav__link text-cs"
                                            to={path}
                                            spy={true}
                                            hashSpy={true}
                                            smooth={true}
                                            offset={-150}
                                            duration={500}
                                            onClick={() => setShowMenu(!showMenu)}
                                        >
                                            {name}
                                        </Link>

                                    </li>
                                )
                            })}
                        </ul>


                        <div className="header__socials">
                            <a href="https://www.instagram.com/kui.ku_i/" target="_blank" rel="noreferrer" className="header__social-links">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/kui-xu/" target="_blank" rel="noreferrer" className="header__social-links">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/ku1x" target="_blank" rel="noreferrer" className="header__social-links">
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    <div className="section__deco deco__left header__deco">
                        <img src={shapeOne} alt="" className="shape" />
                    </div>
                </div>

                <div className="nav__btns">
                    <div className="theme__toggle" onClick={toggleTheme}>
                        {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                    </div>
                    <div className={`nav__toggle ${showMenu ? 'animate-toggle' : ''}`}
                        onClick={() => setShowMenu(!showMenu)}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header