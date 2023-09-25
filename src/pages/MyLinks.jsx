import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import UserLinks from "../components/UserLinks";
import "../components/MyLinks.css"
import { Auth } from "../components/Auth";

function MyLinks() { 
	const { user, token } = useContext(AuthContext);
		return (
			<div>		
				<header>
            <Auth />
        </header>
				<div className="all-links">
					<h2 className="user-title">Links posted by: {user.username}</h2>
						{user ? <UserLinks token={token} /> : (
				<p>Please log in to see your links.</p>
				)}
				
							</div>
							</div>	
	)
}
export default MyLinks

