import Card from '../../components/Card/Card'
import projects from '../../projects.json'
import './Home.css'
import { SiCanva, SiWordpress, SiFigma, SiGoogle, SiFeedly, SiDiscord, SiSlack, SiNotion, SiJira, SiTrello, SiNpm, SiDocker, SiLinux, SiGit, SiPostman, SiGithub, SiJavascript, SiReact, SiHtml5, SiCss, SiCplusplus, SiPhp, SiSymfony, SiNodedotjs, SiExpress, SiSass } from '@icons-pack/react-simple-icons'
import { FiTool, FiLink } from "react-icons/fi"
import { FaLinkedin, FaFilePdf } from "react-icons/fa";
import vscode from "/assets/competences/VSCode.png" 
import microsoft365 from "/assets/competences/microsoft365.png"
import teams from "/assets/competences/teams.png"


function Home() {
    const base = import.meta.env.BASE_URL; 
    const IMG_DIR = `${base}assets/projects/`;

    return (
        <>
            <section className="projects">
                <h1>Mes récents projets</h1>

                <div className="cards-container">
                    {projects.map((project) => (
                        <Card key={project.id} id={project.id} cover={`${IMG_DIR}${project.cover}`} title={project.title} />
                    ))}
                </div>

                <a href="https://github.com/Anturiasgit?tab=repositories" className="repositories" target="_blank">
                    <FiLink /> <span>Voir tous mes projets sur mon Github</span>
                </a>
            </section>

            <hr />

            <section className="competences">
                <h1>Mes compétences</h1>

                <h3>Langages</h3>
                <div className="full-stack-title">
                    <p className="front-end">Front-End</p>
                    <p className="back-end">Back-End</p>
                </div>

                    <div className="full-stack">
                    <div className="front-stack">
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
               </div>         

                <div className="back-stack">
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
                    </div>
                      
                    

                <div className="tools">
                    <h3>Environnement de travail</h3>

                    <div className="dev-and-management-title">
                        <p className="dev">Développement</p>
                        <p className="management">Collaboration & Gestion de projet</p>
                    </div>

                    <div className="dev-and-management-tools">
                        <div className="dev-tools">
                            <div className="tools-item">
                                <img className="icon" src={vscode} alt="VSCode" />
                                <p>VSCode</p>
                            </div>
                            <div className="tools-item">
                                <SiGithub color="#181717"/>
                                <p>GitHub</p>
                            </div>
                            <div className="tools-item">
                                <SiGit color="#F05032"/>
                                <p>Git</p>
                            </div>
                            <div className="tools-item">
                                <SiPostman color="#FF6C37"/>
                                <p>Postman</p>
                            </div>
                            <div className="tools-item">
                                <SiLinux />
                                <p>Linux</p>
                            </div>
                            <div className="tools-item">
                                <SiDocker color="#2496ED" />
                                <p>Docker</p>
                            </div>
                            <div className="tools-item">
                                <SiNpm color="#CB3837"/>
                                <p>npm</p>
                            </div>
                            <div className="tools-item">
                                <FiTool size="24" />
                                <p>Chrome DevTools</p>
                            </div>
                        </div>
                        <div className="management-tools">
                            <div className="tools-item">
                                <SiTrello color="#0052CC" />
                                <p>Trello</p>
                            </div>
                            <div className="tools-item">
                                <SiJira color="#0052CC" />
                                <p>Jira</p>
                            </div>
                            <div className="tools-item">
                                <SiNotion color="#000000" />
                                <p>Notion</p>
                            </div>
                            <div className="tools-item">
                                <SiSlack  color="#4A154B"/>
                                <p>Slack</p>
                            </div>
                            <div className="tools-item">
                                <SiDiscord color="#5865F2" />
                                <p>Discord</p>
                            </div>
                            <div className="tools-item">
                            <img className="icon" src={teams} alt="Teams" />                                
                            <p>Teams</p>
                            </div>
                        </div>
                    </div>

                    <div className="prod-veille-and-uiux-cms-title">
                        <p className="prod-veille">Productivité & Veille</p>
                        <p className="uiux-cms">UI/UX & CMS</p>
                    </div>

                    <div className="prod-veille-and-uiux-cms-tools">
                        <div className="prod-veille-tools">
                            <div className="tools-item">
                                <SiFeedly color="#2BB24C"/>
                                <p>Feedly</p>
                            </div>
                            <div className="tools-item">
                            <img className="icon" src={microsoft365} alt="Microsoft 365" />
                                <p>Microsoft 365</p>
                            </div>
                            <div className="tools-item">
                                <SiGoogle color="#4285F4"/>
                                <p>Google Workspace</p>
                            </div>
                        </div>
                        <div className="uiux-cms-tools">
                            <div className="tools-item">
                                <SiFigma />
                                <p>Figma</p>
                            </div>
                            <div className="tools-item">
                                <SiCanva color="#00C4CC" />
                                <p>Canva</p>
                            </div>
                            <div className="tools-item">
                                <SiWordpress color="#21759B" />
                                <p>Wordpress</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            <section className="about">
                <h1 className="about-title">A propos de moi</h1>
                <div className="about-text">
                    Je suis passionnée depuis toujours par la logique et la résolution de problèmes.
                    Cette passion m’a naturellement conduite vers des études de <b>mathématiques et informatique à l’Université Lyon 1 (La Doua)</b>, 
                    où j’ai acquis de solides bases en algorithmique, programmation orientée objet et structures de données. Par la suite, 
                    je me suis spécialisée dans le <b>développement web</b>, à travers des formations et divers projets concrets. Aujourd’hui, 
                    je développe aussi bien en <b>front-end</b> (JavaScript ES6+, React, HTML5, CSS3, Sass) qu’en <b>back-end</b> (Node.js, Express, PHP, Symfony, SQL). 
                    J’ai également de l’expérience en C++ et je travaille avec des méthodes <b>Agile/Scrum</b>, en utilisant des outils comme <b>Git/GitHub, 
                    Postman ou Docker</b> pour assurer la qualité et la collaboration. Rigoureuse et créative, j’aime transformer une idée en solution digitale claire et fonctionnelle, 
                    que ce soit au sein d’une <b>équipe de développement</b> ou pour accompagner des <b>entreprises et particuliers</b> dans leurs projets numériques.
                    Toujours en quête de nouveaux défis, je suis ouverte à des <b>opportunités professionnelles</b> ainsi qu’à des <b>missions indépendantes</b> pour aider à concrétiser des besoins digitaux.
                </div>
                <div className="about-links">
                    <a href="https://linkedin.com/in/" target="_blank">
                        <FaLinkedin size="24" color="#0A66C2" />
                        <p>Mon LinkedIn</p>
                    </a>
                    <a id="github" href="https://github.com/anturiasgit" target="_blank">
                        <SiGithub size="24" color="#181717" />
                        <p>Voir mes projets sur GitHub</p>
                    </a>

                    <a href="/CV_Anturia_HassaniMzé_DevFullStack.pdf" download>
                    <FaFilePdf size="23" color="#d9534f" />
                    <p>Télécharger mon CV</p>
                    </a>
                </div>
            </section>

        </>
    );
}

export default Home