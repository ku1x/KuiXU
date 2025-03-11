import React, { useState, useEffect } from 'react'
import List from './List'
import Items from './Items'
import shapeOne from '../../assets/shape-1.png';
import { api } from '../../api'
import './portfolio.css'
import { AnimatePresence } from "framer-motion"

const allNavList = ['All', ...new Set(projects.map((item) => item.category))];

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('all');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const data = await api.getProjects();
                setProjects(data);
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchProjects();
    }, []);

    const filterItems = (category) => {
        if (category === 'All') {
            setProjects(projects);
            return;
        }
        const newItems = projects.filter((item) => item.category === category);
        setProjects(newItems);
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
                    <Items projectItems={projects} />
                </AnimatePresence>
            </div>

            <div className="section__deco deco__right">
                <img src={shapeOne} alt="" className="shape" />
            </div>
        </section>
    )
}

export default Portfolio