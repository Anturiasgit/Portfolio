import { FiLink } from "react-icons/fi"
import projects from "../../projects.json"
import { useParams } from "react-router-dom"
import "./Project.css"


function Project() {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    return (
        <div>
            <h1 className="project-title">{project.title}</h1>
            <img className="project-cover" src={project.cover} alt={project.title} />
            <h3 className="project-subtitle">{project.title}</h3>
            <div className="project-description">
                {project.description}
            </div>
            <a className="project-link" href={project.link}>
                <FiLink />
                <p className="project-link-text">Voir le code source de ce projet sur mon GitHub</p>
            </a>
        </div>
    );
}



export default Project
