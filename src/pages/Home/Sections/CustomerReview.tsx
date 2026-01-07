import React from "react";
import CustomerReviewCardSlider from "../../../components/CustomerReviewCard/CustomerReviewCardSlider";
import "./CustomerReview.css";


function CustomerReview() {
  return (
    <div className="customer-review-section">
      <div className="customer-review-container">
        {/* Section Title with dots before and after */}
        <div className="text-center mb-12">
          <h2 className="section-title-with-dots">
            <span className="dots-decoration">···············</span>
            <span className="title-our">OUR</span>
            <span className="title-customers">CUSTOMERS</span>
            <span className="dots-decoration">···············</span>
          </h2>
        </div>
        
        <CustomerReviewCardSlider />
      </div>
    </div>
  );
}


export default CustomerReview;
