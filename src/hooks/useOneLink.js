import { useState, useEffect } from "react";
import { getSingleLinkService } from "../services";

function useOneLink(id) {
    const [post, setPost] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {

        const loadPost = async () => {
            try{
                setLoading(true)

                const data = await getSingleLinkService(id)

                setPost(data)

            }
            catch(error){
                setError(error.message)
            }

            finally{
                setLoading(false)
            }
        }

        loadPost()
    }, [id])
    
    return {post, loading, error}
}

export default useOneLink
