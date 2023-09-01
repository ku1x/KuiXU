import React from 'react'
import { useState } from 'react'
import List from './List'
import Items from './Items'
import shapeOne from '../../assets/shape-1.png';
import { projects } from '../../data'
import './portfolio.css'
import { AnimatePresence } from "framer-motion"

const allNavList = ['All', ...new Set(projects.map((item) => item.category))];

const Portfolio = () => {

    const [projectItems, setProjectItems] = useState(projects);

    const filterItems = (category) => {
        if (category === 'All') {
            setProjectItems(projects);
            return;
        }
        const newItems = projects.filter((item) => item.category === category);
        setProjectItems(newItems);
    };


    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title text-cs">Portfolio</h2>
            <p className="section__subtitle">
                My<span>Projects</span>
            </p>


            <div className="portfolio__nav">
                <List allNavList={allNavList} filterItems={filterItems} />
            </div>

            <div className="portfolio__container container grid">
                <AnimatePresence
                    initial={false}
                >
                    <Items projectItems={projectItems} />
                </AnimatePresence>
            </div>

            <div className="section__deco deco__right">
                <img src={shapeOne} alt="" className="shape" />
            </div>

        </section>
    )
}

export default Portfolio