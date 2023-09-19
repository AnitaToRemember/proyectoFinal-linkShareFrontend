import { useState, useEffect } from "react"
import EachLinkPost from "./EachLinkPost"
import '../components/Auth.css'
import '../components/ListAllLinks.css'
import StarRating from "./StarRating"
import useListLinks from "../hooks/useListLinks"
import { Link } from "react-router-dom"

function ListAllLinks() {
    const [selected, setSelected] = useState("")
    const { links, Loading, error } = useListLinks()
    useEffect(() => {
        if (error) {
            
            // Handle the error here (e.g., show an error message).
            console.error("Error fetching links:", error)
            
        }
    }, [ error ]);

    if (Loading) {
        return <h2>Loading...</h2>
    }
    
    if (!links || !Array.isArray(links.links) || links.links.length === 0) {
        return <h2>No links available.</h2>;
    }
    return (
        <div className="list-all-links">
            {links.links.map((link) => (
                <div
                    key={link.id}
                    onClick={() => setSelected(link.id)}
                    
                >
                    <div className="link-post">
                        <h2 className="title">{link.title}</h2>
                        <Link to={link.url} className="url"> URL: {link.url}</Link>
                        <p className="description">Description: {link.description}</p>
                        <span className="username">{link.username}</span>
                        <span className="votes"><StarRating value= {link.votes}></StarRating></span> 
                        <Link to={`/links/${link.id}`} className="date">Posted on: {new Date(link.createdAt).toLocaleString()}</Link>
                        <p className="date">{link.id}</p>
                    </div>
                </div>
            ))}
            {selected && <EachLinkPost id={selected} />}
        </div>
    )
}

export default ListAllLinks
