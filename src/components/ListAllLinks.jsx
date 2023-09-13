import { useState, useEffect } from "react";
import { useLinks } from "../hooks/api";
import EachLinkPost from "./EachLinkPost";

function ListAllLinks() {
    const [selected, setSelected] = useState("")
    const { linksArray, isLoading, error } = useLinks()
    console.log('p', linksArray);

    useEffect(() => {
        console.log('data in ListAllLinks:', linksArray) // Log the data here
        
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
                    {link.title}
                    {link.url}
                    {link.description}
                    {link.username}
                    {link.votes}
                    {link.createdAt}
                </div>
            ))}
            {selected && <EachLinkPost id={selected} />}
        </div>
    )
}

export default ListAllLinks
