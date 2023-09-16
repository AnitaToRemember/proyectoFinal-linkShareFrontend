import { useState, useEffect } from "react";
import { useLinks } from "../hooks/api";
import EachLinkPost from "./EachLinkPost";
import '../components/AllLinks.css'

function ListAllLinks() {
    const [selected, setSelected] = useState("")
    const { linksArray, isLoading, error } = useLinks()
    console.log('p', linksArray);

    useEffect(() => {
        if (error) {
            // Handle the error here (e.g., show an error message).
            console.error("Error fetching links:", error)
        }
    }, [linksArray, error]);
    console.log('manu', linksArray);

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (!linksArray || !Array.isArray(linksArray)) {
        return <h2>No links available.</h2>
    }

    return (
        <div className="list-all-links">
            {linksArray.map((link) => (
                <div
                    key={link.id}
                    onClick={() => setSelected(link.id)}
                >
                    <div className="link-post">
                        <h2>{link.title}</h2>
                        <url>{link.url}</url>
                        <p>{link.description}</p>
                        <span>{link.username}</span> ||
                        <span>{link.votes}</span> || 
                        <span>{link.createdAt}</span>
                    </div>
                </div>
            ))}
            {selected && <EachLinkPost id={selected} />}
        </div>
    )
}

export default ListAllLinks
