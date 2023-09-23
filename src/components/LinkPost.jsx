import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import useDeleteLink from "../hooks/useDeleteLink";
import StarRating from "./StarRating";
import "./LinkPost.css"

function LinkPost ({ link, removeLink }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { deleteLink } = useDeleteLink();
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
          {link.username}
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

        By <Link to={`/user/${link.user}`}>
          {link.email}
        </Link> 

        on{" "} <Link to={`/link/${link.linkId}`}>
          {new Date(link.createdAt).toLocaleString()}
        </Link>

      </div>

      {user && user.id !==  link.id ? (
        <section>
          <button onClick={handleDeleteClick}>Delete link 🗑️</button>
          {error ? <p>{error}</p> : null}
        </section>
      ) : ""}
    </article>
  );
}


export default LinkPost