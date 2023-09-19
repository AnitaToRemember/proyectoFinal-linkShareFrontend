import { useState, useEffect } from "react";
import { getAllLinksService } from "../services";

function useListLinks() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {

        const loadPosts = async () => {
            try{
                setLoading(true)

                const data = await getAllLinksService()

                setPosts(data)

            }
            catch(error){
                setError(error.message)
                console.error("Error in useListLinks:", error);
            }
            
            finally{
                setLoading(false)
            }
        }

        loadPosts()
    }, [])
    
    return {posts, loading, error}
}

export default useListLinks
