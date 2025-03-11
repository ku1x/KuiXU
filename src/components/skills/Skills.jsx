import React from 'react'
import './skills.css'
import shapeOne from '../../assets/shape-1.png';
import { skills } from '../../data'
import { FaStar } from 'react-icons/fa'

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title text-cs">What I Can Do</h2>
            <p className="section__subtitle">
                My<span>Skills</span>
            </p>

            <div className="skills__container container grid">
                {skills.map(({ id, name, percentage, description }) => {
                    return (
                        <div className="skills__item" key={id}>
                            <div className="skills__titles">
                                <h3 className="skills__name">{name}</h3>
                                <span className="skills__number">
                                    {percentage} <FaStar className='Fa__icon' />
                                </span>
                            </div>

                            <p className="skills__description">
                                {description}
                            </p>

                            <div className="skills__bar">
                                <span className="skills__percentage " style={{ width: `${percentage}%` }}>
                                    <span className="skills__value" > <FaStar className='Fa__icon' /></span>
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="section__deco deco__left">
                <img src={shapeOne} alt="" className="shape" />
            </div>
        </section>

    )
}

export default Skills