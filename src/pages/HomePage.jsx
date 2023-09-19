import {Auth} from '../components/Auth'
import ListAllLinks from '../components/ListAllLinks'
import '../components/Auth.css'
import'../components/AllLinks.css'
import NewLink from '../components/NewLink'
import useListLinks from '../hooks/useListLinks'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import Loading from '../components/Loading'
import ErrorMessage from '../components/ErrorMessage'


function HomePage() {
    const { links, error, loading, addLink, removeLink } = useListLinks();
    const { user } = useContext(AuthContext);

    if (loading) return <Loading />;
    if (error) return <ErrorMessage message={error} />;
return (
    <main>
        <header>
            <Auth />
        </header>
        <div>
        {user ? <NewLink addLink={addLink} /> : null}        
        <ListAllLinks links={links} removeTweet={removeLink} />
        </div>
    </main>
    )
}

export default HomePage