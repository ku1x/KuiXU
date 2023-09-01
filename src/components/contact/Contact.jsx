import React from 'react'
import './contact.css'
import { FaRegEnvelope, FaRegUser, FaRegMap } from 'react-icons/fa'
import axios from 'axios'
import shapeOne from '../../assets/shape-1.png';


const Contact = () => {
    const [form, setForm] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    //axios + google sheets +sheet.best
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(
            'https://sheet.best/api/sheets/fac6a8e9-76b6-4ae9-a845-363c83606a26',
            form)
            .then(response => {
                console.log(response)
                //clear form
                setForm({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
            }
            )
    }

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title text-cs">Contact Me</h2>
            <p className="section__subtitle">
                Let's<span>Talk About Ideas</span>
            </p>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegMap />
                        </span>
                        <h3 className="contact__card--title">Adress</h3>
                        <p className="contact__card--data">Bremen,Germany</p>
                    </div>
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegUser />
                        </span>
                        <h3 className="contact__card--title">Master Studying</h3>
                        <p className="contact__card--data">Available right now</p>
                    </div>
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegEnvelope />
                        </span>
                        <h3 className="contact__card--title">Email</h3>
                        <p className="contact__card--data">quark97@outlook.com</p>
                    </div>
                </div>

                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__form-group grid">
                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">
                                Your full name <b>*</b>
                            </label>
                            <input
                                type="text"
                                name='name'
                                onChange={handleChange}
                                value={form.name}
                                className="contact__form-input"
                            />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">
                                Your Email Address <b>*</b>
                            </label>
                            <input
                                type="email"
                                name='email'
                                onChange={handleChange}
                                value={form.email}
                                className="contact__form-input" />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">
                            Your Subject <b>*</b>
                        </label>
                        <input
                            type="text"
                            name='subject'
                            onChange={handleChange}
                            value={form.subject}
                            className="contact__form-input"
                        />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag text-cs">
                            Your Message <b>*</b>
                        </label>
                        <textarea
                            type="text"
                            name='message'
                            onChange={handleChange}
                            value={form.message}
                            className="contact__form-input"
                        ></textarea>
                    </div>

                    <div className="contact__submit">
                        <p>* Accept the terms and condotoons. </p>
                        <button type="submit" className="btn text-cs">Send Message</button>
                    </div>
                </form>
            </div>

            <div className="section__deco deco__left">
                <img src={shapeOne} alt="" className="shape" />
            </div>

        </section>
    )
}

export default Contact