import '../components/NavigationBar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLink, faFilter, faUser } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} /> Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/mylinks">
                        <FontAwesomeIcon icon={faLink} /> MyLinks
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/filter">
                        <FontAwesomeIcon icon={faFilter} /> Filter
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/account">
                        <FontAwesomeIcon icon={faUser} /> Account
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBar;
