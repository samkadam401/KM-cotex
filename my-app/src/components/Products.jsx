

import { useState, useEffect } from 'react';

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [animatedStats, setAnimatedStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      id: 1,
      name: "Organic Cotton Yarn",
      description: "100% certified organic cotton yarn for premium textile production",
      features: ["GOTS Certified", "Chemical Free", "Sustainable Farming", "Premium Quality"],
      growth: 85,
      image: "🧵"
    },
    {
      id: 2,
      name: "Cotton Fabric Rolls",
      description: "High-quality cotton fabric rolls for fashion and home textiles",
      features: ["Multiple Weaves", "Various GSM", "Eco-Friendly Dyes", "Custom Width"],
      growth: 72,
      image: "📜"
    },
    {
      id: 3,
      name: "Cotton Blends",
      description: "Innovative cotton blends for specialized applications",
      features: ["Cotton-Polyester", "Cotton-Linen", "Stretch Blends", "Technical Textiles"],
      growth: 68,
      image: "🔬"
    },
    {
      id: 4,
      name: "Specialty Cotton",
      description: "Premium specialty cotton for luxury applications",
      features: ["Egyptian Cotton", "Pima Cotton", "Organic Colors", "Luxury Finish"],
      growth: 91,
      image: "👑"
    }
  ];

  const growthData = {
    yearly: [65, 72, 78, 85, 88, 92],
    quarterly: [45, 52, 48, 55, 58, 62, 65, 68],
    monthly: [20, 25, 22, 28, 32, 35, 38, 40, 42, 45, 48, 52]
  };

  const handleContactClick = (productName) => {
    // You can integrate with your contact form or email
    alert(`Contacting about ${productName}. We'll get back to you with current pricing!`);
    // Alternatively, scroll to contact form
    // document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      {/* Header */}
      <div className="relative overflow-hidden bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-600">Premium Products</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of high-quality cotton products manufactured with sustainable practices and cutting-edge technology.
            </p>
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-4 max-w-2xl mx-auto">
              <p className="text-amber-800 font-medium flex items-center justify-center">
                <span className="text-xl mr-2">💬</span>
                Contact us for current pricing and bulk order discounts
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Growth Overview Section */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Growth Stats */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Market Growth & Performance</h2>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-6 bg-sky-50 rounded-2xl border border-sky-100">
                    <div className="text-3xl font-bold text-sky-600 mb-2">
                      {animatedStats ? "78%" : "0%"}
                    </div>
                    <div className="text-gray-600">Annual Growth</div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-100">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {animatedStats ? "92%" : "0%"}
                    </div>
                    <div className="text-gray-600">Customer Satisfaction</div>
                  </div>
                  <div className="text-center p-6 bg-amber-50 rounded-2xl border border-amber-100">
                    <div className="text-3xl font-bold text-amber-600 mb-2">
                      {animatedStats ? "45+" : "0"}
                    </div>
                    <div className="text-gray-600">Countries Served</div>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-2xl border border-purple-100">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {animatedStats ? "15K+" : "0"}
                    </div>
                    <div className="text-gray-600">Monthly Production</div>
                  </div>
                </div>

                {/* Growth Graph */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Revenue Growth Trend</h3>
                  <div className="flex items-end justify-between h-40 space-x-2">
                    {growthData.yearly.map((value, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-gradient-to-t from-sky-400 to-cyan-500 rounded-t-lg transition-all duration-1000 ease-out"
                          style={{ 
                            height: animatedStats ? `${value}%` : '0%',
                            transitionDelay: `${index * 200}ms`
                          }}
                        ></div>
                        <div className="text-xs text-gray-600 mt-2">Y{2020 + index}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Growth Highlights */}
              <div className="flex-1">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-sky-500 to-cyan-600 rounded-2xl text-white">
                    <span className="text-2xl">📈</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Rapid Market Expansion</h3>
                      <p className="text-sky-100">78% growth in international markets with 15+ new countries added this year.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl text-white">
                    <span className="text-2xl">🌱</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Sustainable Growth</h3>
                      <p className="text-green-100">65% reduction in water consumption while increasing production capacity.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl text-white">
                    <span className="text-2xl">⭐</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Quality Recognition</h3>
                      <p className="text-amber-100">92% customer satisfaction rate with multiple industry awards.</p>
                    </div>
                  </div>

                  {/* Contact CTA Box */}
                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl text-white">
                    <span className="text-2xl">📞</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Get Current Pricing</h3>
                      <p className="text-purple-100">Contact our sales team for real-time pricing and custom quotations.</p>
                      <button 
                        onClick={() => handleContactClick("All Products")}
                        className="mt-3 bg-white text-purple-600 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition duration-300"
                      >
                        Contact Sales Team
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Product Range</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{product.image}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
                        <p className="text-gray-600">{product.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Growth Indicator */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 font-medium">Market Demand</span>
                      <span className="text-green-600 font-bold">{product.growth}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: animatedStats ? `${product.growth}%` : '0%' }}
                      ></div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <span className="text-green-500">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Note */}
                  <div className="mb-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="flex items-center text-blue-800">
                      <span className="text-lg mr-2">💬</span>
                      <span className="text-sm font-medium">Contact us for current market pricing and bulk discounts</span>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <button 
                    onClick={() => handleContactClick(product.name)}
                    className="w-full bg-gradient-to-r from-sky-500 to-cyan-600 text-white py-3 rounded-xl font-bold hover:from-sky-600 hover:to-cyan-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                  >
                    <span>📞</span>
                    <span>Contact Us for Pricing</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get Custom Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our pricing varies based on market conditions, order quantity, and customization requirements. 
              Contact us for the most current rates and special bulk discounts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-sky-50 rounded-2xl border border-sky-100">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Bulk Orders</h3>
              <p className="text-gray-600 mb-4">Special discounts for large quantity orders</p>
              <button 
                onClick={() => handleContactClick("Bulk Orders")}
                className="bg-sky-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-sky-600 transition duration-300"
              >
                Get Quote
              </button>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-100">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Custom Requirements</h3>
              <p className="text-gray-600 mb-4">Tailored solutions for specific needs</p>
              <button 
                onClick={() => handleContactClick("Custom Requirements")}
                className="bg-green-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-600 transition duration-300"
              >
                Discuss Needs
              </button>
            </div>

            <div className="text-center p-6 bg-amber-50 rounded-2xl border border-amber-100">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Immediate Assistance</h3>
              <p className="text-gray-600 mb-4">Talk directly with our sales team</p>
              <button 
                onClick={() => handleContactClick("Immediate Assistance")}
                className="bg-amber-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-amber-600 transition duration-300"
              >
                Call Now
              </button>
            </div>
          </div>
        </div>

        {/* Additional Growth Metrics */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Detailed Performance Metrics</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Production Growth */}
            <div className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Production Capacity</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">+65%</div>
              <div className="w-full bg-blue-200 rounded-full h-3">
                <div 
                  className="bg-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: animatedStats ? '65%' : '0%' }}
                ></div>
              </div>
            </div>

            {/* Export Growth */}
            <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-100">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Export Growth</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">+82%</div>
              <div className="w-full bg-green-200 rounded-full h-3">
                <div 
                  className="bg-green-500 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: animatedStats ? '82%' : '0%' }}
                ></div>
              </div>
            </div>

            {/* Sustainability Impact */}
            <div className="text-center p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Eco Impact</h3>
              <div className="text-3xl font-bold text-emerald-600 mb-4">-45%</div>
              <div className="w-full bg-emerald-200 rounded-full h-3">
                <div 
                  className="bg-emerald-500 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: animatedStats ? '45%' : '0%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

