import {Auth} from '../components/Auth'
import NewLink from '../components/NewLink'
import useListLinks from '../hooks/useListLinks'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import Loading from '../components/Loading'
import ErrorMessage from '../components/ErrorMessage'
import LinkPost from '../components/LinkPost'


function HomePage() {
    const { links, error, loading, addLink, removeLink } = useListLinks()
    const { user } = useContext(AuthContext)

    if (loading) return <Loading />
    if (error) return <ErrorMessage message={error} />

return (
    <main>
        <header>
            <Auth />
        </header>
        <section>
            {user ? <NewLink addLink={addLink} /> : null}
            <h1>Latest tweets</h1>
                {links.map((link) => (
                    <LinkPost key={link.id} link={link} removeLink={removeLink} />
            ))}
        </section>
    </main>
    )
}

export default HomePage
        
