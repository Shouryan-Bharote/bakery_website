import BestSelling from "./Sections/BestSelling";
import HomeHero from "./Sections/HomeHero";
import ThemeEvents from "./Sections/ThemeEvents";
import CustomerReview from "./Sections/CustomerReview";

function Home() {
  return (
    <main>
      <HomeHero />
      <BestSelling/>
      <ThemeEvents />
      <CustomerReview />
      {/* Add your other sections here */}
    </main>
  );
}


export default Home;
