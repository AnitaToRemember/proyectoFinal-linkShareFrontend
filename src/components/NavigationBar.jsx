import '../components/NavigationBar.css'
import { Link } from 'react-router-dom' // Import Link from react-router-dom

const NavigationBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/mylinks">MyLinks</Link></li>
                <li className="nav-item"><Link to="/filter">Filter</Link></li>
                <li className="nav-item"><Link to="/account">Account</Link></li>
            </ul>
        </nav>
    )
}

export default NavigationBar
