// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Categories from "../pages/Categories/Categories";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

// Theme Events Pages
import Birthdays from "../pages/ThemeEvents/BirthDays";
import Anniversaries from "../pages/ThemeEvents/Anniversaries";
import SpecialDays from "../pages/ThemeEvents/SpecialDays";

// Product Category Pages
import Cakes from "../pages/Categories/ProductCategories/Cakes/Cakes";
import Pastries from "../pages/Categories/ProductCategories/Pastries/Pastries";
import Brownies from "../pages/Categories/ProductCategories/Brownies/Brownies";
import Cookies from "../pages/Categories/ProductCategories/Cookies/Cookies";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Theme Events Pages */}
      <Route path="/theme-events/birthdays" element={<Birthdays />} />
      <Route path="/theme-events/anniversaries" element={<Anniversaries />} />
      <Route path="/theme-events/special-days" element={<SpecialDays />} />

      {/* Product Category Pages */}
      <Route path="/categories/cakes" element={<Cakes />} />
      {/* Future routes - uncomment when pages are created */}
      <Route path="/categories/pastries" element={<Pastries />} />
      <Route path="/categories/brownies" element={<Brownies />} />
      <Route path="/categories/cookies" element={<Cookies />} />

      {/* 404 Not Found - Optional */}
      <Route path="*" element={<div className="min-h-screen flex items-center justify-center bg-[#FFF5DC]">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-[#4A1D1F] mb-4">404</h1>
          <p className="text-xl text-[#6B4A38] mb-8">Page not found</p>
          <a href="/" className="bg-[#5C3D2E] text-[#F5E6D3] px-8 py-3 rounded-lg hover:bg-[#6B4A38] transition-colors">
            Go Home
          </a>
        </div>
      </div>} />
    </Routes>
  );
};

export default AppRoutes;
