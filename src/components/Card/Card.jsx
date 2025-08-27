import './Card.css'
import { Link } from 'react-router-dom'

function Card({id, cover, title}) {
    return (
        <div className="project">
                <Link to={`/project/${title}`} className="card" >
                <img src={cover} alt={title} className="cover" />
                </Link>
        <p className="card-title">{title}</p>
        </div>

    );
}

export default Card