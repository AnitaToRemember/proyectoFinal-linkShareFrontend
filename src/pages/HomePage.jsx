import Auth from '../components/Auth'
import HeaderBar from '../components/HeaderBar'
import ListAllLinks from '../components/ListAllLinks'
import NavigationBar from '../components/NavigationBar'



function HomePage() {

return (
    <main>
        <HeaderBar>
            <Auth /> 
       </HeaderBar>
        <ListAllLinks />
        <NavigationBar />
        <Auth />

    </main>
    )
}

export default HomePage