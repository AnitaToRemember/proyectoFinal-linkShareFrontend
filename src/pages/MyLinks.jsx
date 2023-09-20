import { useParams } from "react-router-dom"
import useUser from "../hooks/useUser"
import Loading from "../components/Loading"
import { UserLinks } from "../components/UserLinks"
import ErrorMessage from "../components/ErrorMessage"

function MyLinks() { 
	const { id } = useParams()
	const { user, loading, error } = useUser(id)

	if (loading) return <Loading />
	if (error) return <ErrorMessage message={error} />

		return (
				<div className="all-links">
						<h1>My links</h1>
						<h2>User {user.email}</h2>
						<section className="user-data">
							<p>User id: {user.id}</p>
							<p>Registered on {new Date(user.createdAt).toLocaleString()}</p>
						</section>
						<UserLinks id={user.id} />
							</div>
	)
}
export default MyLinks

