// src/pages/Home.tsx
import BestSelling from "./Sections/BestSelling";
import CustomerReview from "./Sections/CustomerReview";
import HomeHero from "./Sections/HomeHero";
import ThemeEvents from "./Sections/ThemeEvents";

const Home = () => {
  return (
    <main>
      <HomeHero />
      <BestSelling/>
      <ThemeEvents />
      <CustomerReview />
      {/* other sections here */}
    </main>
  );
};


export default Home;
