import React, { useState } from 'react';
import './App.css';
import { 
  Navigation, 
  HeroSection, 
  ServicesSection, 
  TrustBadges, 
  LeadForm, 
  Footer 
} from './components';

// Homepage Component
const Homepage = () => {
  const handleHeroForm = (formData) => {
    console.log('Hero form submitted:', formData);
    alert('Thank you! We will contact you within 24 hours with a cash offer.');
  };

  return (
    <div className="pt-16">
      <HeroSection />
      <ServicesSection />
      <TrustBadges />
      <LeadForm
        title="Get Your Cash Offer Today"
        subtitle="Fill out the form below and we'll contact you within 24 hours"
        fields={[
          { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
          { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(317) 555-0000' },
          { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
          { name: 'address', label: 'Property Address', type: 'text', placeholder: 'Enter your property address', fullWidth: true },
          { name: 'condition', label: 'Property Condition', type: 'textarea', placeholder: 'Describe the condition of your property...', fullWidth: true }
        ]}
        buttonText="Get My Cash Offer"
        onSubmit={handleHeroForm}
      />
    </div>
  );
};

// Sell Your Home Page
const SellYourHomePage = () => {
  const handleSellForm = (formData) => {
    console.log('Sell form submitted:', formData);
    alert('Thank you! We will contact you within 24 hours with a cash offer.');
  };

  return (
    <div className="pt-16">
      {/* Header Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Sell Your Indianapolis Home the Easy Way</h1>
          <p className="text-xl text-gray-300 mb-8">Skip the repairs, agents, and commissions.</p>
          
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Submit Your Property Info</h3>
              <p className="text-gray-300">Tell us about your house through our simple form</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Receive a Cash Offer Within 24 Hours</h3>
              <p className="text-gray-300">Get a fair, no-obligation offer quickly</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Close on Your Timeline</h3>
              <p className="text-gray-300">Pick your closing date, as fast as 7 days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-2">We Buy Homes in Any Condition</h3>
              <p className="text-gray-600">No repairs needed. We buy as-is.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">You Don't Pay Closing Costs</h3>
              <p className="text-gray-600">We cover all closing costs and fees.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Fast Process</h3>
              <p className="text-gray-600">Close in as little as 7 days.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2">Local Indianapolis Focus</h3>
              <p className="text-gray-600">We specialize in the Indianapolis metro area.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">No Real Estate Agents</h3>
              <p className="text-gray-600">Deal directly with us. No commissions.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2">Guaranteed Offer</h3>
              <p className="text-gray-600">Fair, honest cash offers every time.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Form */}
      <LeadForm
        title="Ready to Sell Your House?"
        subtitle="Get your no-obligation cash offer today"
        fields={[
          { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
          { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(317) 555-0000' },
          { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
          { name: 'address', label: 'Property Address', type: 'text', placeholder: 'Enter your property address', fullWidth: true },
          { 
            name: 'condition', 
            label: 'Property Condition', 
            type: 'select',
            options: ['Excellent', 'Good', 'Fair', 'Needs Work', 'Major Repairs Needed']
          }
        ]}
        buttonText="Get My Cash Offer Now"
        onSubmit={handleSellForm}
      />
    </div>
  );
};

// For Buyers Page
const ForBuyersPage = () => {
  const handleBuyerForm = (formData) => {
    console.log('Buyer form submitted:', formData);
    alert('Welcome to our buyer list! You\'ll receive emails as soon as new deals are available.');
  };

  return (
    <div className="pt-16">
      {/* Header Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Join Our Cash Buyer List</h1>
          <p className="text-xl text-gray-300 mb-8">Get access to off-market properties before anyone else.</p>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Our Buyer Program Works</h2>
            <p className="text-xl text-gray-600">Get first access to discounted investment properties in Indianapolis</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-2xl font-bold mb-4">Join Our List</h3>
              <p className="text-gray-600">Sign up with your investment criteria and budget range.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-2xl font-bold mb-4">Get Exclusive Deals</h3>
              <p className="text-gray-600">Receive emails about new properties that match your criteria.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-2xl font-bold mb-4">Purchase & Profit</h3>
              <p className="text-gray-600">Review deals and purchase the ones that fit your investment strategy.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits for Buyers */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Buyer Benefits</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">🎯 Off-Market Properties</h3>
              <p className="text-gray-600">Access properties not listed on MLS or public markets.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">💰 Below Market Prices</h3>
              <p className="text-gray-600">Properties priced for quick sale and investor returns.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">⚡ First Access</h3>
              <p className="text-gray-600">See new deals before they go to other investors.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">📊 Detailed Analysis</h3>
              <p className="text-gray-600">Get property details, comps, and investment projections.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Buyer Form */}
      <LeadForm
        title="Join the Buyer List Today"
        subtitle="Start receiving exclusive Indianapolis investment opportunities"
        fields={[
          { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
          { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
          { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(317) 555-0000' },
          { name: 'zipCodes', label: 'Target Zip Codes', type: 'text', placeholder: 'e.g. 46201, 46202, 46203' },
          { name: 'maxBudget', label: 'Maximum Budget', type: 'select', options: ['Under $50k', '$50k-$100k', '$100k-$200k', '$200k-$300k', '$300k+'] },
          { 
            name: 'propertyType', 
            label: 'Property Type Interested In', 
            type: 'select',
            options: ['Single Family', 'Duplex', 'Multi-Family', 'Condos', 'All Types']
          }
        ]}
        buttonText="Join Buyer List Now"
        onSubmit={handleBuyerForm}
      />
    </div>
  );
};

// Current Properties Page
const CurrentPropertiesPage = () => {
  const handleSubscribe = (formData) => {
    console.log('Subscribe form submitted:', formData);
    alert('Thank you! You\'ll be the first to know when new deals are posted.');
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Investment Properties</h1>
          <p className="text-xl text-gray-300">Exclusive off-market properties in Indianapolis</p>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-lg p-12 mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Coming Soon</h2>
            <p className="text-xl text-gray-600 mb-8">
              Exclusive off-market properties in Indianapolis will be available here soon.
            </p>
            
            {/* Preview Card */}
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden relative">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg"
                  alt="Property Preview"
                  className="w-full h-48 object-cover filter blur-sm"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold mb-2">🔒 LOCKED</div>
                    <div className="text-lg">Buyer Access Only</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Indianapolis Investment Property</h3>
                <p className="text-gray-600">Join our buyer list to access exclusive deals like this one.</p>
              </div>
            </div>
          </div>

          <LeadForm
            title="Be the First to Know"
            subtitle="Subscribe to be notified when new deals are posted"
            fields={[
              { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
              { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' }
            ]}
            buttonText="Subscribe for Updates"
            onSubmit={handleSubscribe}
          />
        </div>
      </div>
    </div>
  );
};

// About Us Page
const AboutUsPage = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">About WillowBrook Real Estate Group</h1>
          <p className="text-xl text-gray-300">Your trusted Indianapolis real estate professionals</p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                WillowBrook Real Estate Group is a local team of real estate professionals helping Indianapolis homeowners sell quickly and investors find discounted properties.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Based in the heart of Indianapolis, we pride ourselves on transparent, fast, and fair transactions. We understand the local market and are committed to providing exceptional service to both homeowners and investors.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/8292850/pexels-photo-8292850.jpeg"
                alt="WillowBrook Team"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fairness</h3>
              <p className="text-gray-600">
                We believe in fair, honest transactions that benefit everyone involved. No hidden fees, no surprises.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Speed</h3>
              <p className="text-gray-600">
                Time is valuable. We move quickly to get you the results you need without compromising quality.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Simplicity</h3>
              <p className="text-gray-600">
                Real estate doesn't have to be complicated. We make the process simple and stress-free.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Local Focus */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Indianapolis Focused</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are Indianapolis natives who understand the local market, neighborhoods, and what makes each area unique. Our local expertise gives us an advantage in providing accurate valuations and finding the right investment opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-orange-500">500+</div>
              <div className="text-gray-600">Properties Evaluated</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-orange-500">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-orange-500">50+</div>
              <div className="text-gray-600">Neighborhoods Served</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-orange-500">100%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  const handleContactForm = (formData) => {
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300">Get in touch with the WillowBrook team</p>
        </div>
      </div>

      {/* Contact Info & Form */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="text-2xl mr-4">📧</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@willowbrookgroup.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-4">📞</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(317) 555-0199</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-4">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Area</h3>
                    <p className="text-gray-600">Serving Greater Indianapolis & Surrounding Areas</p>
                    <p className="text-sm text-gray-500">We come to you!</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-4">🕒</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8AM - 6PM</p>
                    <p className="text-gray-600">Saturday: 9AM - 4PM</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p>Interactive Map Coming Soon</p>
                  <p className="text-sm">Indianapolis, Indiana Location</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const data = Object.fromEntries(formData.entries());
                  handleContactForm(data);
                }} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="(317) 555-0000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage />;
      case 'sell':
        return <SellYourHomePage />;
      case 'buyers':
        return <ForBuyersPage />;
      case 'properties':
        return <CurrentPropertiesPage />;
      case 'about':
        return <AboutUsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div className="App">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;