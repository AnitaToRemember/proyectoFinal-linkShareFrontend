import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import LinkPost from "./LinkPost";

function LinkList ({ links, removeLink }) {
  const { user } = useContext(AuthContext);

  const userLinks = links.filter((link) => user && link.userId === user.id);

  return userLinks.length ? (
    <ul className="link-list">
      {userLinks.map((link) => {
        return (
          <li key={link.id} className="user-link">
            <LinkPost link={link} removeLink={removeLink} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>There are no links...</p>
  );
}

export default LinkList;
