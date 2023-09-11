import {useLinks} from "../hooks/api"

function EachLinkPost ({id}) {
    const linksPosted = useLinks(id)

    if (!linksPosted) return  <h2>Loading...</h2>

    return(
        <div className="link-post">
            <h2>#{linksPosted.title}: {id}</h2>
            <span>{linksPosted.url}</span>
            <p>{linksPosted.description}</p>
        </div>
    )
}

export default EachLinkPost 