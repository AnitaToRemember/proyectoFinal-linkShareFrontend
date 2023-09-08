import { useLinks } from "./hooks/api"

function ListAllLinks() {
    const linksPosted = useLinks()
    
    return (
        <div id="posts">
            {linksPosted.map(linkPost => 
                <div className="linksPost" key={linkPost.id}>
                    {linkPost.title}
                    <img src={linkPost.image}/>
                </div>
            )}
        </div>
    )
}

export default ListAllLinks