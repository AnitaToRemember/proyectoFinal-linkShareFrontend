import useOneLink from "../hooks/useOneLink"
import StarRating from "./StarRating"

function EachLinkPost ({id}) {
    const link = useOneLink(id)

    if (!link) return  <h2>Loading...</h2>

    return(
        <div className="link-post">
                        <h2 className="title">{link.title}</h2>
                        <a className="url">{link.url}</a>
                        <p className="description">{link.description}</p>
                        <span className="username">{link.username}</span>
                        <span className="votes"><StarRating value= {link.votes}></StarRating></span> 
                        <span className="date">{link.createdAt}</span>
                    </div>
    )
}

export default EachLinkPost 