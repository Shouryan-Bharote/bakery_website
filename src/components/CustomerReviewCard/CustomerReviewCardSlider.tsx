import React, { useState, useEffect } from "react";
import CustomerReviewCard from "./CustomerReviewCard";
import "./CustomerReviewCardSlider.css";

interface Review {
  id: number;
  name: string;
  location: string;
  review: string;
  image: string;
  rating?: number;
}

function CustomerReviewCardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Sample customer reviews data with placeholder images
  const reviews: Review[] = [
    {
      id: 1,
      name: "Blanka P.",
      location: "Bratislava, Slovakia",
      review:
        "The cakes from this bakery are absolutely amazing! I ordered a chocolate cake for my birthday and everyone loved it. The presentation was beautiful and the taste was even better. Highly recommend their services.",
      image: "https://i.pravatar.cc/150?img=1",
      rating: 5,
    },
    {
      id: 2,
      name: "Jakub S.",
      location: "Bratislava, Slovakia",
      review:
        "Best bakery I've ever tried! Their pastries are always fresh and delicious. The staff is very friendly and helpful. I'm a regular customer now and will continue ordering from them",
      image: "https://i.pravatar.cc/150?img=2",
      rating: 5,
    },
    {
      id: 3,
      name: "Maria K.",
      location: "Prague, Czech Republic",
      review:
        "Excellent quality cakes and wonderful customer service! They delivered exactly what I ordered and on time. The cake was moist, flavorful, and beautifully decorated. Will definitely order again!.",
      image: "https://i.pravatar.cc/150?img=3",
      rating: 5,
    },
    {
      id: 4,
      name: "John D.",
      location: "Vienna, Austria",
      review:
        "Outstanding bakery with great variety! I've ordered multiple times for different occasions and they never disappoint. The cakes taste incredible and look professional. Five stars without hesitation!.",
      image: "https://i.pravatar.cc/150?img=4",
      rating: 5,
    },
  ];

  // Responsive cards display
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsToShow(1);
      } else if (window.innerWidth <= 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow >= reviews.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(reviews.length - cardsToShow, 0) : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="customer-review-slider">
      <div className="slider-wrapper">
        <button
          className="slider-btn prev"
          onClick={prevSlide}
          aria-label="Previous reviews"
        >
          ‹
        </button>

        <div className="slider-container">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="slider-item"
                style={{ minWidth: `${100 / cardsToShow}%` }}
              >
                <CustomerReviewCard
                  name={review.name}
                  location={review.location}
                  review={review.review}
                  image={review.image}
                  rating={review.rating}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className="slider-btn next"
          onClick={nextSlide}
          aria-label="Next reviews"
        >
          ›
        </button>
      </div>

      <div className="slider-dots">
        {Array.from({
          length: Math.max(reviews.length - cardsToShow + 1, 1),
        }).map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomerReviewCardSlider;
