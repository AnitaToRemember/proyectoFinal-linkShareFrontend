import { useContext } from 'react';
import ShareInLogo from '../assets/ShareInLogo.png'
import '../styles/components/HeaderBar.css'
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'



const HeaderBar = () => {
    const { user } = useContext(AuthContext);
    const homeLink = (user === undefined || user === null) ? "/" : "/home"
    return (
        <header id="header" >
                
                <Link to={homeLink}><img className='header-logo' src={ShareInLogo}/></Link>
                <h1 className='title'>ShareIn</h1>
        </header>
    )
}


export default HeaderBar