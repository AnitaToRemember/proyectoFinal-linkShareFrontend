import { UserLinks } from "../components/UserLinks"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function MyLinks() { 
	const { user } = useContext(AuthContext);

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

