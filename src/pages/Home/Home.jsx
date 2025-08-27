import Card from '../../components/Card/Card'
import projects from '../../projects.json'
import './Home.css'
import { SiCanva, SiWordpress, SiFigma, SiGoogleWorkspace, SiMicrosoft365, SiFeedly, SiTeams, SiDiscord, SiSlack, SiNotion, SiJira, SiTrello, SiChromeDevTools, Sinpm, SiDocker, SiLinux, SiGit, SiPostman, SiVisualstudiocode, SiGithub, SiJavascript, SiReact, SiHtml5, SiCss, SiCplusplus, SiPhp, SiSymfony, SiNodedotjs, SiExpress, SiSass } from '@icons-pack/react-simple-icons'
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

                <h3>Langages</h3>
                <div className="full-stack">
                    <p className="front-end">Front-End</p>
                    <p className="back-end">Back-End</p>
                </div>

                <div className="stack">
                    <div className="stack-item">
                        <SiHtml5 size="35" color="#E34F26" />
                        <p>HTML</p>
                    </div>
                    <div className="stack-item">
                        <SiCss size="35" color="#1572B6" />
                        <p>CSS</p>
                    </div>
                    <div className="stack-item">
                        <SiSass size="35" color="#CC6699" />
                        <p>Scss</p>
                    </div>
                    <div className="stack-item">
                        <SiJavascript size="35" color="#F7DF1E" />
                        <p>Javascript</p>
                    </div>
                    <div className="stack-item">
                        <SiReact size="35" color="#61DAFB" />
                        <p>ReactJS</p>
                    </div>
                    <div className="stack-item">
                        <SiExpress size="35" color="#000000" />
                        <p>ExpressJS</p>
                    </div>
                    <div className="stack-item">
                        <SiCplusplus size="35" color="#00599C" />
                        <p>C++</p>
                    </div>
                    <div className="stack-item">
                        <SiPhp size="33" color="#777BB4" />
                        <p>PHP</p>
                    </div>
                    <div className="stack-item">
                        <SiSymfony size="35" color="#000000" />
                        <p>Symfony</p>
                    </div>
                    <div className="stack-item">
                        <SiNodedotjs size="35" color="#339933" />
                        <p>NodeJS</p>
                    </div>
                </div>

                <div className="tools">
                    <h3>Environement de travail</h3>

                    <div className="dev-and-management-title">
                        <p className="dev">Développement</p>
                        <p className="management">Collaboration & Gestion de projet</p>
                    </div>

                    <div className="dev-and-management-tools">
                        <div className="dev-tools">
                            <SiVisualstudiocode />
                            <p>VSCode</p>
                            <SiGithub />
                            <p>GitHub</p>
                            <SiGit />
                            <p>Git</p>
                            <SiPostman />
                            <p>Postman</p>
                            <SiLinux />
                            <p>Linux</p>
                            <SiDocker />
                            <p>Docker</p>
                            <Sinpm />
                            <p>npm</p>
                            <SiChromeDevTools />
                            <p>Chrome DevTools</p>
                        </div>
                        <div className="management-tools">
                            <p>Trello</p>
                            <p>Jira</p>
                            <p>Notion</p>
                            <p>Slack</p>
                            <p>Discord</p>
                            <p>Teams</p>
                        </div>
                    </div>

                    <div className="prod-veille-and-uiux-cms-title">
                        <p className="prod-veille">Productivité & Veille</p>
                        <p className="uiux-cms">UI/UX & CMS</p>
                    </div>

                    <div className="prod-veille-and-uiux-cms-tools">
                        <div className="prod-veille-tools">
                            <p>Feedly</p>
                            <p>Microsoft 365</p>
                            <p>Google Workspace</p>
                        </div>
                        <div className="uiux-cms-tools">
                            <p>Figma</p>
                            <p>Canva</p>
                            <p>Wordpress</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Home