import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TweenMax, Power3, Power2 } from 'gsap'

export default function ProjectsPageContent() {
    let title = useRef(null);
    let item1 = useRef(null);
    let item2 = useRef(null);
    let item3 = useRef(null);
    let item4 = useRef(null);

    useEffect(() => {
        TweenMax.from(
            title.current,
            1.3,
            {
                opacity: 0,
                ease: Power3.easeOut,
            }
        )
        TweenMax.from(
            item1.current,
            1.3,
            {
                opacity: 0,
                x: -100,
                ease: Power2.easeOut,
            }
        )
        TweenMax.from(
            item2.current,
            1.3,
            {
                opacity: 0,
                x: 100,
                ease: Power2.easeOut,
            }
        )
        TweenMax.from(
            item3.current,
            1.3,
            {
                opacity: 0,
                y: -100,
                ease: Power2.easeOut,
            }
        )
        TweenMax.from(
            item4.current,
            1.3,
            {
                opacity: 0,
                y: -100,
                ease: Power2.easeOut,
            }
        )
    }, [])

    return (
        <div>
            <h1 id="h1" ref={title}>My Works</h1>
            <div className="project-section">
                <div className="item1" ref={item1}>
                    <p>Front-End</p>
                    <p>La Cassa</p>
                    <Link to={"/"}>View Project</Link>
                </div>
                <div className="item2" ref={item2}>
                    <p>Front-End, Back-End</p>
                    <p>Lock-Al</p>
                    <Link to={"/"}>View Project</Link>
                </div>
                <div className="item3" ref={item3}>
                    <p>Front-End</p>
                    <p>Netflix Clone</p>
                    <Link to={"/"}>View Project</Link>
                </div>
                <div className="item4" ref={item4}>
                    <p>Front-End,Back-End</p>
                    <p>Chat App</p>
                    <Link to={"/"}>View Project</Link>
                </div>
            </div>
        </div>

    )
}
