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
      name: "Cotton Bales",
      description: "High-quality cotton bales suitable for textile and industrial applications.",
      features: ["GOTS Certified", "Chemical Free", "Sustainable Farming", "Premium Quality"],
      growth: 85,
      
    },
    {
      id: 2,
      name: "Cotton Seeds",
      description: "Quality cotton seeds suitable for industrial and agricultural use.",
      features: ["Multiple Weaves", "Various GSM", "Eco-Friendly Dyes", "Custom Width"],
      growth: 72,
      
    },
    {
      id: 3,
      name: "Cotton Seed Oil",
      description: "Refined cotton seed oil suitable for various commercial uses.",
      features: ["Cotton-Polyester", "Cotton-Linen", "Stretch Blends", "Technical Textiles"],
      growth: 68,
    
    },
    {
      id: 4,
      name: "Cotton Seed Cake",
      description: "High-quality cotton seed cake suitable for animal feed and agricultural applications.",
      features: ["Egyptian Cotton", "Pima Cotton", "Organic Colors", "Luxury Finish"],
      growth: 91,
   
    },
    {
      id: 5,
      name: "Chickpea",
      description: "High-quality chickpeas, carefully selected and suitable for diverse culinary and commercial applications. ",
      features: ["Egyptian Cotton", "Pima Cotton", "Organic Colors", "Luxury Finish"],
      growth: 91,
   
    },
    {
      id: 6,
      name: "Maize",
      description: "Carefully selected maize suitable for various commercial and industrial applications",
      features: ["Egyptian Cotton", "Pima Cotton", "Organic Colors", "Luxury Finish"],
      growth: 91,
   
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
    <div className="min-h-screen bg-gradient-to-br from-sky-30 via-white to-cyan-50 pt-24 sm:pt-28 md:pt-32">

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
             
            </div>

            <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-100">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Custom Requirements</h3>
              <p className="text-gray-600 mb-4">Tailored solutions for specific needs</p>
              
            </div>

            <div className="text-center p-6 bg-amber-50 rounded-2xl border border-amber-100">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Immediate Assistance</h3>
              <p className="text-gray-600 mb-4">Talk directly with our sales team</p>
              
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}

