import {Link} from 'react-router-dom'

const NotFoundPage = () => {
    return <section>
        <h1>Page not found</h1>
        <p><Link to="/"> Go to home page</Link></p>
    </section>
}

export default NotFoundPage