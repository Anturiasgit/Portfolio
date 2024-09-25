import React from 'react'
import { EnvironmentOutlined, GithubOutlined, LinkedinOutlined, LinkOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'

const HeaderComp = () => {
    return (
        <header>
            <div className='init'>
                <h1>Anturia Hassani Mzé</h1>
                <h3>Aspirante Développeuse Full Stack</h3>
                <div className="links">
                    <div className="link-item">
                        <LinkedinOutlined />
                    </div>
                    <div className="link-item">

                        <a href="https://github.com/Anturiasgit" target="_blank">  <GithubOutlined /> </a>
                    </div>
                </div>
            </div>

            <section>
                <div className='about-me'>
                    <h2>A propos de moi : </h2>
                    <p>Je recherche un stage de <b>2 mois</b> au poste de <b>développeur full stack</b> afin de renforcer mes compétences et obtenir à terme le titre professionnel de “Développeur web et web mobile”. <br /> Animée par une curiosité profonde, une autonomie affirmée et une compétence éprouvée en algorithmique, je suis toujours prête à relever de nouveaux défis. J'apprends rapidement et je sais m'adapter aux exigences de chaque projet, tout en apportant une contribution significative à l'équipe.
                    </p>
                </div>

                <div className="infos">
                    <div className="info-item">
                        <EnvironmentOutlined />
                        <span>Villeurbanne</span>
                    </div>
                    <div className="info-item">
                        <MailOutlined />
                        <span>
                            <a href="mailto:anturia.job@gmail.com">anturia.job@gmail.com</a>
                        </span>
                    </div>
                    <div className="info-item">
                        <PhoneOutlined />
                        <span>
                            06 95 53 52 33
                        </span>
                    </div>
                    <div className="info-item">
                        <LinkOutlined />
                        <span>
                            <a href="https://github.com/Anturiasgit" target="_blank" rel="noopener noreferrer">Découvrez mes projets sur mon GitHub</a>
                        </span>
                    </div>
                </div>
            </section>


        </header>
    )
}

export default HeaderComp


