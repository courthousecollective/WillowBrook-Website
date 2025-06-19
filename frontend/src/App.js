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
              Sell My House Fast <span className="greensboro-highlight-hero">Greensboro</span> NC!
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-200 mb-8">
              Any Condition. Any Situation.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <p className="text-2xl font-bold mb-4">We're Ready to Help!</p>
            <p className="text-xl font-bold text-orange-400 mb-6">Contact us at operations@willowbrook-realestate.com</p>
            <button 
              onClick={() => document.getElementById('sell-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get My Cash Offer!
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
                <strong>We buy houses in Greensboro NC</strong> and all over North Carolina with YOU – the seller – in mind (our <em>first priority</em>).
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We give you the <strong>best all-cash offer</strong> (<em>fast!</em>) for your home, and provide a <strong>super easy close</strong> for you, your family, and your unique situation.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Above all, we are <strong>real estate problem solvers</strong>, and we make sure <strong>every transaction is a win-win</strong>.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
                alt="We Buy Houses Greensboro"
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
                <span className="text-lg font-semibold text-gray-900">Offer via Email or Online Form</span>
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
              Get My Cash Offer!
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
          <h2 className="text-4xl font-bold mb-6">"I Need To Sell My House Fast In Greensboro!"</h2>
          <p className="text-xl text-gray-300 mb-8">
            <strong>We buy houses everywhere in Greensboro NC</strong> – in <em>any condition</em> – for <em>any reason</em>.
          </p>
          <p className="text-lg text-gray-300 mb-12">
            Need to sell your Greensboro house for <strong>any reason at all</strong>? WillowBrook Real Estate Group is ready to work with you and provide an extremely fair, all-cash offer.
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
              <p className="text-xl font-bold text-orange-500">operations@willowbrook-realestate.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Solution for Every Homeowner */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Do You Need To Sell Your House in Greensboro North Carolina?</h2>
              
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
                  <p className="text-gray-600">Let us calculate a fair market value for your NC home and present you with an easy cash offer.</p>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sell My House Fast in Greensboro North Carolina</h3>
              <p className="text-gray-600">Reduce the <strong>average 58 Days to Sale</strong> in Greensboro, NC to <strong>just 7 days</strong> or less, with an instant cash offer and an <strong>expedited closing</strong>.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">We Buy Homes in Greensboro North Carolina</h3>
              <p className="text-gray-600">On the market, buyers pay <strong>an average of $185,000</strong> for homes in Greensboro. Let us buy your house for cash, and <strong>skip the hassle and extended waiting period</strong> of listing.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cash Home Buyers in Greensboro North Carolina</h3>
              <p className="text-gray-600">A considerable <strong>38% of homes in 2024 sold under list price</strong> in this area. Make the most of your home sale and your time by working with a <strong>trusted cash home buyer</strong>.</p>
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
            { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
            { name: 'address', label: 'Property Address', type: 'text', placeholder: 'Enter your property address', fullWidth: true },
            { name: 'condition', label: 'Property Condition', type: 'textarea', placeholder: 'Describe the condition of your property...', fullWidth: true }
          ]}
          buttonText="Get My Cash Offer"
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
            <p className="text-xl text-gray-600">Get first access to discounted investment properties in Greensboro</p>
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
                    placeholder="e.g., 125"
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
                    placeholder="e.g., 1400"
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
                    placeholder="e.g., 95000"
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
                    placeholder="e.g., 25000"
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
                    placeholder="e.g., 155000"
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
        subtitle="Start receiving exclusive Greensboro investment opportunities"
        fields={[
          { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
          { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
          { name: 'zipCodes', label: 'Target Zip Codes', type: 'text', placeholder: 'e.g. 27401, 27403, 27405' },
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
          <p className="text-xl text-gray-300">Exclusive off-market properties in Greensboro</p>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-lg p-12 mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Coming Soon</h2>
            <p className="text-xl text-gray-600 mb-8">
              Exclusive off-market properties in Greensboro will be available here soon.
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
                <h3 className="text-lg font-bold text-gray-900 mb-2">Greensboro Investment Property</h3>
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
          <p className="text-xl text-gray-300">Your trusted Greensboro real estate professionals</p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              WillowBrook Real Estate Group is a local team of real estate professionals helping Greensboro homeowners sell quickly and investors find discounted properties.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Based in the heart of Greensboro, we pride ourselves on transparent, fast, and fair transactions. We understand the local market and are committed to providing exceptional service to both homeowners and investors throughout the greater Greensboro area.
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

      {/* Local Focus */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Greensboro Focused</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are Greensboro natives who understand the local market, neighborhoods, and what makes each area unique. Our local expertise gives us an advantage in providing accurate valuations and finding the right investment opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-orange-500">400+</div>
              <div className="text-gray-600">Properties Evaluated</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-orange-500">8+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-orange-500">35+</div>
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

  const handleContactForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      
      // Add contact form identifier
      const submissionData = {
        ...data,
        formType: 'contact-page',
        submissionDate: new Date().toLocaleString(),
        website: 'WillowBrook Real Estate Group'
      };

      const response = await fetch('https://formspree.io/f/xldekwko', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
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
                    <p className="text-gray-600">operations@willowbrook-realestate.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-4">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Area</h3>
                    <p className="text-gray-600">Serving Greater Greensboro & Surrounding Areas</p>
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

              {/* Service Area Info */}
              <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🚗</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Service</h3>
                  <p className="text-gray-600 mb-2">We come directly to you for property evaluations</p>
                  <p className="text-sm text-gray-500">
                    Serving: Greensboro, High Point, Winston-Salem, Burlington, 
                    Kernersville, Oak Ridge, Summerfield, and surrounding areas
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <form onSubmit={handleContactForm} className="space-y-6">
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
                    disabled={isSubmitting}
                    className={`w-full font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed text-white' 
                        : 'bg-orange-500 hover:bg-orange-600 text-white'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg text-center">
                      <p className="text-green-800 font-semibold">✅ Message sent! We'll get back to you soon.</p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg text-center">
                      <p className="text-red-800 font-semibold">❌ Failed to send. Please email us at operations@willowbrook-realestate.com</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Blog Page
const BlogPage = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const submissionData = {
        email: newsletterEmail,
        formType: 'newsletter-signup',
        submissionDate: new Date().toLocaleString(),
        website: 'WillowBrook Real Estate Group'
      };

      const response = await fetch('https://formspree.io/f/xldekwko', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setNewsletterEmail('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };
  const blogPosts = [
    {
      id: 1,
      title: "How to Sell My House Fast in Greensboro, NC",
      excerpt: "Selling a house in Greensboro typically takes 58 to 65 days from listing to closing. But if you're facing foreclosure, relocating quickly, or dealing with a distressed property, you may not have that kind of time.",
      content: `
        <div class="blog-author">
          <p><strong>By Matthew Chitel</strong> – Updated June 2025</p>
        </div>
        
        <p>Selling a house in Greensboro typically takes 58 to 65 days from listing to closing. But if you're facing foreclosure, relocating quickly, or dealing with a distressed property, you may not have that kind of time.</p>
        
        <p><strong>Fortunately, there are faster options.</strong></p>
        
        <h2>1. Sell to a Cash Home Buyer</h2>
        
        <p>Cash buyers can make offers within 24 to 48 hours and close in as little as 7 to 14 days. You skip repairs, showings, and the uncertainty of waiting for a buyer.</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-left: 4px solid #ff5722; margin: 20px 0;">
          <ul style="margin: 0;">
            <li><strong>Median home value in Greensboro:</strong> $185,000</li>
            <li><strong>Typical cash offer (approximately 70% of market value):</strong> $129,500</li>
            <li><strong>Estimated repair deductions (if selling as-is):</strong> $5,500–$9,000</li>
            <li><strong>Estimated time to close:</strong> 7 to 14 days</li>
          </ul>
        </div>
        
        <p><strong>This is a strong option if you're dealing with:</strong></p>
        <ul>
          <li>Inherited or vacant property</li>
          <li>Financial hardship or pre-foreclosure</li>
          <li>Homes in need of significant repairs</li>
        </ul>
        
        <h2>2. Sell with a Real Estate Agent</h2>
        
        <p>If you want to maximize your sale price and can afford to wait a bit longer, working with a top-performing Greensboro agent is a solid path. A good agent can help price your home right, stage it effectively, and market it to serious buyers.</p>
        
        <ul>
          <li><strong>Potential to get full market value</strong></li>
          <li><strong>Typical time to close:</strong> 45 to 65 days</li>
          <li><strong>Standard listing agent commission:</strong> 5–6% of the sale price</li>
        </ul>
        
        <h2>3. Compare Instant Offers with a Hybrid Approach</h2>
        
        <p>New programs in Greensboro let you compare multiple offers from vetted investors while still having the option to list on the open market. This hybrid model offers flexibility:</p>
        
        <ul>
          <li>Review multiple cash offers with no obligation</li>
          <li>Choose a 7-day market program if you want to test the market</li>
          <li>Possibility of getting close to full market value</li>
        </ul>
        
        <h2>Summary</h2>
        
        <p>If you're looking to sell your house fast in Greensboro, here's what to consider:</p>
        
        <div style="background: #fff3e0; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #ff5722; color: white;">
                <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Your Priority</th>
                <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Best Option</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd;"><strong>Speed</strong></td>
                <td style="padding: 12px; border: 1px solid #ddd;">Cash Buyer or iBuyer</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd;"><strong>Highest Sale Price</strong></td>
                <td style="padding: 12px; border: 1px solid #ddd;">Real Estate Agent</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd;"><strong>Flexibility</strong></td>
                <td style="padding: 12px; border: 1px solid #ddd;">Instant Offer Comparison Programs</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p><strong>The right option depends on your timeline, financial goals, and the condition of your property.</strong></p>
        
        <p>Need help getting a cash offer or connecting with a trusted local agent? Reach out and we'll point you in the right direction.</p>
      `,
      date: "June 15, 2025",
      tags: ["Sell Fast", "Local Market", "Cash Buyers"],
      slug: "sell-house-fast-greensboro-nc"
    },
    {
      id: 2,
      title: "Greensboro Real Estate Market Trends 2025",
      excerpt: "Stay updated on the latest market trends, property values, and investment opportunities in the Greensboro metropolitan area.",
      content: `
        <h2>Greensboro Real Estate Market Analysis: 2025 Outlook</h2>
        
        <p>The Greensboro real estate market continues to show resilience as we move through 2025. Despite national economic uncertainties, the Gate City maintains its position as an attractive market for both homeowners and investors.</p>
        
        <h3>Current Market Conditions</h3>
        <p>Key statistics for the Greensboro metro area:</p>
        <ul>
          <li>Median home price: $185,000 (up 3.8% year-over-year)</li>
          <li>Average days on market: 32 days</li>
          <li>Inventory levels: 2.4 months of supply</li>
          <li>Price per square foot: $125 average</li>
        </ul>
        
        <h3>Hottest Neighborhoods</h3>
        <p><strong>Downtown Greensboro:</strong> Young professionals attracted to urban lifestyle. Average home price: $195,000</p>
        
        <p><strong>Irving Park:</strong> Historic district with tree-lined streets. Average home price: $225,000</p>
        
        <p><strong>Friendly Avenue Corridor:</strong> Shopping and dining hub. Average home price: $175,000</p>
        
        <p><strong>Sedgefield:</strong> Family-friendly neighborhood with good schools. Average home price: $165,000</p>
        
        <h3>Investment Opportunities</h3>
        <p>Greensboro continues to attract real estate investors due to:</p>
        <ul>
          <li>Strong rental demand from UNCG and NC A&T students</li>
          <li>Affordable property prices compared to Charlotte/Raleigh</li>
          <li>Growing healthcare and education sectors</li>
          <li>Strategic location in the Piedmont Triad</li>
        </ul>
        
        <h3>2025 Predictions</h3>
        <p>We expect:</p>
        <ul>
          <li>Continued moderate price appreciation (3-4%)</li>
          <li>Inventory to remain balanced in most areas</li>
          <li>New construction to focus on affordable housing</li>
          <li>Downtown condo market to expand</li>
        </ul>
      `,
      date: "January 10, 2025",
      tags: ["Local Market", "Market Analysis"],
      slug: "greensboro-market-trends-2025"
    },
    {
      id: 3,
      title: "5 Benefits of Selling to Cash Buyers in Greensboro",
      excerpt: "Discover why more Greensboro homeowners are choosing cash buyers over traditional real estate agents for their property sales.",
      content: `
        <h2>Why Cash Buyers Are the Smart Choice for Greensboro Homeowners</h2>
        
        <p>More Greensboro homeowners are discovering the advantages of selling directly to cash buyers. Here are the top 5 benefits that make this option increasingly popular:</p>
        
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
        
        <h3>4. Certainty and Reliability</h3>
        <p>Cash offers provide peace of mind:</p>
        <ul>
          <li>No financing contingencies to worry about</li>
          <li>Guaranteed closing date</li>
          <li>Deal won't fall through at the last minute</li>
          <li>Professional, experienced buyers</li>
        </ul>
        
        <h3>5. Stress-Free Process</h3>
        <p>Selling doesn't have to be overwhelming:</p>
        <ul>
          <li>No showings or open houses</li>
          <li>No dealing with multiple potential buyers</li>
          <li>Simple paperwork and documentation</li>
          <li>Professional guidance throughout the process</li>
        </ul>
        
        <h3>Is Cash Buying Right for You?</h3>
        <p>Cash buying works well if you:</p>
        <ul>
          <li>Need to sell quickly (job relocation, financial hardship)</li>
          <li>Have a property that needs significant repairs</li>
          <li>Want to avoid the traditional real estate process</li>
          <li>Value certainty over potentially getting top dollar</li>
          <li>Prefer convenience and speed</li>
        </ul>
        
        <p>Ready to explore your options? Contact WillowBrook Real Estate Group for a free, no-obligation consultation about selling your Greensboro home for cash.</p>
      `,
      date: "January 5, 2025",
      tags: ["Cash Buyers", "Benefits"],
      slug: "benefits-selling-cash-buyers-greensboro"
    }
  ];

  if (selectedPost) {
    return (
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button 
            onClick={() => setSelectedPost(null)}
            className="mb-8 text-orange-500 hover:text-orange-600 font-semibold flex items-center"
          >
            ← Back to Blog
          </button>
          
          <article>
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{selectedPost.title}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <span>{selectedPost.date}</span>
                <span className="mx-2">•</span>
                <div className="flex space-x-2">
                  {selectedPost.tags.map((tag) => (
                    <span key={tag} className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>
            
            <div 
              className="blog-content prose max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Greensboro Real Estate Blog</h1>
          <p className="text-xl text-gray-300">Expert insights, market trends, and tips for Greensboro homeowners</p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {blogPosts.map((post) => (
                  <article key={post.id} className="border-b border-gray-200 pb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-orange-600 cursor-pointer"
                        onClick={() => setSelectedPost(post)}>
                      {post.title}
                    </h2>
                    <div className="flex items-center text-gray-600 mb-4">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <div className="flex space-x-2">
                        {post.tags.map((tag) => (
                          <span key={tag} className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    <button 
                      onClick={() => setSelectedPost(post)}
                      className="text-orange-600 hover:text-orange-700 font-semibold"
                    >
                      Read More →
                    </button>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 mb-4">Get the latest Greensboro real estate insights delivered to your inbox.</p>
                
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="your@email.com"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>

                {submitStatus === 'success' && (
                  <p className="text-green-600 text-sm mt-2">✅ Subscribed successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-sm mt-2">❌ Failed to subscribe. Please try again.</p>
                )}
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need to Sell Your House?</h3>
                <p className="text-gray-600 mb-4">Get a fair cash offer for your Greensboro home in 24 hours.</p>
                <button 
                  onClick={() => document.getElementById('sell-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  Get My Cash Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage setCurrentPage={setCurrentPage} />;
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
      case 'blog':
        return <BlogPage />;
      default:
        return <Homepage setCurrentPage={setCurrentPage} />;
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