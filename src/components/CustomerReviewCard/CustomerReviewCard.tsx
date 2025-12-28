import React from "react";
import "./CustomerReviewCard.css";

interface CustomerReviewCardProps {
  name: string;
  location: string;
  review: string;
  image: string;
  rating?: number;
}

function CustomerReviewCard({
  name,
  location,
  review,
  image,
  rating = 5,
}: CustomerReviewCardProps) {
  return (
    <div className="customer-review-card">
      <div className="card-content">
        <div className="customer-info">
          <img src={image} alt={name} className="customer-image" />
          <div className="customer-details">
            <h3 className="customer-name">{name}</h3>
            <p className="customer-location">{location}</p>
          </div>
        </div>
        <p className="customer-review">{review}</p>
        {rating && (
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={index < rating ? "star filled" : "star"}
              >
                ★
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomerReviewCard;
