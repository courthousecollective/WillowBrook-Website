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

// Homepage Component - Priority Home Buyers Style
const Homepage = () => {
  const handleHeroForm = (formData) => {
    console.log('Hero form submitted:', formData);
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
            <p className="text-3xl font-bold text-orange-400 mb-6">(317) 555-0199</p>
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
                <span className="text-lg font-semibold text-gray-900">Offer in Person or by Phone</span>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">⇒ Step 1: Get In Touch</h3>
              <p className="text-gray-600">Our specialist will give you a <strong>free, no-obligation property evaluation</strong> at your convenience.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">⇒ Step 2: Cash Offer</h3>
              <p className="text-gray-600">Within <strong>just 1 hour</strong>, we'll have a <strong>guaranteed all-cash offer</strong> ready for your home.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">⇒ Step 3: Closing Day</h3>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-lg text-gray-300">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">150+</div>
              <div className="text-lg text-gray-300">Homes Bought in 2024</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">5</div>
              <div className="text-lg text-gray-300">Licensed Professionals Ready to Help</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 text-gray-900 max-w-md mx-auto">
            <img 
              src="https://images.pexels.com/photos/8292850/pexels-photo-8292850.jpeg"
              alt="Local Market Specialist"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
            <p className="text-gray-600 mb-4">Local Market Specialist</p>
            <div className="text-center">
              <h4 className="font-bold mb-2">Get a No-Obligation Cash Offer Today</h4>
              <h4 className="font-bold mb-4">Talk to our Award-Winning Team Today</h4>
              <p className="text-2xl font-bold text-orange-500">(317) 555-0199</p>
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
            { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(317) 555-0000' },
            { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
            { name: 'address', label: 'Property Address', type: 'text', placeholder: 'Enter your property address', fullWidth: true },
            { name: 'condition', label: 'Property Condition', type: 'textarea', placeholder: 'Describe the condition of your property...', fullWidth: true }
          ]}
          buttonText="Get My Cash Offer"
          onSubmit={handleHeroForm}
          formType="homepage-seller"
        />
      </div>
    </div>
  );
};

