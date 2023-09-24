import useListLinks from "../hooks/useListLinks";
import ErrorMessage from "./ErrorMessage";
import LinkList from "./LinkList";

function UserLinks ({ token }) {
  const { links, loading, error, removeLink } = useListLinks(token);

  if (loading) return <p>Loading links...</p>;
  if (error) return <ErrorMessage message={error} />;

  return <LinkList links={links} removeLink={removeLink} />;
}

export default UserLinks
