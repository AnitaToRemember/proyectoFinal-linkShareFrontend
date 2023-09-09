import { Link } from 'react-router-dom';
import '../components/NavigationBar.css'

const NavigationBar = () => {
		return (
			<nav className="navbar">
				<ul className="nav-list">
				<li className="nav-item"><Link to="/links">Home</Link></li>
        <li className="nav-item"><Link to="/mylinks">My Links</Link></li>
        <li className="nav-item"><Link to="/filter">Filter</Link></li>
        <li className="nav-item"><Link to="/users">Account</Link></li>
				</ul>
			</nav>
				);
			}


export default NavigationBar