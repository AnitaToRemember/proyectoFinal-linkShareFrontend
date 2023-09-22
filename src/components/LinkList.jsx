import LinkPost from "./LinkPost";

function LinkList ({ links, removePost }) {
  return links.length ? (
    <ul className="link-list">
      {links.map((link) => {
        return (
          <li key={link.id}>
            <LinkPost link={link} removePost={removePost} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>There are no links...</p>
  );
}

export default LinkList