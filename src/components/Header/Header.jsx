import './Header.css'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { SiGithub, SiJavascript, SiReact, SiHtml5, SiCss, SiCplusplus, SiPhp, SiSymfony, SiNodedotjs, SiExpress, SiSass } from '@icons-pack/react-simple-icons'

function Header() {
    return (
        <header>
            <section className="introduction">
                <div className="name-and-dev">
                    <h1 id="name">Anturia Hassani Mzé</h1>
                    <h1 id="dev">Développeuse Web & Web Mobile</h1>
                </div>
                <div className="links-and-stack">
                    <div className="links">
                        <a id="github" href="https://github.com/anturiasgit" target="_blank">
                            <SiGithub size="24" color="#181717" />
                        </a>
                        <a href="https://linkedin.com/in/" target="_blank">
                            <FaLinkedin size="24" color="#0A66C2" />
                        </a>
                    </div>
                    <div className="stack">
                        <SiHtml5 className="stack-item" size="24" color="#E34F26" />
                        <SiCss className="stack-item" size="24" color="#1572B6" />
                        <SiSass className="stack-item" size="24" color="#CC6699" />
                        <SiJavascript className="stack-item" size="24" color="#F7DF1E" />
                        <SiReact className="stack-item" size="24" color="#61DAFB" />
                        <SiExpress className="stack-item" size="24" color="#000000" />
                        <SiCplusplus className="stack-item" size="24" color="#00599C" />
                        <SiPhp className="stack-item" size="29" color="#777BB4" />
                        <SiSymfony className="stack-item" size="24" color="#000000" />
                        <SiNodedotjs className="stack-item" size="24" color="#339933" />
                    </div>
                </div>
            </section>


            <section className="contact">
                <div className="tel">
                <FaPhoneAlt className="tel-item" size="14"/>
                <p>06 95 53 52 33</p>
                </div>

                <div className="location">
                <FaMapMarkerAlt />
                <p>Villeurbanne, Lyon et alentours</p>
                </div>
               
               <div className="mail">
                <FaEnvelope className="mail-item" />
                <p>anturia.job@gmail.com</p>
               </div>
            </section>

            <hr />
        </header>
    );
}

export default Header