import './Mentions.css'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";

function Mentions() {
    return (
        <div>
            <Link to="/" className="back-home">
            <FaArrowLeft className="back-home-icon" />
            <p>Retour à l'accueil</p>
            </Link>            
            <h1>Mentions légales</h1>
            <h2>1. Édition du site</h2>
            <p>Conformément à l’article 6 de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique (LCEN), 
                il est précisé aux utilisateurs du site l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
                Propriétaire du site : Anturia Hassani Mzé Adresse : Villeurbanne, Lyon et alentours Téléphone : 06 95 53 52 33
                Email : anturia.job@gmail.com Responsable de la publication : Anturia Hassani Mzé → Le responsable de la publication est une personne physique.
                Hébergement : GitHub Pages
            </p>
            <h2>2. Propriété intellectuelle</h2>
            <p>L’ensemble des éléments graphiques, textes, logos, photos, et contenus présents sur le site sont protégés par le Code de la propriété intellectuelle et sont la propriété exclusive de leur auteur, 
                sauf mention contraire. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments de ce site, quel que soit le moyen ou le procédé utilisé, 
                est interdite sauf autorisation écrite préalable.
            </p>
            <h2>3. Responsabilité</h2>
            <p>Le propriétaire du site ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur, 
                lors de l’accès au site, résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications techniques requises, 
                soit de l’apparition d’un bug ou d’une incompatibilité. Des espaces interactifs (possibilité de poser des questions via un formulaire de contact) 
                sont à la disposition des utilisateurs. Le propriétaire du site se réserve le droit de supprimer, sans mise en demeure préalable, 
                tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France.
            </p>
            <h2>4. Gestion des données personnelles</h2>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, l’utilisateur dispose d’un droit d’accès, 
                de rectification, d’effacement et d’opposition sur ses données personnelles, qu’il peut exercer par email à l’adresse suivante : anturia.job@gmail.com.
                Les informations recueillies via le formulaire de contact sont utilisées uniquement pour répondre aux demandes et ne sont pas transmises à des tiers.
            </p>
            <h2>5. Liens hypertextes</h2>
            <p>Le site peut contenir des liens hypertextes vers d’autres sites. 
               Le propriétaire n’exerce aucun contrôle sur ces contenus et décline toute responsabilité quant à leur disponibilité ou leur exactitude.
            </p>
            <h2>6. Droit applicable</h2>
            <p>Tout litige en relation avec l’utilisation du site est soumis au droit français.</p>
        </div>
    );
}

export default Mentions