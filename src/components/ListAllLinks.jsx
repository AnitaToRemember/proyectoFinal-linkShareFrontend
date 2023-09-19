import { useState, useEffect } from "react";
import EachLinkPost from "./EachLinkPost";
import '../components/AllLinks.css'
import StarRating from "./StarRating";
import useListLinks from "../hooks/useListLinks";

function ListAllLinks() {
    const [selected, setSelected] = useState("")
    const { posts, Loading, error } = useListLinks()

    useEffect(() => {
        if (error) {
            
            // Handle the error here (e.g., show an error message).
            console.error("Error fetching links:", error)
            
        }
    }, [ error ]);

    if (Loading) {
        return <h2>Loading...</h2>
    }
    
    if (!Array.isArray(posts.links) || posts.links.length === 0) {
        return <h2>No links available.</h2>;
    }

    return (
        <div className="list-all-links">
            {posts.links.map((link) => (
                
                <div
                    key={link.id}
                    onClick={() => setSelected(link.id)}
                    
                >
                    <div className="link-post">
                        <h2 className="title">{link.title}</h2>
                        <a className="url">{link.url}</a>
                        <p className="description">{link.description}</p>
                        <span className="username">{link.username}</span>
                        <span className="votes"><StarRating value= {link.votes}></StarRating></span> 
                        <span className="date">{link.createdAt}</span>
                        <p className="date">{link.id}</p>
                    </div>
                </div>
            ))}
            {selected && <EachLinkPost id={selected} />}
        </div>
    )
}

export default ListAllLinks
