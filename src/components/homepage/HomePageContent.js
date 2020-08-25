import React, { useEffect, useRef } from 'react'
import { TweenMax, Power3, Power2, gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom"
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

export default function HomePageContent() {

    let projects = useRef(null);
    let about = useRef(null);
    let mainImg = useRef(null);
    let follow = useRef(null);
    let cv = useRef(null);
    let contact = useRef(null);
    let img = useRef(null);
    let skill = useRef(null);
    let quote = useRef(null);

    useEffect(() => {
        TweenMax.from(
            projects.current,
            1.3,
            {
                opacity: 0,
                x: -200,
                ease: Power3.easeOut,
            }
        )
        TweenMax.from(
            mainImg.current,
            1.3,
            {
                opacity: 0,
                ease: Power3.easeOut,
            }
        )
        TweenMax.from(
            about.current,
            1.5,
            {
                opacity: 0,
                x: 200,
                ease: Power3.easeOut,
            }
        )
        TweenMax.from(
            follow.current,
            1.7,
            {
                opacity: 0,
                x: 200,
                ease: Power3.easeOut,
            }
        )
        TweenMax.from(
            cv.current,
            3.2,
            {
                scrollTrigger: {
                    trigger: follow.current,
                    start: "center center",
                    end: "end",
                },
                opacity: 0,
                ease: Power3.easeInOut,
            }

        )
        TweenMax.from(
            contact.current,
            {
                scrollTrigger: {
                    trigger: follow.current,
                    start: "center center",
                    end: "center ",
                },
                opacity: 0,
                x: 200,
                ease: Power3.easeInOut,
            }

        )
        TweenMax.from(
            img.current,
            {
                scrollTrigger: {
                    trigger: follow.current,
                    start: "center center",
                    end: "end",
                },
                opacity: 0,
                x: -200,
                ease: Power2.easeOut,
                duration: 3,
            }

        )
        TweenMax.from(
            skill.current,
            {
                scrollTrigger: {
                    trigger: follow.current,
                    start: "center center",
                    end: "end",

                },
                opacity: 0,
                y: -200,
                ease: Power3.easeInOut,
                duration: 1,
            }

        )
        TweenMax.from(
            quote.current,
            {
                scrollTrigger: {
                    trigger: follow.current,
                    start: "center center",
                    end: "end",
                },
                opacity: 0,
                y: 100,
                ease: Power3.easeInOut,
                duration: 1.6,
            }

        )
    }, [])

    return (
        <div>
            <section className="homepage-section">
                <div className="projects" ref={projects}>
                    <p>Latest Projects</p>
                    <p>Behind sooner dining so window excuse he summer.
                        Breakfast met certainty and fulfilled propriety led. </p>

                    <Link to={"/mywork"}>Continue...</Link>

                </div>
                <div className="main_img" ref={mainImg}>
                </div>
                <div className="about" ref={about}>
                    <div >
                        <Link to="/about">
                            <p>Read more</p>
                        </Link>
                        <p>About me</p>
                    </div>

                </div>
                <div className="follow" ref={follow}>
                    <div >
                        <p>Follow me</p>
                        <p>Connect</p>
                        <ul>
                            <li>
                                <a href="https://twitter.com/LucioBicaku" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/luciano-bicaku-0403871a0/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/luciobicaku/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/LucianoBicaku2307200" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="img2" ref={img}>

                </div>
                <div className="cv" ref={cv}>
                    <div>
                        <p>View here</p>
                        <p>CV</p>
                    </div>
                </div>
                <div className="quote" ref={quote}>
                    <div >
                        <p>FAVOURITE QUOTE</p>
                        <p><span>"</span>Hard work beats talent when talent fails to work hard.<span>"</span></p>
                    </div>

                </div>
                <div className="skills" ref={skill}>

                </div>
                <div className="contact" ref={contact}>
                    <p >Contact Me</p>
                </div>
            </section>
        </div>
    )
}
