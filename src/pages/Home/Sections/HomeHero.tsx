// src/pages/Home/Sections/HomeHero.tsx
import Button from '../../../components/Button';

const HomeHero = () => {
  return (
    <section className="w-full ">
      {/* Outer margin from all sides */}
      <div className="m-2 sm:m-3 lg:m-4">
        <div className="mx-auto w-full px-4 sm:px-8 lg:px-12 py-12 lg:py-20 flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-20">
          
          {/* Left: Text content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#4A2415]">
              Bring you Happiness<br />
              through a piece of cake
            </h1>

            <p className="text-base sm:text-lg text-[#6B4A38] max-w-2xl">
              We make different types of cakes, chocolate, soft cookies, cheesecake pie or anything you want.
            </p>

            <div>
              <Button
                size="lg"
                navigateTo="/menus"
                className="mt-4 px-10 py-3 text-base sm:text-lg"
              >
                See all Menus
              </Button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className=" rounded-sm max-w-lg w-full">
              <img
                src="/assets/HomeHero.png"
                alt="Colorful cake illustration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
