import '../styles/components/NavigationBar.css'
import { Link } from 'react-router-dom' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faLink, faSort, faUser } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

const NavigationBar = () => {
    const { user } = useContext(AuthContext);
    const homeLink = (user === undefined || user === null) ? "/" : "/home"
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item"><Link to={homeLink}><FontAwesomeIcon icon={faHouse} size="2xl" style={{color: "#0093ff",}} /> </Link></li>
                <li className="nav-item"><Link to="/mylinks"><FontAwesomeIcon icon={faLink} size="2xl"  style={{color: "#0093ff",}} /></Link></li>
                <li className="nav-item"><Link to="/filter"><FontAwesomeIcon icon={faSort} size="2xl"  style={{color: "#0093ff",}} /></Link></li>
                <li className="nav-item"><Link to="/account"><FontAwesomeIcon icon={faUser} size="2xl"  style={{color: "#0093ff",}} /></Link></li>
            </ul>
        </nav>
    );
}

export default NavigationBar
