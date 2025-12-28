import React from "react";
import HomeHero from "./Sections/HomeHero";
import CustomerReview from "./Sections/CustomerReview";

function Home() {
  return (
    <div>
      <HomeHero />
      <CustomerReview />
      {/* Add your other sections here */}
    </div>
  );
}

export default Home;
