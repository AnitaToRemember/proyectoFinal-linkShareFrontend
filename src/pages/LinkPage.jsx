import { useParams } from "react-router"
import useOneLink from "../hooks/useOneLink"
import EachLinkPost from "../components/EachLinkPost"

const LinkPage = () => {
    const {id} = useParams()

    const {post, loading, error} =useOneLink(id)

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>An error has ocurred</h2>
    }
    
    return (
        <section>
            <h2>here goes one link</h2>
            <EachLinkPost post={post}/>
        </section>

    )
}


export default LinkPage