// Sell Your Home Page
const SellYourHomePage = () => {
  const handleSellForm = (formData) => {
    console.log('Sell form submitted:', formData);
    // Form now handled by Formspree
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
        formType="sell-page"
      />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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

              {/* Service Area Info */}
              <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🚗</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Service</h3>
                  <p className="text-gray-600 mb-2">We come directly to you for property evaluations</p>
                  <p className="text-sm text-gray-500">
                    Serving: Indianapolis, Carmel, Fishers, Westfield, Noblesville, 
                    Greenwood, Avon, Plainfield, and surrounding areas
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
                      <p className="text-red-800 font-semibold">❌ Failed to send. Please call us at (317) 555-0199.</p>
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
      title: "How to Sell My House Fast in Indianapolis, IN",
      excerpt: "Selling a house in Indianapolis typically takes 65 to 70 days from listing to closing. But if you're facing foreclosure, relocating quickly, or dealing with a distressed property, you may not have that kind of time.",
      content: `
        <div class="blog-author">
          <p><strong>By Matthew Chitel</strong> – Updated June 2025</p>
        </div>
        
        <p>Selling a house in Indianapolis typically takes 65 to 70 days from listing to closing. But if you're facing foreclosure, relocating quickly, or dealing with a distressed property, you may not have that kind of time.</p>
        
        <p><strong>Fortunately, there are faster options.</strong></p>
        
        <h2>1. Sell to a Cash Home Buyer</h2>
        
        <p>Cash buyers can make offers within 24 to 48 hours and close in as little as 7 to 14 days. You skip repairs, showings, and the uncertainty of waiting for a buyer.</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-left: 4px solid #ff5722; margin: 20px 0;">
          <ul style="margin: 0;">
            <li><strong>Median home value in Indianapolis:</strong> $239,000</li>
            <li><strong>Typical cash offer (approximately 70% of market value):</strong> $167,000</li>
            <li><strong>Estimated repair deductions (if selling as-is):</strong> $7,500–$12,000</li>
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
        
        <p>If you want to maximize your sale price and can afford to wait a bit longer, working with a top-performing Indianapolis agent is a solid path. A good agent can help price your home right, stage it effectively, and market it to serious buyers.</p>
        
        <ul>
          <li><strong>Potential to get full market value</strong></li>
          <li><strong>Typical time to close:</strong> 45 to 70 days</li>
          <li><strong>Standard listing agent commission:</strong> 5–6% of the sale price</li>
        </ul>
        
        <h2>3. Compare Instant Offers with a Hybrid Approach</h2>
        
        <p>New programs in Indianapolis let you compare multiple offers from vetted investors while still having the option to list on the open market. This hybrid model offers flexibility:</p>
        
        <ul>
          <li>Review multiple cash offers with no obligation</li>
          <li>Choose a 7-day market program if you want to test the market</li>
          <li>Possibility of getting close to full market value</li>
        </ul>
        
        <h2>Summary</h2>
        
        <p>If you're looking to sell your house fast in Indianapolis, here's what to consider:</p>
        
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
        
        <h3>Common Beginner Mistakes</h3>
        <ul>
          <li>Not accounting for vacancy rates</li>
          <li>Underestimating repair costs</li>
          <li>Buying in declining neighborhoods</li>
          <li>Not having cash reserves</li>
          <li>Emotional decision-making</li>
        </ul>
        
        <h3>Getting Started Checklist</h3>
        <ol>
          <li>Set your investment budget</li>
          <li>Get pre-approved for financing</li>
          <li>Choose your target neighborhoods</li>
          <li>Build your team (realtor, contractor, property manager)</li>
          <li>Start analyzing deals</li>
          <li>Make offers on suitable properties</li>
        </ol>
        
        <p>Ready to start investing? Contact WillowBrook Real Estate Group to access our exclusive off-market properties perfect for investors!</p>
      `,
      date: "December 28, 2024",
      tags: ["Investor Tips", "Beginner Guide"],
      slug: "real-estate-investment-tips-beginners"
    },
    {
      id: 5,
      title: "What to Expect When Selling As-Is",
      excerpt: "Understanding the as-is selling process and what Indianapolis homeowners need to know before choosing this option.",
      content: `
        <h2>Selling Your Indianapolis Home As-Is: Complete Guide</h2>
        
        <p>Selling your home "as-is" means you're offering it in its current condition without making any repairs or improvements. This option is becoming increasingly popular among Indianapolis homeowners who want a quick, hassle-free sale.</p>
        
        <h3>What Does "As-Is" Really Mean?</h3>
        <p>When you sell as-is, you're telling buyers:</p>
        <ul>
          <li>The property is being sold in its current condition</li>
          <li>You won't make any repairs before closing</li>
          <li>Buyers should conduct their own inspections</li>
          <li>Any issues discovered are the buyer's responsibility</li>
        </ul>
        
        <h3>Who Should Consider As-Is Sales?</h3>
        <p>As-is sales work well for:</p>
        <ul>
          <li><strong>Inherited properties:</strong> When you don't want to invest in a property you didn't choose</li>
          <li><strong>Distressed homeowners:</strong> Facing foreclosure or financial hardship</li>
          <li><strong>Relocating families:</strong> Need to move quickly for work</li>
          <li><strong>Landlords:</strong> Tired of dealing with problem properties</li>
          <li><strong>Divorce situations:</strong> Want to divide assets quickly</li>
        </ul>
        
        <h3>Pros of Selling As-Is</h3>
        <ul>
          <li><strong>Save Money:</strong> No repair costs or improvement expenses</li>
          <li><strong>Save Time:</strong> No waiting for contractors or permits</li>
          <li><strong>Reduce Stress:</strong> Avoid managing renovation projects</li>
          <li><strong>Quick Sale:</strong> Appeal to investors and cash buyers</li>
          <li><strong>Certainty:</strong> No surprises during the selling process</li>
        </ul>
        
        <h3>Cons to Consider</h3>
        <ul>
          <li><strong>Lower Sale Price:</strong> Buyers discount for needed repairs</li>
          <li><strong>Smaller Buyer Pool:</strong> Most traditional buyers want move-in ready homes</li>
          <li><strong>Cash Offers Only:</strong> Banks rarely finance heavily distressed properties</li>
          <li><strong>Legal Disclosures:</strong> Still required to disclose known issues</li>
        </ul>
        
        <h3>The As-Is Process with Cash Buyers</h3>
        <p>When working with professional cash buyers like WillowBrook:</p>
        <ol>
          <li><strong>Initial Contact:</strong> Share basic property information</li>
          <li><strong>Property Visit:</strong> We evaluate condition and needed repairs</li>
          <li><strong>Market Analysis:</strong> Research comparable sales in your area</li>
          <li><strong>Cash Offer:</strong> Receive fair offer accounting for repairs needed</li>
          <li><strong>Quick Closing:</strong> Close on your timeline, often within 7 days</li>
        </ol>
        
        <h3>Legal Considerations</h3>
        <p>Even in as-is sales, you must:</p>
        <ul>
          <li>Complete seller's disclosure forms honestly</li>
          <li>Disclose known material defects</li>
          <li>Provide any available property records</li>
          <li>Allow buyer inspections (though you won't make repairs)</li>
        </ul>
        
        <h3>Pricing Your As-Is Property</h3>
        <p>Professional buyers consider:</p>
        <ul>
          <li>After-repair value (ARV) of the property</li>
          <li>Cost of needed repairs and improvements</li>
          <li>Current market conditions</li>
          <li>Time and effort required for renovations</li>
          <li>Profit margin for the investment risk</li>
        </ul>
        
        <h3>Red Flags to Avoid</h3>
        <p>Be cautious of buyers who:</p>
        <ul>
          <li>Make offers without seeing the property</li>
          <li>Can't provide proof of funds</li>
          <li>Request earnest money or upfront fees</li>
          <li>Change terms after agreement</li>
          <li>Lack local references or reviews</li>
        </ul>
        
        <h3>Is As-Is Right for You?</h3>
        <p>Consider this option if you:</p>
        <ul>
          <li>Need to sell quickly</li>
          <li>Don't want to invest in repairs</li>
          <li>Have a property requiring extensive work</li>
          <li>Value convenience over maximum price</li>
          <li>Want certainty of closing</li>
        </ul>
        
        <p>Ready to sell your Indianapolis property as-is? Contact WillowBrook Real Estate Group for your free, no-obligation evaluation!</p>
      `,
      date: "December 20, 2024",
      tags: ["Sell Fast", "As-Is Sales"],
      slug: "selling-as-is-indianapolis"
    },
    {
      id: 6,
      title: "Indianapolis Neighborhood Investment Guide",
      excerpt: "A comprehensive look at the best Indianapolis neighborhoods for real estate investment in 2025.",
      content: `
        <h2>Indianapolis Neighborhood Investment Guide: Where to Buy in 2025</h2>
        
        <p>Choosing the right neighborhood is crucial for real estate investment success. This comprehensive guide breaks down the best Indianapolis areas for different investment strategies.</p>
        
        <h3>Downtown Indianapolis</h3>
        <p><strong>Investment Type:</strong> Condos, lofts, rental properties</p>
        <p><strong>Average Price:</strong> $180,000 - $350,000</p>
        <p><strong>Rental Demand:</strong> High - young professionals, students</p>
        <p><strong>Pros:</strong></p>
        <ul>
          <li>Close to employment centers</li>
          <li>Cultural attractions and nightlife</li>
          <li>Public transportation access</li>
          <li>Strong rental demand</li>
        </ul>
        <p><strong>Cons:</strong> Higher property taxes, limited parking</p>
        
        <h3>Fountain Square</h3>
        <p><strong>Investment Type:</strong> Single-family homes, small multifamily</p>
        <p><strong>Average Price:</strong> $150,000 - $280,000</p>
        <p><strong>Rental Demand:</strong> High - artists, young professionals</p>
        <p><strong>Pros:</strong></p>
        <ul>
          <li>Hip, artistic community</li>
          <li>Growing restaurant and bar scene</li>
          <li>Good appreciation potential</li>
          <li>Walkable neighborhood</li>
        </ul>
        <p><strong>Cons:</strong> Some areas still transitioning</p>
        
        <h3>Broad Ripple</h3>
        <p><strong>Investment Type:</strong> Single-family, condos</p>
        <p><strong>Average Price:</strong> $180,000 - $320,000</p>
        <p><strong>Rental Demand:</strong> Very High - college students, young adults</p>
        <p><strong>Pros:</strong></p>
        <ul>
          <li>Established entertainment district</li>
          <li>Close to Butler University</li>
          <li>Strong rental income potential</li>
          <li>Good public transportation</li>
        </ul>
        <p><strong>Cons:</strong> Noise concerns, party atmosphere</p>
        
        <h3>Mass Ave (Massachusetts Avenue)</h3>
        <p><strong>Investment Type:</strong> Historic homes, lofts</p>
        <p><strong>Average Price:</strong> $200,000 - $400,000</p>
        <p><strong>Rental Demand:</strong> High - professionals, cultural enthusiasts</p>
        <p><strong>Pros:</strong></p>
        <ul>
          <li>Cultural district with theaters and galleries</li>
          <li>Historic charm and character</li>
          <li>Strong appreciation potential</li>
          <li>Walkable to downtown</li>
        </ul>
        <p><strong>Cons:</strong> Higher entry costs</p>
        
        <h3>Irvington</h3>
        <p><strong>Investment Type:</strong> Historic homes, fix-and-flip</p>
        <p><strong>Average Price:</strong> $120,000 - $250,000</p>
        <p><strong>Rental Demand:</strong> Moderate to High</p>
        <p><strong>Pros:</strong></p>
        <ul>
          <li>Historic neighborhood with character</li>
          <li>Lower entry costs</li>
          <li>Good bones in older homes</li>
          <li>Community revitalization efforts</li>
        </ul>
        <p><strong>Cons:</strong> Some areas need significant work</p>
        
        <h3>Near Southside</h3>
        <p><strong>Investment Type:</strong> Affordable rentals, first-time buyer homes</p>
        <p><strong>Average Price:</strong> $80,000 - $180,000</p>
        <p><strong>Rental Demand:</strong> Moderate</p>
        <p><strong>Pros:</strong></p>
        <ul>
          <li>Very affordable entry point</li>
          <li>Close to downtown employment</li>
          <li>Gentrification potential</li>
          <li>Good cash flow properties</li>
        </ul>
        <p><strong>Cons:</strong> Higher management requirements</p>
        
        <h3>Carmel (Northern Suburb)</h3>
        <p><strong>Investment Type:</strong> Single-family homes, luxury properties</p>
        <p><strong>Average Price:</strong> $300,000 - $600,000</p>
        <p><strong>Rental Demand:</strong> High - executives, families</p>
        <p><strong>Pros:</strong></p>
        <ul>
          <li>Top-rated school district</li>
          <li>Affluent community</li>
          <li>Low crime rates</li>
          <li>Strong appreciation history</li>
        </ul>
        <p><strong>Cons:</strong> Higher entry costs, property taxes</p>
        
        <h3>Fishers (Northern Suburb)</h3>
        <p><strong>Investment Type:</strong> Single-family homes, new construction</p>
        <p><strong>Average Price:</strong> $250,000 - $450,000</p>
        <p><strong>Rental Demand:</strong> High - tech workers, families</p>
        <p><strong>Pros:</strong></p>
        <ul>
          <li>Growing tech hub</li>
          <li>Excellent schools</li>
          <li>New development opportunities</li>
          <li>Family-friendly amenities</li>
        </ul>
        <p><strong>Cons:</strong> Competition from new construction</p>
        
        <h3>Investment Strategy by Neighborhood</h3>
        
        <p><strong>For Cash Flow:</strong> Near Southside, Irvington</p>
        <p><strong>For Appreciation:</strong> Fountain Square, Mass Ave, Carmel</p>
        <p><strong>For Beginners:</strong> Broad Ripple, Downtown</p>
        <p><strong>For Luxury:</strong> Carmel, select Downtown areas</p>
        <p><strong>For Fix-and-Flip:</strong> Irvington, Fountain Square</p>
        
        <h3>Due Diligence Checklist</h3>
        <p>Before investing in any neighborhood:</p>
        <ul>
          <li>Research crime statistics</li>
          <li>Check school ratings (affects rental demand)</li>
          <li>Analyze rental comps</li>
          <li>Review development plans</li>
          <li>Visit at different times of day</li>
          <li>Talk to local residents</li>
          <li>Check flood zone maps</li>
          <li>Review property tax trends</li>
        </ul>
        
        <h3>Emerging Areas to Watch</h3>
        <ul>
          <li><strong>Holy Cross:</strong> Up-and-coming near Fountain Square</li>
          <li><strong>Garfield Park:</strong> Southside revitalization</li>
          <li><strong>Riverside:</strong> Historic area seeing new interest</li>
          <li><strong>Herron-Morton:</strong> Near downtown, growing appeal</li>
        </ul>
        
        <p>Ready to invest in Indianapolis real estate? Contact WillowBrook Real Estate Group to access exclusive off-market properties in these prime neighborhoods!</p>
      `,
      date: "December 15, 2024",
      tags: ["Local Market", "Investor Tips"],
      slug: "indianapolis-neighborhood-investment-guide"
    }
  ];

  // If a post is selected, show the individual post
  if (selectedPost) {
    const post = blogPosts.find(p => p.id === selectedPost);
    return (
      <div className="pt-16">
        {/* Header */}
        <div className="bg-slate-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
              onClick={() => setSelectedPost(null)}
              className="text-orange-400 hover:text-orange-300 mb-4 flex items-center"
            >
              ← Back to Blog
            </button>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-300">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="prose prose-lg max-w-none blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* CTA Section */}
            <div className="mt-12 bg-orange-50 border border-orange-200 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Take Action?</h3>
              <p className="text-gray-600 mb-6">
                Get your free cash offer or join our investor list today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('sell-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium"
                >
                  Get Cash Offer
                </button>
                <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-medium">
                  Join Buyer List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default blog list view
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Real Estate Blog</h1>
          <p className="text-xl text-gray-300">
            Expert insights on Indianapolis real estate, investing, and home selling
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button 
                      onClick={() => setSelectedPost(post.id)}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-slate-900 rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest Indianapolis real estate insights delivered to your inbox
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-gray-900"
                required
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-2 rounded-md font-medium transition-colors duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-orange-500 hover:bg-orange-600'
                }`}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            
            {submitStatus === 'success' && (
              <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md">
                ✅ Successfully subscribed! Check your email.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-md">
                ❌ Failed to subscribe. Please try again.
              </div>
            )}
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
      case 'blog':
        return <BlogPage />;
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