import { useState, useEffect } from "react"
import { getAllLinksService, getUserLinksService } from "../services"

function useListLinks(id) {
		const [links, setLinks] = useState([])
		const [loading, setLoading] = useState(false)
		const [error, setError] = useState("")

		useEffect(() => {
				const loadLinks = async () => {
					try {
						setLoading(true);
						const data = id
							? await getUserLinksService(id)
							: await getAllLinksService()
		
						setLinks(data.links)
					} catch (error) {
						setError(error.message)
					} finally {
						setLoading(false)
					}
				};
		
				loadLinks();
			}, [id])
		
			const addLink = (data) => {
				setLinks((prevLinks) => [data, ...prevLinks]);
			};
		
			const removeLink = (id) => {
				console.log('Removing link with id:', id);
				setLinks((prevLinks) => prevLinks.filter((link) => link.id !== id));
			};
		
			return { links, error, loading, addLink, removeLink }
		}

export default useListLinks
