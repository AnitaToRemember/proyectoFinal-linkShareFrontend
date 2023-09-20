import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { deleteLinkService } from "../services";
import StarRating from "./StarRating";
import "./LinkPost.css"

function LinkPost ({ link, removeLink }) {
  const navigate = useNavigate();
  const { token, user } = useContext(AuthContext);
  const [error, setError] = useState("");

  const deleteLink = async (linkId) => {
    try {
      await deleteLinkService({ linkId, token });

      if (removeLink) {
        removeLink(linkId);
      } else {
        navigate("/home");
      }
    } catch (error) {
      setError(error.message);
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

      {user && user.id === link.id ? (
        <section>
          <button
            onClick={() => {
              if (window.confirm("Are you sure?")) deleteLink(link.id);
            }}
          >
            Delete link 🗑️
          </button>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  )
}

export default LinkPost