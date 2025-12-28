// src/pages/Home.tsx
import BestSelling from "./Sections/BestSelling";
import HomeHero from "./Sections/HomeHero";
import ThemeEvents from "./Sections/ThemeEvents";

const Home = () => {
  return (
    <>
      <HomeHero />
      <BestSelling/>
      <ThemeEvents />
      {/* other sections here */}
    </>
  );
};

export default Home;
