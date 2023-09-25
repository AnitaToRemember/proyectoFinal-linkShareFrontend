import ShareInLogo from '../assets/ShareInLogo.png'
import '../styles/components/HeaderBar.css'
import {Link} from 'react-router-dom'

const HeaderBar = () => {

    return (
        <header id="header" >
                
                <Link to="/"><img className='header-logo' src={ShareInLogo}/></Link>
                <h1 className='title'>ShareIn</h1>

        </header>
    )
}


export default HeaderBar