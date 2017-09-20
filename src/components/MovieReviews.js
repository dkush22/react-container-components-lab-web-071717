import React, { Component } from 'react';

const MovieReviews = ({reviews}) => {
	return (
		<div className="review-list">
		{reviews.map(review => <div className="review">{review.display_title}</div>)}
		</div>
	)

}

MovieReviews.defaultProps = {
	reviews: []
}

export default MovieReviews