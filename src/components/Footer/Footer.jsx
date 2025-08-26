import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return ( 
        <footer>
            <p id="name-dev-legal">Anturia Hassani Mzé - Développeuse Web & Web Mobile</p>
            <p id="credits">© 2025 - Site développé avec React & Vite - <Link to="/mentions-legales">Mentions légales</Link></p> 
        </footer>
    );
}

export default Footer