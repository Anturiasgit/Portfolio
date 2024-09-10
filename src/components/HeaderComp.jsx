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
                        <GithubOutlined />
                    </div>
                </div>
            </div>

            <section className='about-me'>
            <div className='research'>
                <h2>A propos de moi : </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem animi nulla tenetur, dolor error commodi veniam rerum accusamus reprehenderit cupiditate dicta quos cumque magnam quasi non ducimus. Optio, unde vero.
                    Iure delectus et tenetur assumenda eligendi, nobis doloremque voluptas dignissimos officiis qui consequuntur labore ab ipsum ea molestias obcaecati praesentium est pariatur, laborum ad. In sit amet et culpa aperiam. </p>
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


