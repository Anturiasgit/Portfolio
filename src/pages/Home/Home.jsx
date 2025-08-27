import Card from '../../components/Card/Card'
import projects from '../../projects.json'
import './Home.css'
import { SiJavascript, SiReact, SiHtml5, SiCss, SiCplusplus, SiPhp, SiSymfony, SiNodedotjs, SiExpress, SiSass } from '@icons-pack/react-simple-icons'
import { FiLink } from "react-icons/fi"


function Home() {
    return (
        <>
            <section className="projects">
                <h1>Mes récents projets</h1>

                <div className="cards-container">
                    {projects.map((project) => (
                        <Card key={project.id} id={project.id} cover={project.cover} title={project.title} />
                    ))}
                </div>

                <a href="https://github.com/Anturiasgit?tab=repositories" className="repositories">
                    <FiLink /> <span>Voir tous mes projets sur mon Github</span>
                </a>
            </section>

            <hr />

            <section className="competences">
                <h1>Mes compétences</h1>

                <div className="full-stack">
                    <p className="front-end">Front-End</p>
                    <p className="back-end">Back-End</p>
                </div>

                <div className="stack">
                    <div className="stack-item">
                        <SiHtml5 size="24" color="#E34F26" />
                        <span>HTML</span>
                    </div>
                    <div className="stack-item">
                        <SiCss size="24" color="#1572B6" />
                        <span>CSS</span>
                    </div>
                    <div className="stack-item">
                        <SiSass size="24" color="#CC6699" />
                        <span>Scss</span>
                    </div>
                    <div className="stack-item">
                        <SiJavascript size="24" color="#F7DF1E" />
                        <span>Javascript</span>
                    </div>
                    <div className="stack-item">
                        <SiReact size="24" color="#61DAFB" />
                        <span>ReactJS</span>
                    </div>
                    <div className="stack-item">
                        <SiExpress size="24" color="#000000" />
                        <span>ExpressJS</span>
                    </div>
                    <div className="stack-item">
                        <SiCplusplus size="24" color="#00599C" />
                        <span>C++</span>
                    </div>
                    <div className="stack-item">
                        <SiPhp size="29" color="#777BB4" />
                        <span>PHP</span>
                    </div>
                    <div className="stack-item">
                        <SiSymfony size="24" color="#000000" />
                        <span>Symfony</span>
                    </div>
                    <div className="stack-item">
                        <SiNodedotjs size="24" color="#339933" />
                        <span>NodeJS</span>
                    </div>
                </div>

                <div className="management">
                    <p>Gestion de projet</p>
                    <p>Listing outils management</p>
                </div>
            </section>
        </>
    );
}

export default Home