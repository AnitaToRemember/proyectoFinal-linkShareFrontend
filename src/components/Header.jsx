import ShareInLogo from '../assets/ShareInLogo.png'
import useScroll  from '../hooks/useScroll'
import '../components/Header.css'
const Header = () => {

    const scroll = useScroll()
    const atTop = scroll === 0

    return (
        <header id="header" className={atTop ? 'top' : 'not-top'}>
            <img className='header-logo' src={ShareInLogo} />
            <h1 className='title'>ShareIn</h1>
        </header>
    )
}


export default Header