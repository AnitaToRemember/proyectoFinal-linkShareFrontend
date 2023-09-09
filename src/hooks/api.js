import useFetch from "./useFetch"

export const useLinks = () => {
    const data = useFetch('http://localhost:8000/links');
    return data || []; // If data is null, return an empty array
}
