import React from "react";
import CustomerReviewCardSlider from "../../../components/CustomerReviewCard/CustomerReviewCardSlider";
import "./CustomerReview.css";

function CustomerReview() {
  return (
    <div className="customer-review-section">
      <div className="customer-review-container">
        <h2 className="section-title">
          OUR <span className="highlight">CUSTOMERS</span>
        </h2>
        <CustomerReviewCardSlider />
      </div>
    </div>
  );
}

export default CustomerReview;
