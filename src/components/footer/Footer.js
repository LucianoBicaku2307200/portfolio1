import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__about">
                <p>About me</p>
                <p>Behind sooner dining so window excuse he summer. Breakfast
                     met certainty and fulfilled propriety led.... </p>
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
            <div className="footer__links">
                <p>Quick Links</p>
                <ul>
                    <Link to={"/mywork"}><li>My Projects</li></Link>
                    <Link to={"/"}><li>CV</li></Link>
                    <Link to={"/contact"}><li>Contact</li></Link>
                </ul>
            </div>
            <div className="footer__contact">
                <p>Contact</p>
                <ul>
                    <li>
                        <i className="far fa-envelope"></i>
                         luciano.bicaku2307@gmail.com
                    </li>
                    <li>
                        <i className="fas fa-map-marker-alt"></i>
                         Rruga Endri Keko
                    </li>
                    <li>
                        <i className="fas fa-phone-alt"></i>
                         #355 688 030 642
                    </li>
                </ul>
            </div>
            <div className="footer__projects">
                <p>Best Projects</p>
            </div>
        </div>
    )
}

export default Footer
