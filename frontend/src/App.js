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

// Homepage Component - Original Simple Style
const Homepage = ({ setCurrentPage }) => {
  const handleHeroForm = (formData) => {
    console.log('Hero form submitted:', formData);
    // Form now handled by Formspree
  };

  return (
    <div className="pt-16">
      <HeroSection setCurrentPage={setCurrentPage} />
      <ServicesSection />
      <TrustBadges />
      <LeadForm
        title="Get Your Cash Offer Today"
        subtitle="Fill out the form below and we'll contact you within 24 hours"
        fields={[
          { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
          { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number' },
          { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
          { name: 'address', label: 'Property Address', type: 'text', placeholder: 'Enter your property address', fullWidth: true },
          { name: 'condition', label: 'Property Condition', type: 'textarea', placeholder: 'Describe the condition of your property...', fullWidth: true }
        ]}
        buttonText="Get My Cash Offer"
        onSubmit={handleHeroForm}
        formType="homepage-seller"
      />
    </div>
  );
};

// Sell Your Home Page - Detailed Version
const SellYourHomePage = () => {
  const handleSellForm = (formData) => {
    console.log('Sell form submitted:', formData);
    // Form now handled by Formspree
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-orange-900/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="mb-6">
            <p className="text-xl sm:text-2xl text-orange-400 font-semibold mb-4">Get a Fair Offer You Can Trust in 15 Minutes</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Sell My House Fast Indianapolis IN!
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-200 mb-8">
              Any Condition. Any Situation.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <p className="text-2xl font-bold mb-4">We're Ready to Talk!</p>
            <button 
              onClick={() => document.getElementById('sell-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Request Your Offer
            </button>
            <p className="text-sm text-gray-300 mt-4">Completely Free • No Obligation</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              <p className="text-lg text-gray-600 mb-6">
                <strong>We buy houses in Indianapolis IN</strong> and all over Indiana with YOU – the seller – in mind (our <em>first priority</em>).
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We give you the <strong>best all-cash offer</strong> (<em>fast!</em>) for your home, and provide a <strong>super easy close</strong> for you, your family, and your unique situation.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Above all, we are <strong>real estate problem solvers</strong>, and we make sure <strong>every transaction is a win-win</strong>.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
                alt="We Buy Houses Indianapolis"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            {/* All 9 Benefits with Icons */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-green-500 text-2xl">💰</div>
                <span className="text-lg font-semibold text-gray-900">NO Closing Costs</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-green-500 text-2xl">🏠</div>
                <span className="text-lg font-semibold text-gray-900">NO Agent Fees</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-green-500 text-2xl">📅</div>
                <span className="text-lg font-semibold text-gray-900">Close on Your Schedule</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-green-500 text-2xl">📦</div>
                <span className="text-lg font-semibold text-gray-900">Choose Your Move Out Day</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-green-500 text-2xl">📞</div>
                <span className="text-lg font-semibold text-gray-900">Offer in Person or by Email</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-green-500 text-2xl">🔍</div>
                <span className="text-lg font-semibold text-gray-900">No Inspections, No Appraisals</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-green-500 text-2xl">👥</div>
                <span className="text-lg font-semibold text-gray-900">No Showings or Open Houses</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-green-500 text-2xl">🔧</div>
                <span className="text-lg font-semibold text-gray-900">No Repairs or Fixes (As-Is)</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-green-500 text-2xl">✅</div>
                <span className="text-lg font-semibold text-gray-900">No Hassles (Our Guarantee!)</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => document.getElementById('sell-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Request Your Offer
            </button>
          </div>
        </div>
      </div>

      {/* Simple Process Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Simple Process</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Get In Touch</h3>
              <p className="text-gray-600">Our specialist will give you a <strong>free, no-obligation property evaluation</strong> at your convenience.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Cash Offer</h3>
              <p className="text-gray-600">Within <strong>just 1 hour</strong>, we'll have a <strong>guaranteed all-cash offer</strong> ready for your home.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Closing Day</h3>
              <p className="text-gray-600"><strong>You choose the closing date</strong> (as fast as <strong>7 days</strong>), and the easiest moving day for you.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Talk to Us Section */}
      <div className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">"I Need To Sell My House Fast In Indianapolis!"</h2>
          <p className="text-xl text-gray-300 mb-8">
            <strong>We buy houses everywhere in Indianapolis IN</strong> – in <em>any condition</em> – for <em>any reason</em>.
          </p>
          <p className="text-lg text-gray-300 mb-12">
            Need to sell your Indianapolis house for <strong>any reason at all</strong>? WillowBrook Real Estate Group is ready to work with you and provide an extremely fair, all-cash offer.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 gap-8 mb-12 max-w-sm mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">5</div>
              <div className="text-lg text-gray-300">Licensed Professionals Ready to Help</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 text-gray-900 max-w-md mx-auto">
            <img 
              src="https://i.postimg.cc/rph3Dt20/IMG-CE9585-BB15-C1-1.jpg"
              alt="Local Market Specialist"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold mb-2">Matthew Chitel</h3>
            <p className="text-gray-600 mb-4">Local Market Specialist</p>
            <div className="text-center">
              <h4 className="font-bold mb-2">Get a No-Obligation Cash Offer Today</h4>
              <h4 className="font-bold mb-4">Talk to our Award-Winning Team Today</h4>
              <p className="text-lg text-gray-600">Contact us through our website form</p>
            </div>
          </div>
        </div>
      </div>

      {/* Solution for Every Homeowner */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Do You Need To Sell Your House in Indianapolis Indiana?</h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Hassle-Saving</h3>
                  <p className="text-gray-600 mb-2">When you sell to us…</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• <strong>No cleaning, repairs, or junk removal necessary</strong>. Hands free.</li>
                    <li>• <strong>No interviewing agents</strong> for one that promises to "sell your home fast," but has you sitting in a binding contract.</li>
                    <li>• <strong>No endless paperwork</strong>, no headaches, and no waiting game.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Time-Saving</h3>
                  <p className="text-gray-600">Between <strong>showings, inspections, appraisals</strong> and <strong>loan approvals</strong>, it can take <strong>several months or more</strong> for your property to sell. We'd rather be onto the next chapter of our life by then.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Stress-Saving</h3>
                  <p className="text-gray-600">Let us calculate a fair market value for your IN home and present you with an easy cash offer.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">A Solution for Every Homeowner</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Junk piling up in your house?",
                  "Looking to Avoid Foreclosure?", 
                  "Upside Down on the Mortgage?",
                  "Facing Liens on Your Property?",
                  "Inherited an Unwanted Property?",
                  "Vacant House sitting Idle?",
                  "In need of Excessive Repairs?",
                  "Problems with Bad Tenants?",
                  "Fire Damage or Disaster?",
                  "In the middle of a Divorce?",
                  "Ready to Move ASAP?",
                  "Looking into Downsizing?",
                  "Generally Behind on Payments?",
                  "Just want a Fresh Start?"
                ].map((situation, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="text-orange-500">•</div>
                    <span className="text-gray-700">{situation}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button 
                  onClick={() => document.getElementById('sell-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300"
                >
                  Yes, Offer please!
                </button>
                <p className="text-sm text-gray-500 mt-2">Completely Free • No Obligation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Stats Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sell My House Fast in Indianapolis Indiana</h3>
              <p className="text-gray-600">Reduce the <strong>average 65 Days to Sale</strong> in Indianapolis, IN to <strong>just 7 days</strong> or less, with an instant cash offer and an <strong>expedited closing</strong>.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">We Buy Homes in Indianapolis Indiana</h3>
              <p className="text-gray-600">On the market, buyers pay <strong>an average of $239,000</strong> for homes in Indianapolis. Let us buy your house for cash, and <strong>skip the hassle and extended waiting period</strong> of listing.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cash Home Buyers in Indianapolis Indiana</h3>
              <p className="text-gray-600">A considerable <strong>42% of homes in 2024 sold under list price</strong> in this area. Make the most of your home sale and your time by working with a <strong>trusted cash home buyer</strong>.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Form */}
      <div id="sell-form">
        <LeadForm
          title="Get Your Cash Offer Today"
          subtitle="Fill out the form below and we'll contact you within 24 hours"
          fields={[
            { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
            { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number' },
            { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
            { name: 'address', label: 'Property Address', type: 'text', placeholder: 'Enter your property address', fullWidth: true },
            { name: 'condition', label: 'Property Condition', type: 'textarea', placeholder: 'Describe the condition of your property...', fullWidth: true }
          ]}
          buttonText="Request Your Offer"
          onSubmit={handleSellForm}
          formType="sell-page"
        />
      </div>
    </div>
  );
};

// For Buyers Page
const ForBuyersPage = () => {
  const handleBuyerForm = (formData) => {
    console.log('Buyer form submitted:', formData);
    // Form now handled by Formspree
  };

  // Calculator states
  const [arvData, setArvData] = useState({
    compsPrice: '',
    propertySize: '',
    arvResult: 0
  });

  const [roiData, setRoiData] = useState({
    purchasePrice: '',
    repairCosts: '',
    salePrice: '',
    roiResult: 0
  });

  const calculateARV = () => {
    const comps = parseFloat(arvData.compsPrice) || 0;
    const size = parseFloat(arvData.propertySize) || 0;
    const result = comps * size;
    setArvData({ ...arvData, arvResult: result });
  };

  const calculateROI = () => {
    const purchase = parseFloat(roiData.purchasePrice) || 0;
    const repairs = parseFloat(roiData.repairCosts) || 0;
    const sale = parseFloat(roiData.salePrice) || 0;
    const totalInvestment = purchase + repairs;
    const profit = sale - totalInvestment;
    const roi = totalInvestment > 0 ? ((profit / totalInvestment) * 100) : 0;
    setRoiData({ ...roiData, roiResult: roi });
  };

  return (
    <div className="pt-16">
      {/* Header Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Join Our Cash Buyer List</h1>
          <p className="text-xl text-gray-300 mb-8">Get access to off-market properties before anyone else.</p>
          
          {/* CTA Button to Buyer Form */}
          <button 
            onClick={() => document.getElementById('buyer-signup-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Join Buyer List Now
          </button>
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

      {/* Investment Calculators Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Investment Calculators</h2>
            <p className="text-xl text-gray-600">Tools to help you analyze potential investments</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* ARV Calculator */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">ARV Calculator</h3>
              <p className="text-gray-600 mb-6">
                Calculate the After Repair Value of your property based on comparable sales.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Comparable Price per Sq Ft ($)
                  </label>
                  <input
                    type="number"
                    value={arvData.compsPrice}
                    onChange={(e) => setArvData({ ...arvData, compsPrice: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g., 150"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Size (Sq Ft)
                  </label>
                  <input
                    type="number"
                    value={arvData.propertySize}
                    onChange={(e) => setArvData({ ...arvData, propertySize: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g., 1500"
                  />
                </div>
                
                <button
                  onClick={calculateARV}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Calculate ARV
                </button>
                
                {arvData.arvResult > 0 && (
                  <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                    <h4 className="text-lg font-bold text-green-800">Estimated ARV</h4>
                    <p className="text-2xl font-bold text-green-600">
                      ${arvData.arvResult.toLocaleString()}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* ROI Calculator */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">ROI Calculator</h3>
              <p className="text-gray-600 mb-6">
                Calculate your Return on Investment for real estate deals.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Purchase Price ($)
                  </label>
                  <input
                    type="number"
                    value={roiData.purchasePrice}
                    onChange={(e) => setRoiData({ ...roiData, purchasePrice: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g., 120000"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Repair Costs ($)
                  </label>
                  <input
                    type="number"
                    value={roiData.repairCosts}
                    onChange={(e) => setRoiData({ ...roiData, repairCosts: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g., 30000"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sale Price / ARV ($)
                  </label>
                  <input
                    type="number"
                    value={roiData.salePrice}
                    onChange={(e) => setRoiData({ ...roiData, salePrice: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g., 180000"
                  />
                </div>
                
                <button
                  onClick={calculateROI}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Calculate ROI
                </button>
                
                {roiData.roiResult !== 0 && (
                  <div className="mt-6 p-4 bg-blue-100 border border-blue-300 rounded-lg">
                    <h4 className="text-lg font-bold text-blue-800">Estimated ROI</h4>
                    <p className="text-2xl font-bold text-blue-600">
                      {roiData.roiResult.toFixed(2)}%
                    </p>
                    <p className="text-sm text-blue-600 mt-2">
                      Profit: ${((parseFloat(roiData.salePrice) || 0) - (parseFloat(roiData.purchasePrice) || 0) - (parseFloat(roiData.repairCosts) || 0)).toLocaleString()}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Calculator Disclaimer */}
          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-yellow-800 mb-2">⚠️ Disclaimer</h4>
            <p className="text-yellow-700">
              These calculators provide estimates only and should not be considered as professional financial advice. 
              Always consult with qualified professionals before making investment decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Buyer Form */}
      <div id="buyer-signup-form">
        <LeadForm
        title="Join the Buyer List Today"
        subtitle="Start receiving exclusive Indianapolis investment opportunities"
        fields={[
          { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
          { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
          { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number' },
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
        formType="buyer-signup"
        />
      </div>
    </div>
  );
};

// Current Properties Page
const CurrentPropertiesPage = () => {
  const handleSubscribe = (formData) => {
    console.log('Subscribe form submitted:', formData);
    // Form now handled by Formspree
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
            formType="property-updates"
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
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              WillowBrook Real Estate Group is a local team of real estate professionals helping Indianapolis homeowners sell quickly and investors find discounted properties.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Based in the heart of Indianapolis, we pride ourselves on transparent, fast, and fair transactions. We understand the local market and are committed to providing exceptional service to both homeowners and investors throughout the greater Indianapolis area.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              <strong>Mobile Service:</strong> We come directly to you for property evaluations, consultations, and closings. No need to visit an office - we bring our expertise to your location for your convenience.
            </p>
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

      {/* Local Focus - Updated to remove "10+ Years Experience" */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Indianapolis Focused</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are Indianapolis natives who understand the local market, neighborhoods, and what makes each area unique. Our local expertise gives us an advantage in providing accurate valuations and finding the right investment opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-orange-500">500+</div>
              <div className="text-gray-600">Properties Evaluated</div>
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
  const [contactForm, setContactForm] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const submissionData = {
        ...contactForm,
        formType: 'contact'
      };

      // Use our backend API for form handling
      const backendUrl = process.env.REACT_APP_BACKEND_URL || import.meta.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setContactForm({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const handleContactFormChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300">Ready to sell your house or invest in Indianapolis real estate?</p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-orange-500 text-2xl">📧</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">operations@willowbrook-realestate.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-orange-500 text-2xl">📍</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Service Area</h3>
                    <p className="text-gray-600">Greater Indianapolis Area</p>
                    <p className="text-gray-600 text-sm">We provide mobile service - we come to you!</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-orange-500 text-2xl">⏰</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Response Time</h3>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-lg font-bold text-orange-800 mb-2">🚀 Quick Response Guarantee</h3>
                <p className="text-orange-700">
                  We pride ourselves on fast communication. Expect to hear back from us within 24 hours of your inquiry.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              <form onSubmit={handleContactFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={contactForm.fullName || ''}
                    onChange={handleContactFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email || ''}
                    onChange={handleContactFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={contactForm.phone || ''}
                    onChange={handleContactFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={contactForm.subject || ''}
                    onChange={handleContactFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  >
                    <option value="">Select a subject...</option>
                    <option value="sell-house">I want to sell my house</option>
                    <option value="buyer-list">Join the buyer list</option>
                    <option value="general-inquiry">General inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={contactForm.message || ''}
                    onChange={handleContactFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-orange-500 hover:bg-orange-600 text-white transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg text-center">
                    <p className="text-green-800 font-semibold">✅ Thank you! We'll contact you within 24 hours.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg text-center">
                    <p className="text-red-800 font-semibold">❌ Something went wrong. Please try again or email us directly at operations@willowbrook-realestate.com.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Blog data
const blogPosts = [
  {
    id: 0,
    title: "We Buy Houses Fast in Indianapolis IN",
    excerpt: "Get a fair cash offer for your Indianapolis home in just 24 hours. No repairs needed, no agent fees, close in 7 days.",
    content: `
      <h2>Sell Your Indianapolis House Fast for Cash</h2>
      
      <p>Need to sell your house quickly in Indianapolis? WillowBrook Real Estate Group buys houses in any condition throughout the greater Indianapolis area. We provide fair cash offers and can close in as little as 7 days.</p>
      
      <h3>Why Choose Cash Buyers in Indianapolis?</h3>
      <p>Traditional real estate sales can take months and come with many uncertainties. When you sell to WillowBrook Real Estate Group:</p>
      <ul>
        <li>Get a cash offer within 24 hours</li>
        <li>No repairs or renovations needed</li>
        <li>No real estate agent commissions</li>
        <li>No closing costs on your end</li>
        <li>Choose your closing date</li>
        <li>No showings or open houses</li>
      </ul>
      
      <h3>We Buy Houses in Any Condition</h3>
      <p>It doesn't matter if your house needs major repairs, has foundation issues, or requires extensive updates. We buy houses as-is, saving you thousands in repair costs and months of preparation time.</p>
      
      <h3>Indianapolis Neighborhoods We Serve</h3>
      <p>We buy houses throughout Indianapolis and surrounding areas including:</p>
      <ul>
        <li>Downtown Indianapolis</li>
        <li>Broad Ripple</li>
        <li>Fountain Square</li>
        <li>Mass Ave</li>
        <li>Carmel</li>
        <li>Fishers</li>
        <li>Westfield</li>
        <li>Noblesville</li>
        <li>And many more!</li>
      </ul>
      
      <h3>Get Your Cash Offer Today</h3>
      <p>Ready to sell your Indianapolis house fast? Contact WillowBrook Real Estate Group today for your no-obligation cash offer. We're here to help you move forward quickly and with confidence.</p>
    `,
    date: "January 20, 2025",
    tags: ["Sell Fast", "Local Market", "Cash Buyers"],
    slug: "sell-house-fast-indianapolis-in"
  },
  {
    id: 1,
    title: "How to Sell Your House Fast in Indianapolis",
    excerpt: "Learn the proven strategies Indianapolis homeowners are using to sell their properties quickly without the hassle of traditional real estate.",
    content: `
      <h2>Selling Your Indianapolis Home Quickly: A Complete Guide</h2>
      
      <p>If you're looking to sell your house fast in Indianapolis, you're not alone. Many homeowners in the Circle City need to sell quickly for various reasons – job relocation, financial difficulties, inherited property, or simply wanting to avoid the traditional real estate process.</p>
      
      <h3>Why Choose Cash Buyers?</h3>
      <p>Traditional real estate sales in Indianapolis can take 30-60 days or longer, with many potential roadblocks:</p>
      <ul>
        <li>Buyer financing can fall through</li>
        <li>Home inspections can reveal costly repairs</li>
        <li>Real estate agent commissions (typically 6%)</li>
        <li>Closing costs and fees</li>
        <li>Time-consuming showings and open houses</li>
      </ul>
      
      <h3>The Cash Buying Process</h3>
      <p>At WillowBrook Real Estate Group, we've streamlined the process:</p>
      <ol>
        <li><strong>Submit Your Property Info:</strong> Fill out our simple form or give us a call</li>
        <li><strong>Property Evaluation:</strong> We'll schedule a quick visit to assess your home</li>
        <li><strong>Cash Offer:</strong> Receive a fair, no-obligation offer within 24 hours</li>
        <li><strong>Quick Closing:</strong> Close on your timeline – as fast as 7 days</li>
      </ol>
      
      <h3>Indianapolis Market Insights</h3>
      <p>The Indianapolis housing market has remained strong, with median home prices continuing to appreciate. However, certain neighborhoods like Fountain Square, Mass Ave, and Broad Ripple see faster sales due to high demand.</p>
      
      <p>Areas experiencing growth include:</p>
      <ul>
        <li>Downtown Indianapolis</li>
        <li>Carmel</li>
        <li>Fishers</li>
        <li>Westfield</li>
        <li>Noblesville</li>
      </ul>
      
      <h3>Ready to Sell?</h3>
      <p>If you're ready to sell your Indianapolis home quickly, contact WillowBrook Real Estate Group today. We buy houses in any condition, in any Indianapolis neighborhood, and we can close in as little as 7 days.</p>
    `,
    date: "January 15, 2025",
    tags: ["Sell Fast", "Local Market"],
    slug: "sell-house-fast-indianapolis"
  },
  {
    id: 2,
    title: "Indianapolis Real Estate Market Trends 2025",
    excerpt: "Stay updated on the latest market trends, property values, and investment opportunities in the Indianapolis metropolitan area.",
    content: `
      <h2>Indianapolis Real Estate Market Analysis: 2025 Outlook</h2>
      
      <p>The Indianapolis real estate market continues to show strength as we move through 2025. Despite national economic uncertainties, the Circle City maintains its position as an attractive market for both homeowners and investors.</p>
      
      <h3>Current Market Conditions</h3>
      <p>Key statistics for the Indianapolis metro area:</p>
      <ul>
        <li>Median home price: $195,000 (up 4.2% year-over-year)</li>
        <li>Average days on market: 28 days</li>
        <li>Inventory levels: 2.1 months of supply</li>
        <li>Price per square foot: $135 average</li>
      </ul>
      
      <h3>Hottest Neighborhoods</h3>
      <p><strong>Fountain Square:</strong> Young professionals flock to this trendy area with its art scene and dining options. Average home price: $220,000</p>
      
      <p><strong>Mass Ave:</strong> Cultural district with historic charm. Average home price: $285,000</p>
      
      <p><strong>Broad Ripple:</strong> Nightlife and entertainment hub popular with millennials. Average home price: $195,000</p>
      
      <p><strong>Carmel:</strong> Top-rated schools drive family demand. Average home price: $420,000</p>
      
      <h3>Investment Opportunities</h3>
      <p>Indianapolis continues to attract real estate investors due to:</p>
      <ul>
        <li>Strong rental demand</li>
        <li>Affordable property prices compared to coastal markets</li>
        <li>Growing tech sector (Salesforce, Infosys)</li>
        <li>Major sporting events (Indianapolis 500, Colts, Pacers)</li>
      </ul>
      
      <h3>2025 Predictions</h3>
      <p>We expect:</p>
      <ul>
        <li>Continued moderate price appreciation (3-5%)</li>
        <li>Inventory to remain tight in desirable areas</li>
        <li>New construction to focus on starter homes</li>
        <li>Downtown condo market to strengthen</li>
      </ul>
    `,
    date: "January 10, 2025",
    tags: ["Local Market", "Market Analysis"],
    slug: "indianapolis-market-trends-2025"
  },
  {
    id: 3,
    title: "5 Benefits of Selling to Cash Buyers",
    excerpt: "Discover why more Indianapolis homeowners are choosing cash buyers over traditional real estate agents for their property sales.",
    content: `
      <h2>Why Cash Buyers Are the Smart Choice for Indianapolis Homeowners</h2>
      
      <p>More Indianapolis homeowners are discovering the advantages of selling directly to cash buyers. Here are the top 5 benefits that make this option increasingly popular:</p>
      
      <h3>1. Speed of Sale</h3>
      <p>Traditional real estate transactions can drag on for months. With cash buyers like WillowBrook Real Estate Group:</p>
      <ul>
        <li>No waiting for buyer financing approval</li>
        <li>No lengthy inspection periods</li>
        <li>Close in as little as 7 days</li>
        <li>Flexible closing timeline to meet your needs</li>
      </ul>
      
      <h3>2. Sell As-Is Condition</h3>
      <p>Forget about expensive repairs and renovations:</p>
      <ul>
        <li>No need to fix anything before selling</li>
        <li>We buy houses with foundation issues, roof problems, outdated systems</li>
        <li>Save thousands on repair costs</li>
        <li>No staging or cosmetic improvements required</li>
      </ul>
      
      <h3>3. No Commissions or Fees</h3>
      <p>Keep more money in your pocket:</p>
      <ul>
        <li>No real estate agent commissions (typically 6%)</li>
        <li>No closing costs on your end</li>
        <li>No marketing fees</li>
        <li>No surprise deductions at closing</li>
      </ul>
      
      <h3>4. Certainty of Closing</h3>
      <p>Cash offers provide security traditional sales can't match:</p>
      <ul>
        <li>No risk of buyer financing falling through</li>
        <li>No appraisal contingencies</li>
        <li>Guaranteed closing with proof of funds</li>
        <li>Less chance of last-minute complications</li>
      </ul>
      
      <h3>5. Privacy and Convenience</h3>
      <p>Maintain your privacy throughout the process:</p>
      <ul>
        <li>No open houses or showings</li>
        <li>No strangers walking through your home</li>
        <li>One simple property evaluation</li>
        <li>Discreet, professional service</li>
      </ul>
      
      <h3>Is Cash Buying Right for You?</h3>
      <p>Consider cash buyers if you:</p>
      <ul>
        <li>Need to sell quickly</li>
        <li>Want to avoid repairs and improvements</li>
        <li>Prefer a simple, straightforward process</li>
        <li>Value certainty over potentially higher offers</li>
        <li>Want to avoid the stress of traditional sales</li>
      </ul>
      
      <p>Contact WillowBrook Real Estate Group today for your no-obligation cash offer!</p>
    `,
    date: "January 5, 2025",
    tags: ["Cash Buyers", "Sell Fast"],
    slug: "benefits-cash-buyers-indianapolis"
  },
  {
    id: 4,
    title: "Real Estate Investment Tips for Beginners",
    excerpt: "New to real estate investing? Learn the fundamentals of property investment in the Indianapolis market.",
    content: `
      <h2>Getting Started with Real Estate Investing in Indianapolis</h2>
      
      <p>Indianapolis offers excellent opportunities for new real estate investors. With affordable property prices, strong rental demand, and a growing economy, the Circle City is perfect for building your investment portfolio.</p>
      
      <h3>Why Indianapolis for Investment?</h3>
      <ul>
        <li><strong>Affordability:</strong> Lower barrier to entry compared to coastal markets</li>
        <li><strong>Job Growth:</strong> Strong employment in healthcare, tech, and logistics</li>
        <li><strong>Population Growth:</strong> Steady influx of new residents</li>
        <li><strong>Universities:</strong> IUPUI, Butler, and other colleges drive rental demand</li>
      </ul>
      
      <h3>Investment Strategy #1: Buy and Hold Rentals</h3>
      <p>Target neighborhoods with strong rental demand:</p>
      <ul>
        <li><strong>Near IUPUI:</strong> Student and staff housing demand</li>
        <li><strong>Downtown:</strong> Young professionals</li>
        <li><strong>Suburban areas:</strong> Families seeking good schools</li>
      </ul>
      <p>Expected returns: 8-12% cash-on-cash return</p>
      
      <h3>Investment Strategy #2: House Flipping</h3>
      <p>Indianapolis offers good opportunities for fix-and-flip projects:</p>
      <ul>
        <li>Look for properties under $100,000 purchase price</li>
        <li>Target homes needing $20,000-40,000 in renovations</li>
        <li>Focus on popular neighborhoods like Fountain Square, Broad Ripple</li>
        <li>Expected profit: $20,000-50,000 per flip</li>
      </ul>
      
      <h3>Financing Your First Investment</h3>
      <p>Options for new investors:</p>
      <ul>
        <li><strong>Conventional mortgages:</strong> 20-25% down payment</li>
        <li><strong>Hard money loans:</strong> For flips and quick purchases</li>
        <li><strong>Private lenders:</strong> Alternative financing sources</li>
        <li><strong>Partnerships:</strong> Team up with experienced investors</li>
      </ul>
      
      <h3>Key Metrics to Track</h3>
      <ul>
        <li><strong>Cap Rate:</strong> Net Operating Income ÷ Purchase Price</li>
        <li><strong>Cash-on-Cash Return:</strong> Annual Cash Flow ÷ Cash Invested</li>
        <li><strong>1% Rule:</strong> Monthly rent should equal 1% of purchase price</li>
        <li><strong>50% Rule:</strong> Expect expenses to equal 50% of rental income</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>Ready to start investing in Indianapolis real estate? Join our buyer list to get access to off-market investment opportunities, or contact us to learn more about our investment properties.</p>
    `,
    date: "December 28, 2024",
    tags: ["Investment", "Buyers"],
    slug: "real-estate-investment-tips-beginners"
  }
];

// Blog listing page
const BlogPage = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  
  // Get unique tags
  const allTags = ['All', ...new Set(blogPosts.flatMap(post => post.tags))];
  
  // Filter posts by selected tag
  const filteredPosts = selectedTag === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(selectedTag));

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Indianapolis Real Estate Blog</h1>
          <p className="text-xl text-gray-300">Expert insights on selling houses and real estate investing in Indianapolis</p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tag Filter */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Topic:</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTag === tag
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map(post => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <div className="flex space-x-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* No posts message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No posts found for the selected topic.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Homepage setCurrentPage={setCurrentPage} />;
      case 'sell':
        return <SellYourHomePage />;
      case 'buyers':
        return <ForBuyersPage />;
      case 'properties':
        return <CurrentPropertiesPage />;
      case 'blog':
        return <BlogPage />;
      case 'about':
        return <AboutUsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <Homepage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;