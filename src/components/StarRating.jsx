function StarRating({ value }) {
	return (
		<div className="starRating">
			{value >= 1 ? '⭐' : '☆'}
			{value >= 2 ? '⭐' : '☆'}
			{value >= 3 ? '⭐' : '☆'}
			{value >= 4 ? '⭐' : '☆'}
			{value >= 5 ? '⭐' : '☆'}
		</div>
	)
}

export default StarRating