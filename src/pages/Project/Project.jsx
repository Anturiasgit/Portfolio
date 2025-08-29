import { FiLink } from "react-icons/fi"
import { FaArrowLeft } from "react-icons/fa";
import projects from "../../projects.json"
import { useParams, Link} from "react-router-dom"
import "./Project.css"


function Project() {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

     const base = import.meta.env.BASE_URL; 
    const IMG_DIR = `${base}assets/projects/`;

    return (
        <div>
            <Link to="/" className="back-home">
            <FaArrowLeft className="back-home-icon" />
            <p>Retour à l'accueil</p>
            </Link>
            <h1 className="project-title">{project.title}</h1>
            <div className="project-cover">
            <img src={`${IMG_DIR}${project.cover}`} alt={project.title} />
            </div>
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
