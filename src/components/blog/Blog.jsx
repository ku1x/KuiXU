import React from 'react'
import './blog.css'
import { blogs__data } from '../../data'
import { FaArrowRight } from 'react-icons/fa'
import shapeOne from '../../assets/shape-1.png';

const Blog = () => {


  return (
    <section className="blog section" id="blog">
      <h2 className="section__title text-cs">Latest Blog</h2>
      <p className="section__subtitle">
        My<span>Artticles And Thoughts</span>
      </p>

      <div className="blog__container container grid">
        {blogs__data.map((blog) => {
          const { id, img, link, date, title, description } = blog
          return (
            <article className="blog__item card card-two" key={id}>
              <div className="blog__content">
                <span className="blog__date text-cs">{date}</span>
                <h3 className="blog__title">{title}</h3>
                <p className="blog__description">{description}</p>
              </div>

              <a href={link} className="link">
                More
                <FaArrowRight className="link__icon" />
              </a>

              <img src={img} alt="" className="blog__img" />

            </article>
          )
        })}
      </div>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>
    </section>
  )
}

export default Blog