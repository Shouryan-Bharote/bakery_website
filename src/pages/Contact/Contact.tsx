// src/pages/Contact/Contact.tsx
import React, { useState } from 'react';
import Button from '../../components/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-16 lg:py-20">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Illustration (Hidden on Mobile) */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <img
              src="/assets/contact/contact-illustration.png"
              alt="Bakery counter"
              className="w-full max-w-md lg:max-w-lg object-contain"
            />
          </div>

          {/* Right side - Form */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4A1D1F] mb-8 lg:mb-12 text-center">
              Contact Us ...
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border-2 border-[#2B1B12]/30 bg-white/50 text-[#2B1B12] placeholder:text-[#2B1B12]/50 focus:outline-none focus:border-[#4A1D1F] transition-colors"
                required
              />

              {/* Address Input */}
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border-2 border-[#2B1B12]/30 bg-white/50 text-[#2B1B12] placeholder:text-[#2B1B12]/50 focus:outline-none focus:border-[#4A1D1F] transition-colors"
                required
              />

              {/* Email Input */}
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border-2 border-[#2B1B12]/30 bg-white/50 text-[#2B1B12] placeholder:text-[#2B1B12]/50 focus:outline-none focus:border-[#4A1D1F] transition-colors"
                required
              />

              {/* Phone Input */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone No"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border-2 border-[#2B1B12]/30 bg-white/50 text-[#2B1B12] placeholder:text-[#2B1B12]/50 focus:outline-none focus:border-[#4A1D1F] transition-colors"
                required
              />

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                fullWidth
                className="!bg-[#4A1D1F] hover:!bg-[#5A2D2F] !mt-6"
              >
                Contact Us
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
