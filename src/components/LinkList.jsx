import LinkPost from "./LinkPost";

function LinkList ({ links, removeLink }) {
  return links.length ? (
    <ul className="link-list">
      {links.map((link) => {
        return (
          <li key={link.id} className="user-link">
            <LinkPost link={link} removePost={removeLink} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>There are no links...</p>
  );
}

export default LinkList