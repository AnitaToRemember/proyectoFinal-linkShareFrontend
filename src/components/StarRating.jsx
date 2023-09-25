import { useState } from "react";
import { starRatingService } from "../services";

function StarRating({ value, linkId }) {
	const [hoveredValue, setHoveredValue] = useState(null);

  const handleStarClick = async (clickedValue) => {
    try {
      await starRatingService(clickedValue, linkId);
    } catch (error) {
      console.error('Error while voting:', error);
    }
  };

	return (
		<div className="starRating">
      {[1, 2, 3, 4, 5].map((starValue) => (
        <span
          key={starValue}
          onClick={() => handleStarClick(starValue)}
          onMouseEnter={() => setHoveredValue(starValue)}
          onMouseLeave={() => setHoveredValue(null)}
        >
          {starValue <= (hoveredValue || value) ? '⭐' : '☆'}
        </span>
      ))}
    </div>
  );
}

export default StarRating;
