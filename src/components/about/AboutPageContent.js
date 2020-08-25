import React, { useEffect, useRef } from 'react'
import { TweenMax, Power3, Power2 } from 'gsap'

import image from '../../assets/images/myImg.svg';

export default function AboutPageContent() {

    let img = useRef(null);
    let title = useRef(null);
    let text = useRef(null);
    let btn = useRef(null);

    useEffect(() => {
        TweenMax.from(
            img.current,
            1.3,
            {
                opacity: 0,
                x: -200,
                ease: Power2.easeOut,
            }
        )
        TweenMax.from(
            title.current,
            1.3,
            {
                opacity: 0,
                y: 200,
                ease: Power3.easeOut,
            }
        )
        TweenMax.from(
            text.current,
            1.3,
            {
                opacity: 0,
                x: 200,
                ease: Power3.easeOut,
            }
        )
        TweenMax.from(
            btn.current,
            1.3,
            {
                opacity: 0,
                y: -200,
                ease: Power3.easeOut,
            }
        )
    }, [])

    return (
        <div className="about-me">
            <div className="about-me_img" ref={img}>
                <img src={image} alt={"me"} />
            </div>
            <div className="about-me_content">
                <p ref={title}>About me</p>
                <p ref={text}>Behind sooner dining so window excuse he summer.
                Breakfast met certainty and fulfilled propriety led.
                Behind sooner dining so window excuse he summer.
                Breakfast met certainty and fulfilled propriety led.
                Behind sooner dining so window excuse he summer.
                  Breakfast met certainty and fulfilled propriety led. </p>
                <a href="/" ref={btn}>View My Resume</a>
            </div>

        </div>
    )
}
