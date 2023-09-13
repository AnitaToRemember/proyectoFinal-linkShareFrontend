import useFetch from "./useFetch";

export const useLinks = () => {
    const { data, error } = useFetch('http://localhost:8000/links')
    
    console.log('data:', data); // Log the data here

    if (error) {
        throw new Error(`Error fetching links: ${error.message}`)
    }
    
    // Access the 'links' array from the 'data' object or provide an empty array as a default value
    const linksArray = (data?.data?.links) || [];
    return {linksArray}
}
