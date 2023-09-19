import {Auth} from '../components/Auth'
import ListAllLinks from '../components/ListAllLinks'
import '../components/Auth.css'
import'../components/AllLinks.css'


function HomePage() {

return (
    <main>
        <Auth />
        <ListAllLinks />
    </main>
    )
}

export default HomePage