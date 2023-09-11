import useFetch from "./useFetch"

// Inside useLinks.js
export const useLinks = () => {
    const { data, error } = useFetch('http://localhost:8000/links')
    
    if (error) {
        throw new Error(`Error fetching links: ${error.message}`)
    }
    
    return data || []
}
