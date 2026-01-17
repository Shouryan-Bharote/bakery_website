// src/pages/About/About.tsx
import AboutHero from './Sections/AboutHero';
import Newsletter from './Sections/Newsletter';
import OurChefs from './Sections/OurChefs';
import WhatWeDo from './Sections/WhatWeDo';

const About = () => {
  return (
    <main>
      <AboutHero />
      <WhatWeDo />
      <OurChefs />
      <Newsletter />
      {/* Other sections will go here */}
    </main>
  );
};

export default About;
