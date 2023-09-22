import { useParams } from "react-router"
import useOneLink from "../hooks/useOneLink"
import LinkPost from "../components/LinkPost"
import Loading from "../components/Loading"
import ErrorMessage from "../components/ErrorMessage"

function LinkPage ()  {
    const {id} = useParams()
    const {link, loading, error} =useOneLink(id)

    if (loading) return <Loading />;
    if (error) return <ErrorMessage message={error} />;
    
    return (
        <section>
        <h1>Tweet</h1>
        <LinkPost link={link} />
        </section>

    )
}


export default LinkPage