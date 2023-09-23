import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import UserLinks from "../components/UserLinks";
import "../components/MyLinks.css"

function MyLinks() { 
	const { user } = useContext(AuthContext);
		return (
				<div className="all-links">
						<h2 className="user-title">Links posted by: {user.username}</h2>
						<UserLinks id={user.id} />
							</div>
	)
}
export default MyLinks

