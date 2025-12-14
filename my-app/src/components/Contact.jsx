
import { useState } from 'react';

export default function ContactUs() {
  const [activeTab, setActiveTab] = useState('contact');

  const contactMethods = [
    {
      icon: '📞',
      title: 'Call Us Directly',
      details: '+91 98765 43210',
      description: 'Speak with our cotton experts directly',
      subtitle: 'Available Mon-Fri 9am-6pm',
      action: 'tel:+919876543210',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: '📧',
      title: 'Send Us an Email',
      details: 'sales@kmcotex.com',
      description: 'Get detailed quotes and product information',
      subtitle: 'Response within 24 hours',
      action: 'mailto:sales@kmcotex.com',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: '💬',
      title: 'WhatsApp Business',
      details: '+91 98765 43210',
      description: 'Quick queries and instant responses',
      subtitle: 'Online 24/7 for quick replies',
      action: 'https://wa.me/919876543210',
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: '📍',
      title: 'Visit Our Factory',
      details: '123 Cotton Road, Textile City',
      description: 'See our manufacturing process firsthand',
      subtitle: 'Schedule a factory tour',
      action: 'https://maps.google.com',
      color: 'from-orange-500 to-amber-600'
    }
  ];

  const departments = [
    {
      name: 'Sales & Pricing',
      contact: 'sales@kmcotex.com',
      phone: '+91 98765 43211',
      description: 'Product inquiries, pricing, and orders',
      icon: '💰'
    },
    {
      name: 'Technical Support',
      contact: 'tech@kmcotex.com',
      phone: '+91 98765 43212',
      description: 'Product specifications and technical details',
      icon: '🔧'
    },
    {
      name: 'Quality Control',
      contact: 'quality@kmcotex.com',
      phone: '+91 98765 43213',
      description: 'Quality standards and certifications',
      icon: '⭐'
    },
    {
      name: 'Export Department',
      contact: 'export@kmcotex.com',
      phone: '+91 98765 43214',
      description: 'International orders and shipping',
      icon: '🌍'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      {/* Header Section */}
      <div className="relative bg-white shadow-sm overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-cyan-600 opacity-5"></div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-600">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Ready to experience premium quality cotton? Get in touch with our team for samples, pricing, and expert consultation.
            </p>
            
            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-2xl text-sky-600 mb-2">🚀</div>
                <div className="text-2xl font-bold text-gray-800">24h</div>
                <div className="text-gray-600 text-sm">Response Time</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-2xl text-green-600 mb-2">💬</div>
                <div className="text-2xl font-bold text-gray-800">4+</div>
                <div className="text-gray-600 text-sm">Contact Methods</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-2xl text-amber-600 mb-2">🌍</div>
                <div className="text-2xl font-bold text-gray-800">15+</div>
                <div className="text-gray-600 text-sm">Countries Served</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-2xl text-purple-600 mb-2">⭐</div>
                <div className="text-2xl font-bold text-gray-800">30+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Contact Methods Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Choose Your Preferred <span className="text-sky-600">Contact Method</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Multiple ways to reach us. We're here to help with all your cotton needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="group bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center text-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-sky-600 transition-colors duration-300">
                  {method.title}
                </h3>
                
                <p className="text-gray-700 text-lg font-semibold mb-2">
                  {method.details}
                </p>
                
                <p className="text-gray-600 mb-3">
                  {method.description}
                </p>
                
                <p className="text-gray-500 text-sm">
                  {method.subtitle}
                </p>

                {/* Animated Arrow */}
                <div className="mt-4 flex items-center text-sky-600 font-semibold">
                  <span>Contact Now</span>
                  <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Department Contacts */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Department <span className="text-sky-600">Contacts</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Connect with the right team for your specific requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-3xl mb-4 text-sky-600">{dept.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{dept.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{dept.description}</p>
                
                <div className="space-y-2">
                  <a href={`mailto:${dept.contact}`} className="block text-sky-600 hover:text-sky-700 font-medium text-sm">
                    📧 {dept.contact}
                  </a>
                  <a href={`tel:${dept.phone}`} className="block text-gray-700 hover:text-gray-900 font-medium text-sm">
                    📞 {dept.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Map Graphics */}
              <div className="bg-gradient-to-br from-sky-500 to-cyan-600 p-8 lg:p-12 relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-white/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                
                <div className="relative z-10 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Manufacturing Hub</h2>
                  <p className="text-sky-100 text-lg mb-6">
                    Visit our state-of-the-art cotton processing facility and see quality in action.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🏭</span>
                      <div>
                        <div className="font-semibold">Modern Facility</div>
                        <div className="text-sky-100 text-sm">50,000 sq. ft. manufacturing unit</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🚚</span>
                      <div>
                        <div className="font-semibold">Easy Access</div>
                        <div className="text-sky-100 text-sm">Major highway connectivity</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🅿️</span>
                      <div>
                        <div className="font-semibold">Visitor Parking</div>
                        <div className="text-sky-100 text-sm">Ample space available</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Details */}
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Factory Location</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl text-sky-600">📍</span>
                    <div>
                      <h4 className="font-bold text-gray-800">KM Cotex Manufacturing Unit</h4>
                      <p className="text-gray-600">123 Cotton Road, Textile Industrial Area</p>
                      <p className="text-gray-600">Textile City - 123456</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <span className="text-2xl text-green-600">🕒</span>
                    <div>
                      <h4 className="font-bold text-gray-800">Factory Visit Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <span className="text-2xl text-amber-600">📋</span>
                    <div>
                      <h4 className="font-bold text-gray-800">Tour Information</h4>
                      <p className="text-gray-600">Guided factory tours available</p>
                      <p className="text-gray-600">Prior appointment recommended</p>
                    </div>
                  </div>

                  <a 
                    href="https://maps.google.com"
                    className="inline-flex items-center space-x-2 bg-sky-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-sky-600 transition duration-300"
                  >
                    <span>🗺️</span>
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}