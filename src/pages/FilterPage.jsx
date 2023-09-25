import { useEffect, useState } from "react";
import { filterService } from "../services";
import LinkPost from "../components/LinkPost";

function FilterPage() {
  const [sortBy, setSortBy] = useState("date"); // Default sorting option
  const [keyword, setKeyword] = useState(""); // Keyword for filtering
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch posts based on the selected sorting criteria when sortBy or keyword changes
    async function fetchFilteredPosts() {
      setLoading(true);
      try {
        const data = await filterService(sortBy, keyword); // Use filterService to fetch data
        setFilteredPosts(data.links);
      } catch (error) {
        console.error("Error fetching filtered posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFilteredPosts();
  }, [sortBy, keyword]);

  return (
    <div>
      <h2>Filter Posts</h2>
      <div>
        <label htmlFor="sortBy">Sort by:</label>
        <select
          id="sortBy"
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
        >
          <option value="date">Date</option>
          <option value="votes">Rating</option>
        </select>
      </div>
      <div>
        <label htmlFor="keyword">Filter by Keyword:</label>
        <input
          type="text"
          id="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {filteredPosts.map((link) => (
            <li key={link.id}>
              <LinkPost link={link} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilterPage;
