import { useEffect, useState } from "react"

function useFetch (url) {
				const [data, setData] = useState(null);
				const [loading, setLoading] = useState(true);
				const [error, setError] = useState(null);
			
				useEffect(() => {
					const loadData = async () => {
						try {
							const res = await fetch(url);
							if (!res.ok) {
								throw new Error('Network response was not ok');
							}
							const json = await res.json();
							setData(json);
							setLoading(false);
						} catch (error) {
							setError(error);
							setLoading(false);
						}
					};
			
					loadData();
				}, [url]);
			
				return { data, loading, error };
			}
			
export default useFetch