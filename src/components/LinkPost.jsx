import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import StarRating from "./StarRating";
import "../styles/components/LinkPost.css"
import useDeleteLink from "../hooks/useDeleteLink";

function LinkPost ({ link, removeLink }) {
  
  const navigate = useNavigate();
  const { user, token} = useContext(AuthContext);
  const { deleteLink, linkId} = useDeleteLink();
  const [error, setError] = useState("");
  const handleDeleteClick = async () => {
    if (window.confirm("Are you sure?")) {
      try {
        await deleteLink(link.id, () => {
          if(removeLink) {
            removeLink(link.id)
          }
        navigate("/home");
        })
      } catch (error) {
        setError(error.message);
      }
    }
  };
  
  return (
    <article className="list-all-links">
      <div className="link-post">
        
        <h2 className="title">
          {link.title}
        </h2>

        <Link to={link.url} className="url"> 
        URL: {link.url}
        </Link>

        <p className="description">
          Description: {link.description}
        </p>

        <span className="username">
          @{link.username}
        </span>
        
        <span className="votes">
          <StarRating value= {link.votes}/>
        </span> 

        <Link to={`/links/${link.id}`} className="date">
          Posted on: {new Date(link.createdAt).toLocaleString()}
        </Link>

        <p className="date">
          {link.id}
        </p>
        
        {token && user && link && user.id !== link.id ? (
          <section>
            <button onClick={handleDeleteClick}>Delete link 🗑️</button>
            {error && <p>{error}</p>}
          </section>
        ) : null}

      </div>
    </article>
  );
}


export default LinkPost