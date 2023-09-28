import { useEffect, useState } from "react";
import LinkPost from "../components/LinkPost";
import "../styles/pages/FilterPage.css"; 
import Auth from '../components/Auth'
import { utilitiesServices } from "../services";

function FilterPage() {
  const [sortBy, setSortBy] = useState("date"); 
  const [keyword, setKeyword] = useState(""); 
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchFilteredPosts() {
      setLoading(true);
      try {
        const data = await utilitiesServices.filterService(sortBy, keyword); 
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
    <div className="filter-container"> 
    <header>
					<Auth />
			</header>
      <h2 className="filter-title">Filter Posts</h2>
      <div className="filter-select-container"> 
        <label htmlFor="sortBy" className="filter-label">Sort by:</label>
        <select
          id="sortBy"
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
          className="filter-select"
        >
          <option value="date">Date</option>
          <option value="votes">Rating</option>
        </select>
      </div>
      <div className="filter-input-container"> 
        <label htmlFor="keyword" className="filter-label">Filter by Keyword:</label>
        <input
          type="text"
          id="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="filter-input" 
        />
      </div>

      {loading ? (
        <p className="filter-loading">Loading...</p> 
      ) : (
        <ul className="filter-post-list">
          {filteredPosts.map((link) => (
            <li key={link.id} className="filter-post-item"> 
              <LinkPost link={link} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilterPage;
