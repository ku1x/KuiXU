import React from 'react'
import './resume.css'
import { cv } from '../../data'
import Card from './Card'
import shapeOne from '../../assets/shape-1.png';

const Resume = () => {
    return (
        <section className="resume section" id="resume">
            <h2 className="section__title text-cs">Resume</h2>
            <p className="section__subtitle">
                My<span>Story</span>
            </p>

            <div className="resume__container container grid">
                <div className="resume__group">
                    <h3 className="resume__heading">Education</h3>
                    <div className="resume__items">
                        { cv.map((item, id) => {
                            if ( item.category === 'education' ) {
                            return <Card key={id} {...item} />
                            }
                        }) }
                    </div>
                </div>

                <div className="resume__group">
                    <h3 className="resume__heading">Experience</h3>
                    <div className="resume__items">
                        { cv.map((item, id) => {
                            if ( item.category === 'experience' ) {
                            return <Card key={id} {...item} />
                            }
                        }) }
                    </div>
                </div>
            </div>

            <div className="section__deco deco__left">
                <img src={shapeOne} alt="" className="shape" />
            </div>
            
        </section>

    )
}

export default Resume