import {Auth} from '../components/Auth'
import ListAllLinks from '../components/ListAllLinks'
import '../components/Auth.css'
import'../components/AllLinks.css'
import NewLink from '../components/NewLink'


function HomePage() {

return (
    <main>
        <header>
            <Auth />
        </header>
        <div>
            <NewLink />
        <ListAllLinks />
        </div>
    </main>
    )
}

export default HomePage