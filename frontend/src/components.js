import React, { useState } from 'react';

// Navigation Component
export const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'sell', label: 'Sell Your Home' },
    { id: 'buyers', label: 'For Buyers' },
    { id: 'properties', label: 'Properties' },
    { id: 'calculators', label: 'Calculators' },
    { id: 'blog', label: 'Blog' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="https://i.postimg.cc/SnKZ5X4Y/Adobe-Express-file.png" 
              alt="WillowBrook Real Estate Group Logo"
              className="h-16 w-auto"
              style={{ objectFit: 'contain', aspectRatio: 'auto' }}
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-200 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <div className="flex items-center px-3 py-2 mb-2 border-b border-gray-200">
                <img 
                  src="https://i.postimg.cc/SnKZ5X4Y/Adobe-Express-file.png" 
                  alt="WillowBrook Real Estate Group Logo"
                  className="h-10 w-auto"
                  style={{ objectFit: 'contain', aspectRatio: 'auto' }}
                />
                <span className="text-sm font-semibold text-gray-700">WillowBrook</span>
              </div>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    currentPage === item.id
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section Component
export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image */}
      <div className="absolute inset-0">
        <div 
          className="hero-background animate-slow-float"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1584385971010-71c147ba5dbd')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        {/* Tech Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-orange-900/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-premium-large mb-6 leading-tight">
          We Buy Houses Fast for Cash in Indianapolis
        </h1>
        <p className="text-premium-subtitle mb-4 text-gray-200">
          No Repairs. No Fees. Close in 7 Days.
        </p>
        <button 
          onClick={() => document.getElementById('sell-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          Get a Cash Offer
        </button>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl font-bold text-orange-400">100%</div>
            <div className="text-lg text-gray-200">Cash Offers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl font-bold text-orange-400">7</div>
            <div className="text-lg text-gray-200">Days Average Close</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl font-bold text-orange-400">24hr</div>
            <div className="text-lg text-gray-200">Response Time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Services Section Component
export const ServicesSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Indianapolis Home Buying Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We make selling your house simple, fast, and stress-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="relative overflow-hidden rounded-lg mb-6">
              <img 
                src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg"
                alt="Property Evaluation"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Submit Your Property</h3>
            <p className="text-gray-600">
              Tell us about your property through our simple online form or give us a call.
            </p>
          </div>

          <div className="text-center group">
            <div className="relative overflow-hidden rounded-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11"
                alt="Cash Offer"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Receive Cash Offer</h3>
            <p className="text-gray-600">
              Get a fair, no-obligation cash offer within 24 hours. No repairs needed.
            </p>
          </div>

          <div className="text-center group">
            <div className="relative overflow-hidden rounded-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
                alt="Quick Closing"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Close on Your Timeline</h3>
            <p className="text-gray-600">
              Choose your closing date. We can close in as little as 7 days or wait until you're ready.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Trust Badges Component - Updated
export const TrustBadges = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Why Choose WillowBrook?</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🏠</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Local Indianapolis Focus</h4>
                <p className="text-gray-600">
                  WillowBrook Real Estate Group is proudly based in Indianapolis. We're committed to building strong relationships here — one homeowner at a time.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Transparent & Fair</h4>
                <p className="text-gray-600">
                  No pressure. No hidden fees. Just honest, fair cash offers you can feel good about.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl mb-4">📊</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Proven Strategies</h4>
                <p className="text-gray-600">
                  We use proven real estate investment strategies tailored for the Indianapolis market — and we're here to guide you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Lead Form Component - Updated with functional email
export const LeadForm = ({ title, subtitle, fields, buttonText, onSubmit, formType = "general" }) => {
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Add form type to the data
      const submissionData = {
        ...formData,
        formType: formType,
        submissionDate: new Date().toLocaleString(),
        website: 'WillowBrook Real Estate Group'
      };

      // Use Formspree for form handling
      const response = await fetch('https://formspree.io/f/xldekwko', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({});
        if (onSubmit) onSubmit(submissionData);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="bg-slate-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-300">{subtitle}</p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fields.map((field) => (
                <div key={field.name} className={field.fullWidth ? 'md:col-span-2' : ''}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      name={field.name}
                      placeholder={field.placeholder}
                      rows={4}
                      value={formData[field.name] || ''}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      onChange={handleChange}
                      required
                    />
                  ) : field.type === 'select' ? (
                    <select
                      name={field.name}
                      value={formData[field.name] || ''}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select...</option>
                      {field.options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ''}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      onChange={handleChange}
                      required
                    />
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-orange-500 hover:bg-orange-600 text-white'
                }`}
              >
                {isSubmitting ? 'Submitting...' : buttonText}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg text-center">
                <p className="text-green-800 font-semibold">✅ Thank you! We'll contact you within 24 hours.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg text-center">
                <p className="text-red-800 font-semibold">❌ Something went wrong. Please try again or call us at (317) 555-0199.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="https://i.postimg.cc/SnKZ5X4Y/Adobe-Express-file.png" 
                alt="WillowBrook Real Estate Group Logo"
                className="h-12 w-auto mr-3"
                style={{ objectFit: 'contain', aspectRatio: 'auto' }}
              />
              <h3 className="text-2xl font-bold">WillowBrook Real Estate Group</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Professional home buyers and investors helping Indianapolis homeowners sell quickly and investors find discounted properties.
            </p>
            <p className="text-gray-400 text-sm">
              We are not licensed real estate agents. We are professional home buyers and investors. All transactions are handled legally and with full transparency.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 contact@willowbrookgroup.com</p>
              <p>📞 (317) 555-0199</p>
              <p>📍 Serving Greater Indianapolis</p>
              <p className="text-sm text-gray-400">Mobile service - We come to you!</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-orange-400">Privacy Policy</a>
              <a href="#" className="block text-gray-300 hover:text-orange-400">Terms of Service</a>
              <a href="#" className="block text-gray-300 hover:text-orange-400">Legal Disclaimer</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 WillowBrook Real Estate Group. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-orange-400">
              <span className="sr-only">Facebook</span>
              📘
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400">
              <span className="sr-only">Instagram</span>
              📷
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400">
              <span className="sr-only">LinkedIn</span>
              💼
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};