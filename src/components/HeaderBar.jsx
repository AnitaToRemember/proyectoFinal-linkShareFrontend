import ShareInLogo from '../assets/ShareInLogo.png'
import '../components/Header.css'
const HeaderBar = () => {

    return (
        <header id="header" >
                <img className='header-logo' src={ShareInLogo} />
                <h1 className='title'>ShareIn</h1>

        </header>
    )
}


export default HeaderBar