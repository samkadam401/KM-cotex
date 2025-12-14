import { useState } from "react";
import img from "./assets/cotton.jpg"; // 🏭 image import


export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Navbar */}
     <nav className="shadow-md  backdrop-blur-sm fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide text-sky-700 drop-shadow-[0_0_6px_white]">
  K.M.<span className="text-sky-400 drop-shadow-[0_0_6px_white]">Cotex Pvt.Ltd.</span>
</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-white font-medium">
            <li>
              <a href="#" className="hover:text-sky-600 transition">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-600 transition">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-600 transition">Products</a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-600 transition">Contact</a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-sky-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden bg-white px-6 pb-4 space-y-3 text-gray-700 font-medium border-t">
            <li>
              <a href="#" className="block hover:text-sky-600 transition">Home</a>
            </li>
            <li>
              <a href="#" className="block hover:text-sky-600 transition">About</a>
            </li>
            <li>
              <a href="#" className="block hover:text-sky-600 transition">Products</a>
            </li>
            <li>
              <a href="#" className="block hover:text-sky-600 transition">Contact</a>
            </li>
          </ul>
        )}
      </nav>

      {/* Home Page Content */}
      <section
        className="pt-28 min-h-screen flex items-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 text-left max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-white">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-500 to-cyan-400 drop-shadow-lg whitespace-nowrap">
              K.M. Cotex Pvt.Ltd.
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-medium max-w-full sm:max-w-md md:max-w-xl">
            Premium quality cotton manufacturing with sustainable practices and advanced technology.
          </p>

          <button className="mt-4 sm:mt-6 md:mt-8 bg-sky-600 text-white px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg shadow-lg hover:bg-sky-700 transition transform hover:scale-105">
            Explore Products
          </button>
        </div>
      </section>

      {/* Enhanced Our Journey Section */}
      <section className="py-16 bg-gradient-to-br from-white to-sky-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 relative">
              Our Journey
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 mt-4 rounded-full"></div>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the remarkable story of our growth from a small startup to an industry leader
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content - Company Story */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-800 leading-tight">
                  From Humble Beginnings to <span className="text-sky-500">Industry Leader</span>
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Founded in 1990, KM Cotex started as a small cotton processing unit with just 20 employees. 
                  Our founder, Mr. K.M. Sharma, had a vision to revolutionize the cotton industry with sustainable 
                  practices and superior quality.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Over the years, we've grown into one of the region's most trusted cotton manufacturers, 
                  serving clients across the globe while maintaining our commitment to environmental responsibility.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Today, we operate state-of-the-art facilities with advanced technology, but our core values 
                  remain unchanged - quality, integrity, and innovation.
                </p>
                
                {/* Call to Action Button */}
                <div className="pt-4">
                  <button className="px-6 py-3 bg-sky-500 text-white font-medium rounded-lg hover:bg-sky-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    Learn More About Us
                  </button>
                </div>
              </div>
              
              {/* Right Content - Timeline */}
              <div className="relative overflow-hidden p-8 rounded-2xl shadow-lg border border-gray-100 bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl">
                {/* Floating Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-sky-100 rounded-full -ml-12 -mb-12 opacity-50"></div>
                
                {/* Timeline Header */}
                <h4 className="text-2xl font-bold text-gray-800 mb-8 relative z-10">Our Milestones</h4>
                
                {/* Timeline Items */}
                <div className="space-y-8 relative z-10">
                  {/* Timeline Item 1 - 1990 */}
                  <div className="pl-8 relative transition-all duration-300 hover:-translate-y-2 group">
                    <div className="absolute left-0 top-4 w-3 h-3 bg-sky-500 rounded-full group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-sky-200 transition-all duration-300"></div>
                    <div className="flex items-start">
                      <div className="bg-sky-100 text-sky-600 p-3 rounded-full mr-4 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white group-hover:rotate-12 group-hover:scale-110">
                        <i className="fas fa-seedling text-lg"></i>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 text-lg">1990</h5>
                        <p className="text-gray-600">Founded with a small cotton processing unit</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Item 2 - 2005 */}
                  <div className="pl-8 relative transition-all duration-300 hover:-translate-y-2 group">
                    <div className="absolute left-0 top-4 w-3 h-3 bg-sky-500 rounded-full group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-sky-200 transition-all duration-300"></div>
                    <div className="flex items-start">
                      <div className="bg-sky-100 text-sky-600 p-3 rounded-full mr-4 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white group-hover:rotate-12 group-hover:scale-110">
                        <i className="fas fa-industry text-lg"></i>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 text-lg">2005</h5>
                        <p className="text-gray-600">Expanded to full-scale manufacturing facility</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Item 3 - 2015 */}
                  <div className="pl-8 relative transition-all duration-300 hover:-translate-y-2 group">
                    <div className="absolute left-0 top-4 w-3 h-3 bg-sky-500 rounded-full group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-sky-200 transition-all duration-300"></div>
                    <div className="flex items-start">
                      <div className="bg-sky-100 text-sky-600 p-3 rounded-full mr-4 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white group-hover:rotate-12 group-hover:scale-110">
                        <i className="fas fa-award text-lg"></i>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 text-lg">2015</h5>
                        <p className="text-gray-600">Received ISO certification for quality management</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Item 4 - 2020 */}
                  <div className="pl-8 relative transition-all duration-300 hover:-translate-y-2 group">
                    <div className="absolute left-0 top-4 w-3 h-3 bg-sky-500 rounded-full group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-sky-200 transition-all duration-300"></div>
                    <div className="flex items-start">
                      <div className="bg-sky-100 text-sky-600 p-3 rounded-full mr-4 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white group-hover:rotate-12 group-hover:scale-110">
                        <i className="fas fa-globe text-lg"></i>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 text-lg">2020</h5>
                        <p className="text-gray-600">Began international exports to 15+ countries</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
  <section className="py-20 bg-gradient-to-br from-white to-sky-50 relative overflow-hidden">
  {/* Background Cotton Elements */}
  <div className="absolute top-10 left-10 opacity-10">
    <span className="text-6xl">🏭</span>
  </div>
  <div className="absolute bottom-10 right-10 opacity-10">
    <span className="text-6xl">🧵</span>
  </div>
  <div className="absolute top-1/2 left-1/4 opacity-5">
    <span className="text-8xl">🌱</span>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Group Photo Section - Top */}
    <div className="mb-20 group">
      <div className="bg-gradient-to-r from-sky-500 to-cyan-600 rounded-3xl shadow-2xl overflow-hidden border border-sky-200 transform transition-all duration-700 hover:scale-[1.01]">
        <div className="relative h-64 md:h-80 lg:h-96 bg-gradient-to-br from-sky-400 to-cyan-500 overflow-hidden">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500"></div>
          
          {/* Group Photo Placeholder - You can replace with actual group photo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <span className="text-6xl mb-4 block">👥</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">The KM Cotex Family</h3>
              <p className="text-sky-100 text-lg">Dedicated to Excellence in Cotton Manufacturing</p>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-8 left-8 animate-float">
            <span className="text-3xl text-white/40">🏭</span>
          </div>
          <div className="absolute bottom-8 right-8 animate-float" style={{animationDelay: '1s'}}>
            <span className="text-3xl text-white/40">🧵</span>
          </div>
          <div className="absolute top-1/2 left-1/3 animate-float" style={{animationDelay: '2s'}}>
            <span className="text-2xl text-white/30">🌱</span>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 relative">
        Our Leadership Team
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mt-4 rounded-full"></div>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Meet the visionaries driving innovation in cotton manufacturing
      </p>
    </div>

    {/* Team Member 1 - Founder & CEO */}
    <div className="mb-20 group">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-100 transform transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl">
        {/* Left Side - Photo with Animation */}
        <div className="relative h-80 lg:h-96 bg-gradient-to-br from-amber-400 to-orange-500 overflow-hidden">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-500"></div>
          
          {/* Profile Photo Container */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative w-64 h-64 bg-white/10 rounded-2xl border-4 border-white/30 backdrop-blur-sm overflow-hidden shadow-2xl">
              {/* Replace this div with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center">
                <span className="text-4xl text-white">👑</span>
              </div>
              {/* Photo Frame Decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/50"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/50"></div>
            </div>
          </div>
          
          {/* Floating Cotton Elements */}
          <div className="absolute top-6 left-6 animate-float">
            <span className="text-xl text-white/60">🌸</span>
          </div>
          <div className="absolute bottom-8 right-8 animate-float" style={{animationDelay: '1s'}}>
            <span className="text-xl text-white/60">🌿</span>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="p-8 lg:p-12">
          <div className="flex items-center mb-6">
            <div className="w-3 h-12 bg-amber-500 rounded-full mr-4"></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">Manoj Jain</h3>
              <p className="text-amber-600 font-semibold text-lg mt-1">Founder & CEO</p>
            </div>
          </div>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            With over <span className="text-amber-600 font-semibold">30+ years</span> in the cotton industry, 
            Mr. Sharma founded KM Cotex with a vision to revolutionize sustainable cotton manufacturing. 
            His leadership has guided us from humble beginnings to becoming industry leaders.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full font-medium flex items-center text-sm">
              <span className="mr-2">🌱</span> Sustainability
            </span>
            <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium flex items-center text-sm">
              <span className="mr-2">💡</span> Innovation
            </span>
            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium flex items-center text-sm">
              <span className="mr-2">👑</span> Leadership
            </span>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <p className="text-gray-500 text-sm">
              <span className="font-semibold">Expertise:</span> Cotton Processing • Sustainable Manufacturing • Business Strategy
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Team Member 2 - Operations Director */}
    <div className="mb-20 group">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl shadow-2xl overflow-hidden border border-green-100 transform transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl">
        {/* Right Side - Content */}
        <div className="p-8 lg:p-12 order-2 lg:order-1">
          <div className="flex items-center mb-6">
            <div className="w-3 h-12 bg-green-500 rounded-full mr-4"></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">Vipin Jain</h3>
              <p className="text-green-600 font-semibold text-lg mt-1">Operations Director</p>
            </div>
          </div>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            <span className="text-green-600 font-semibold">15 years</span> of expertise in supply chain optimization 
            and manufacturing operations. Ensures seamless coordination across all production units while maintaining 
            the highest efficiency standards in our cotton processing.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium flex items-center text-sm">
              <span className="mr-2">⚙️</span> Operations
            </span>
            <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-medium flex items-center text-sm">
              <span className="mr-2">📦</span> Supply Chain
            </span>
            <span className="bg-lime-100 text-lime-700 px-4 py-2 rounded-full font-medium flex items-center text-sm">
              <span className="mr-2">🚀</span> Efficiency
            </span>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <p className="text-gray-500 text-sm">
              <span className="font-semibold">Expertise:</span> Production Management • Logistics • Process Optimization
            </p>
          </div>
        </div>

        {/* Left Side - Photo with Animation */}
        <div className="relative h-80 lg:h-96 bg-gradient-to-br from-green-400 to-emerald-500 overflow-hidden order-1 lg:order-2">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-500"></div>
          
          {/* Profile Photo Container */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative w-64 h-64 bg-white/10 rounded-2xl border-4 border-white/30 backdrop-blur-sm overflow-hidden shadow-2xl">
              {/* Replace this div with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-green-300 to-emerald-400 flex items-center justify-center">
                <span className="text-4xl text-white">⚙️</span>
              </div>
              {/* Photo Frame Decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/50"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/50"></div>
            </div>
          </div>
          
          {/* Floating Cotton Elements */}
          <div className="absolute top-8 right-6 animate-float">
            <span className="text-xl text-white/60">🌿</span>
          </div>
          <div className="absolute bottom-6 left-8 animate-float" style={{animationDelay: '1.5s'}}>
            <span className="text-xl text-white/60">🌸</span>
          </div>
        </div>
      </div>
    </div>

    {/* Team Member 3 - Quality Control Head */}
    <div className="mb-20 group">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100 transform transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl">
        {/* Left Side - Photo with Animation */}
        <div className="relative h-80 lg:h-96 bg-gradient-to-br from-blue-400 to-cyan-500 overflow-hidden">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-500"></div>
          
          {/* Profile Photo Container */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative w-64 h-64 bg-white/10 rounded-2xl border-4 border-white/30 backdrop-blur-sm overflow-hidden shadow-2xl">
              {/* Replace this div with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-blue-300 to-cyan-400 flex items-center justify-center">
                <span className="text-4xl text-white">🔍</span>
              </div>
              {/* Photo Frame Decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/50"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/50"></div>
            </div>
          </div>
          
          {/* Floating Cotton Elements */}
          <div className="absolute top-6 right-8 animate-float">
            <span className="text-xl text-white/60">⭐</span>
          </div>
          <div className="absolute bottom-8 left-6 animate-float" style={{animationDelay: '2s'}}>
            <span className="text-xl text-white/60">🎯</span>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="p-8 lg:p-12">
          <div className="flex items-center mb-6">
            <div className="w-3 h-12 bg-blue-500 rounded-full mr-4"></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">Mohit Jain</h3>
              <p className="text-blue-600 font-semibold text-lg mt-1">Head of Quality Control</p>
            </div>
          </div>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Implements <span className="text-blue-600 font-semibold">rigorous testing protocols</span> and quality 
            assurance measures to maintain our premium standards. His attention to detail ensures every cotton 
            product meets international quality benchmarks.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium flex items-center text-sm">
              <span className="mr-2">⭐</span> Quality
            </span>
            <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full font-medium flex items-center text-sm">
              <span className="mr-2">🔬</span> Testing
            </span>
            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium flex items-center text-sm">
              <span className="mr-2">📏</span> Standards
            </span>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <p className="text-gray-500 text-sm">
              <span className="font-semibold">Expertise:</span> Quality Assurance • Testing Protocols • International Standards
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Team Member 4 - Sustainability Manager */}
    <div className="group">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-100 transform transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl">
        {/* Right Side - Content */}
        <div className="p-8 lg:p-12 order-2 lg:order-1">
          <div className="flex items-center mb-6">
            <div className="w-3 h-12 bg-emerald-500 rounded-full mr-4"></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">Sohit Jain</h3>
              <p className="text-emerald-600 font-semibold text-lg mt-1">Sustainability Manager</p>
            </div>
          </div>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Leads our <span className="text-emerald-600 font-semibold">environmental initiatives</span>, focusing 
            on reducing water consumption, carbon footprint, and implementing sustainable manufacturing practices 
            throughout our cotton production operations.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-medium flex items-center text-sm">
              <span className="mr-2">🌍</span> Eco-friendly
            </span>
            <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full font-medium flex items-center text-sm">
              <span className="mr-2">💧</span> Conservation
            </span>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium flex items-center text-sm">
              <span className="mr-2">♻️</span> Green Tech
            </span>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <p className="text-gray-500 text-sm">
              <span className="font-semibold">Expertise:</span> Environmental Management • Water Conservation • Sustainable Practices
            </p>
          </div>
        </div>

        {/* Left Side - Photo with Animation */}
        <div className="relative h-80 lg:h-96 bg-gradient-to-br from-emerald-400 to-teal-500 overflow-hidden order-1 lg:order-2">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-500"></div>
          
          {/* Profile Photo Container */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative w-64 h-64 bg-white/10 rounded-2xl border-4 border-white/30 backdrop-blur-sm overflow-hidden shadow-2xl">
              {/* Replace this div with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-emerald-300 to-teal-400 flex items-center justify-center">
                <span className="text-4xl text-white">🌍</span>
              </div>
              {/* Photo Frame Decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/50"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/50"></div>
            </div>
          </div>
          
          {/* Floating Cotton Elements */}
          <div className="absolute top-8 left-6 animate-float">
            <span className="text-xl text-white/60">🍃</span>
          </div>
          <div className="absolute bottom-6 right-8 animate-float" style={{animationDelay: '2.5s'}}>
            <span className="text-xl text-white/60">💧</span>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Group Photo Section */}
    <div className="mt-20 group">
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl shadow-2xl overflow-hidden border border-amber-200 transform transition-all duration-700 hover:scale-[1.01]">
        <div className="relative h-64 md:h-80 lg:h-96 bg-gradient-to-br from-amber-400 to-orange-500 overflow-hidden">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500"></div>
          
          {/* Team Collaboration Photo Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <span className="text-6xl mb-4 block">🤝</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Together We Grow</h3>
              <p className="text-amber-100 text-lg">Building the Future of Cotton Manufacturing</p>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-10 right-10 animate-float">
            <span className="text-3xl text-white/40">🌾</span>
          </div>
          <div className="absolute bottom-10 left-10 animate-float" style={{animationDelay: '1.5s'}}>
            <span className="text-3xl text-white/40">🏆</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
  `}</style>
</section>

      {/* Values Section */}
  <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-sky-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-30"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative">
        Our Core Values
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 mt-4 rounded-full"></div>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        The principles that guide our journey towards excellence in cotton manufacturing
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Value 1 - Sustainability */}
      <div className="group">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-sky-100 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl h-full">
          {/* Animated Graph */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto relative">
              {/* Outer Circle */}
              <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
              {/* Animated Progress Circle */}
              <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-green-500 border-r-green-400 animate-spin-slow"></div>
              {/* Inner Content */}
              <div className="absolute inset-4 rounded-full bg-green-50 flex items-center justify-center">
                <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🌱</span>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Sustainability</h3>
          <p className="text-gray-600 text-center leading-relaxed mb-6">
            We prioritize eco-friendly practices, water conservation, and reducing our environmental impact at every stage of production.
          </p>

          {/* Stats Bar */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Eco-Friendly Practices</span>
              <span className="text-green-600 font-semibold">95%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full w-0 group-hover:w-11/12 transition-all duration-1000 ease-out"></div>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Water Conservation</span>
              <span className="text-green-600 font-semibold">88%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-cyan-500 h-2 rounded-full w-0 group-hover:w-10/12 transition-all duration-1000 ease-out delay-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Value 2 - Quality */}
      <div className="group">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-amber-100 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl h-full">
          {/* Animated Graph */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto relative">
              {/* Pyramid Base */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-3 bg-amber-200 rounded-full"></div>
              {/* Animated Pyramid */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-16 border-r-16 border-b-20 border-transparent border-b-amber-400 group-hover:border-b-amber-500 transition-all duration-500"></div>
              {/* Quality Star */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-3xl animate-bounce">⭐</div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-2 right-4 w-5 h-5 bg-amber-300 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-6 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Quality Excellence</h3>
          <p className="text-gray-600 text-center leading-relaxed mb-6">
            Every product undergoes rigorous quality checks to ensure we deliver only the finest cotton materials to our customers.
          </p>

          {/* Quality Metrics */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-sm">Product Quality</span>
              <div className="flex space-x-1">
                {[1,2,3,4,5].map((star) => (
                  <span key={star} className="text-amber-400 text-lg">⭐</span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-sm">Customer Satisfaction</span>
              <span className="text-amber-600 font-bold">98%</span>
            </div>
            
            <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white text-center py-2 rounded-full text-sm font-semibold transform group-hover:scale-105 transition-transform duration-300">
              ISO 9001 Certified
            </div>
          </div>
        </div>
      </div>

      {/* Value 3 - Integrity */}
      <div className="group">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl h-full">
          {/* Animated Graph */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto relative">
              {/* Connection Lines */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-1 bg-blue-300 rounded-full rotate-0 group-hover:rotate-45 transition-transform duration-500"></div>
                <div className="w-20 h-1 bg-blue-300 rounded-full rotate-90 group-hover:rotate-135 transition-transform duration-500 delay-200 absolute top-0"></div>
              </div>
              {/* Central Circle */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-300 flex items-center justify-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🤝</span>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 left-6 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-6 right-4 w-3 h-3 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Integrity & Trust</h3>
          <p className="text-gray-600 text-center leading-relaxed mb-6">
            We maintain transparent relationships with suppliers, partners, and customers, built on trust and mutual respect.
          </p>

          {/* Trust Metrics */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Supplier Relationships</span>
              <div className="text-blue-600 font-bold text-lg">15+ Years</div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Client Retention</span>
              <div className="text-blue-600 font-bold text-lg">92%</div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-2 rounded-full text-sm font-semibold transform group-hover:scale-105 transition-transform duration-300">
              Trust Score: 9.8/10
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Stats Section */}
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
        <div className="text-3xl font-bold text-sky-600 mb-2">30+</div>
        <div className="text-gray-600">Years Experience</div>
      </div>
      <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
        <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
        <div className="text-gray-600">Team Members</div>
      </div>
      <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
        <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
        <div className="text-gray-600">Countries Served</div>
      </div>
      <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
        <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
        <div className="text-gray-600">Quality Focus</div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .animate-spin-slow {
      animation: spin-slow 3s linear infinite;
    }
  `}</style>
</section>

      {/* CTA Section */}
   <section className="py-20 relative overflow-hidden bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-600">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Floating Cotton Balls */}
    <div className="absolute top-10 left-10 w-6 h-6 bg-white/20 rounded-full animate-float"></div>
    <div className="absolute top-20 right-20 w-4 h-4 bg-white/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
    <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-white/15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
    <div className="absolute bottom-10 right-1/3 w-5 h-5 bg-white/25 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
    <div className="absolute top-1/3 left-1/3 w-7 h-7 bg-white/20 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
    
    {/* Animated Waves */}
    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/10 to-transparent"></div>
    
    {/* Sparkle Elements */}
    <div className="absolute top-1/4 right-1/4 animate-pulse">
      <span className="text-2xl opacity-40">✨</span>
    </div>
    <div className="absolute bottom-1/3 left-1/4 animate-pulse" style={{animationDelay: '1s'}}>
      <span className="text-xl opacity-30">⭐</span>
    </div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      {/* Main Heading with Animation */}
      <div className="mb-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
          Ready to Experience{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-300">
            Premium Quality
          </span>{' '}
          Cotton?
        </h2>
      </div>

      {/* Subtitle with Icon */}
      <div className="flex items-center justify-center mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
          <span className="text-2xl">🌱</span>
          <p className="text-xl md:text-2xl font-medium text-white/90">
            Sustainably Grown • Ethically Produced • Premium Quality
          </p>
          <span className="text-2xl">🧵</span>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
        <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <span className="text-3xl">💧</span>
          <div className="text-left">
            <div className="font-semibold text-white">Water Efficient</div>
            <div className="text-white/70 text-sm">80% Less Water</div>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <span className="text-3xl">🌍</span>
          <div className="text-left">
            <div className="font-semibold text-white">Eco-Friendly</div>
            <div className="text-white/70 text-sm">Zero Chemicals</div>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <span className="text-3xl">⭐</span>
          <div className="text-left">
            <div className="font-semibold text-white">Premium Quality</div>
            <div className="text-white/70 text-sm">ISO Certified</div>
          </div>
        </div>
      </div>

      {/* CTA Buttons Group */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
        {/* Main CTA Button */}
        <button className="group relative bg-white text-sky-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 min-w-[200px]">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-yellow-300 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10 flex items-center justify-center space-x-2">
            <span>Explore Our Products</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
          
          {/* Button Shine Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </button>

        {/* Secondary Button */}
        <button className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-500 transform hover:scale-105 min-w-[180px]">
          <span className="flex items-center justify-center space-x-2">
            <span>📞</span>
            <span>Contact Sales</span>
          </span>
        </button>
      </div>

      {/* Trust Indicators */}
      <div className="mt-12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
        <p className="text-white/70 mb-6 text-lg">Trusted by Industry Leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
          <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
            <span className="text-white font-semibold">🏆 30+ Years</span>
          </div>
          <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
            <span className="text-white font-semibold">🌍 15+ Countries</span>
          </div>
          <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
            <span className="text-white font-semibold">⭐ 4.9/5 Rating</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-16 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
    }
  `}</style>
</section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">KM Cotex</h3>
              <p className="text-gray-400">
                Premium quality cotton manufacturing with sustainable practices and advanced technology.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Organic Cotton
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Cotton Yarn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Fabric
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Custom Orders
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-2"></i> 123 Cotton Road, Textile City
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone mr-2"></i> +91 98765 43210
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2"></i> info@kmcotex.com
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 KM Cotex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}




























































