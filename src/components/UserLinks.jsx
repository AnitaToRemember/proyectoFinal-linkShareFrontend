import useListLinks from "../hooks/useListLinks";
import ErrorMessage from "./ErrorMessage";
import LinkList from "./LinkList";

export const UserLinks = ({ id }) => {
  const { links, loading, error, removePost } = useListLinks(id);

  if (loading) return <p>Loading links...</p>;
  if (error) return <ErrorMessage message={error} />;

  return <LinkList links={links} removePost={removePost} />;
};
