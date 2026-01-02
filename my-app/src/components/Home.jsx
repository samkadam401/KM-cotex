import { Link } from "react-router-dom";
import img from "../assets/cotton.jpg";
import per2 from "../assets/per2.jpeg";
import per4 from "../assets/per4.jpeg";
import bgimg from "../assets/bg.jpg";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">


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
                        Premium quality cotton manufacturing with sustainable practices and
                        advanced technology.
                    </p>

                    <Link to={"/products"}>
                        <button className="mt-4 sm:mt-6 md:mt-8 bg-sky-600 text-white px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg shadow-lg hover:bg-sky-700 transition transform hover:scale-105">
                            Explore Products
                        </button>
                    </Link>
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
                            Discover the remarkable story of our growth from a small startup
                            to an industry leader
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content - Company Story */}
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold text-gray-800 leading-tight">
                                    From Humble Beginnings to{" "}
                                    <span className="text-sky-500">Industry Leader</span>
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Founded in 1932, KM Cotex started as a small cotton processing
                                    unit. Our founder,Late Mr. Maganlal Nathulal Jain, had
                                    a vision to revolutionize the cotton industry with sustainable
                                    practices and superior quality.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Over the years, we've grown into one of the region's most
                                    trusted cotton manufacturers, serving clients across India
                                    while maintaining our commitment to environmental
                                    responsibility.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    With a strong focus on quality, efficiency, and ethical business practices, we aim to deliver reliable products that meet the needs of our customers and support the agricultural value chain.
                                </p>

                                {/* Call to Action Button */}
                                <div className="pt-4">
                                    <Link to={"/about"}>
                                        <button className="px-6 py-3 bg-sky-500 text-white font-medium rounded-lg hover:bg-sky-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                                            Learn More About Us
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Right Content - Timeline */}
                            <div className="relative overflow-hidden p-8 rounded-2xl shadow-lg border border-gray-100 bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl">
                                {/* Floating Background Elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-sky-100 rounded-full -ml-12 -mb-12 opacity-50"></div>

                                {/* Timeline Header */}
                                <h4 className="text-2xl font-bold text-gray-800 mb-8 relative z-10">
                                    Our Milestones
                                </h4>

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
                                                <h5 className="font-bold text-gray-800 text-lg">
                                                    1932
                                                </h5>
                                                <p className="text-gray-600">
                                                    Founded by Late Mr. Maganlal Nathulal Jain
                                                </p>
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
                                                <h5 className="font-bold text-gray-800 text-lg">
                                                    1997
                                                </h5>
                                                <p className="text-gray-600">
                                                    The factory was modernised to improve efficiency and quality.
                                                </p>
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
                                                <h5 className="font-bold text-gray-800 text-lg">
                                                    2007
                                                </h5>
                                                <p className="text-gray-600">
                                                    The company was renamed K.M. Cotex Pvt. Ltd., and the entire manufacturing process was fully automated.
                                                </p>
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
                                                <h5 className="font-bold text-gray-800 text-lg">
                                                    2016
                                                </h5>
                                                <p className="text-gray-600">
                                                    Expanded operations into chickpea business.
                                                </p>
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
                                        <div
                                            className="w-full h-full bg-center bg-cover"
                                            style={{ backgroundImage: `url(${per2})` }}
                                        ></div>

                                        {/* Photo Frame Decoration */}
                                        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/50"></div>
                                        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/50"></div>
                                    </div>
                                </div>


                                {/* Floating Cotton Elements */}
                                <div className="absolute top-6 left-6 animate-float">
                                    <span className="text-xl text-white/60">🌸</span>
                                </div>
                                <div
                                    className="absolute bottom-8 right-8 animate-float"
                                    style={{ animationDelay: "1s" }}
                                >
                                    <span className="text-xl text-white/60">🌿</span>
                                </div>
                            </div>

                            {/* Right Side - Content */}
                            <div className="p-8 lg:p-12">
                                <div className="flex items-center mb-6">
                                    <div className="w-3 h-12 bg-amber-500 rounded-full mr-4"></div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-800">
                                            Mr.Manoj Jain
                                        </h3>
                                        <p className="text-amber-600 font-semibold text-lg mt-1">
                                            Director
                                        </p>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    The Director of K.M. Cotex Pvt. Ltd. brings strong leadership and deep industry knowledge to the organization. With hands-on experience in cotton manufacturing and agro-based businesses, they have played a key role in modernizing operations and driving sustainable growth.
                                </p>



                                <div className="border-t border-gray-200 pt-4">
                                    <p className="text-gray-500 text-sm">
                                        <span className="font-semibold">Expertise:</span> Cotton
                                        Processing • Sustainable Manufacturing • Business Strategy
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
                                        <h3 className="text-3xl font-bold text-gray-800">
                                            Mr.Vipin Jain
                                        </h3>
                                        <p className="text-green-600 font-semibold text-lg mt-1">
                                            Director
                                        </p>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-lg leading-relaxed mb-6">

                                    Finance oversees all financial operations and accounting functions of the company. With <span className="text-green-600 font-semibold">27 years</span>{" "} of experience and strong expertise in financial planning, budgeting, compliance, and account management, they ensure the company’s financial stability and transparency.
                                </p>



                                <div className="border-t border-gray-200 pt-4">
                                    <p className="text-gray-500 text-sm">
                                        <span className="font-semibold">Expertise:</span> Dedicated • Experienced • Practical
                                    </p>
                                </div>
                            </div>

                            {/* Left Side - Photo with Animation */}
                            <div className="relative h-80 lg:h-96 bg-gradient-to-br from-green-400 to-emerald-500 overflow-hidden order-1 lg:order-2">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-500"></div>

                                {/* Profile Photo Container */}
                                <div className="absolute inset-0 flex items-center justify-center p-8">
                                    <div className="relative w-64 h-64 bg-white/10 rounded-2xl border-4 border-white/30 backdrop-blur-sm overflow-hidden shadow-2xl">
                                        <div
                                            className="w-full h-full bg-center bg-cover"
                                            style={{ backgroundImage: `url(${per2})` }}
                                        ></div>
                                        {/* Photo Frame Decoration */}
                                        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/50"></div>
                                        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/50"></div>
                                    </div>
                                </div>

                                {/* Floating Cotton Elements */}
                                <div className="absolute top-8 right-6 animate-float">
                                    <span className="text-xl text-white/60">🌿</span>
                                </div>
                                <div
                                    className="absolute bottom-6 left-8 animate-float"
                                    style={{ animationDelay: "1.5s" }}
                                >
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
                                        <div
                                            className="w-full h-full bg-center bg-cover"
                                            style={{ backgroundImage: `url(${per2})` }}
                                        ></div>
                                        {/* Photo Frame Decoration */}
                                        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/50"></div>
                                        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/50"></div>
                                    </div>
                                </div>

                                {/* Floating Cotton Elements */}
                                <div className="absolute top-6 right-8 animate-float">
                                    <span className="text-xl text-white/60">⭐</span>
                                </div>
                                <div
                                    className="absolute bottom-8 left-6 animate-float"
                                    style={{ animationDelay: "2s" }}
                                >
                                    <span className="text-xl text-white/60">🎯</span>
                                </div>
                            </div>

                            {/* Right Side - Content */}
                            <div className="p-8 lg:p-12">
                                <div className="flex items-center mb-6">
                                    <div className="w-3 h-12 bg-blue-500 rounded-full mr-4"></div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-800">
                                            Mr.Mohit Jain
                                        </h3>
                                        <p className="text-blue-600 font-semibold text-lg mt-1">
                                            Director
                                        </p>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    With strong operational expertise, they oversee production planning, process optimization, and day-to-day management to ensure smooth and efficient operations across organization, and also manages the overall operations of Joshi Cotex Pvt. Ltd
                                </p>



                                <div className="border-t border-gray-200 pt-4">
                                    <p className="text-gray-500 text-sm">
                                        <span className="font-semibold">Expertise:</span> Organised • Responsible • Insightful
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
                                        <h3 className="text-3xl font-bold text-gray-800">
                                            Mr.Sohit Jain
                                        </h3>
                                        <p className="text-emerald-600 font-semibold text-lg mt-1">
                                            Director
                                        </p>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    manages the procurement and sales operations of the company and works closely at the ground level with suppliers and customers. With a hands-on approach, they ensure timely sourcing of quality raw materials and maintain strong, long-term relationships with buyers.
                                </p>



                                <div className="border-t border-gray-200 pt-4">
                                    <p className="text-gray-500 text-sm">
                                        <span className="font-semibold">Expertise:</span>{" "}
                                        Hands-on • Negotiative • Approachable
                                    </p>
                                </div>
                            </div>

                            {/* Left Side - Photo with Animation */}
                            <div className="relative h-80 lg:h-96 bg-gradient-to-br from-emerald-400 to-teal-500 overflow-hidden order-1 lg:order-2">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-500"></div>

                                {/* Profile Photo Container */}
                                <div className="absolute inset-0 flex items-center justify-center p-8">
                                    <div className="relative w-64 h-64 bg-white/10 rounded-2xl border-4 border-white/30 backdrop-blur-sm overflow-hidden shadow-2xl">
                                        <div
                                            className="w-full h-full bg-center bg-cover"
                                            style={{ backgroundImage: `url(${per4})` }}
                                        ></div>
                                        {/* Photo Frame Decoration */}
                                        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/50"></div>
                                        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/50"></div>
                                    </div>
                                </div>

                                {/* Floating Cotton Elements */}
                                <div className="absolute top-8 left-6 animate-float">
                                    <span className="text-xl text-white/60">🍃</span>
                                </div>
                                <div
                                    className="absolute bottom-6 right-8 animate-float"
                                    style={{ animationDelay: "2.5s" }}
                                >
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

                              {/* Team Collaboration Section */}
<div
  className="absolute inset-0 flex items-center justify-center bg-center bg-cover"
  style={{ backgroundImage: `url(${bgimg})` }}
>
  {/* Dark Overlay for readability */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 text-center text-white px-4">
    <span className="text-6xl mb-4 block">🤝</span>

    <h3 className="text-3xl md:text-4xl font-bold mb-2">
      Together We Grow
    </h3>

    <p className="text-amber-100 text-lg">
      Building the Future of Cotton Manufacturing
    </p>
  </div>
</div>


                                {/* Floating Elements */}
                                <div className="absolute top-10 right-10 animate-float">
                                    <span className="text-3xl text-white/40">🌾</span>
                                </div>
                                <div
                                    className="absolute bottom-10 left-10 animate-float"
                                    style={{ animationDelay: "1.5s" }}
                                >
                                    <span className="text-3xl text-white/40">🏆</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
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
                            The principles that guide our journey towards excellence in cotton
                            manufacturing
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
                                    <div
                                        className="absolute -bottom-2 -left-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"
                                        style={{ animationDelay: "1s" }}
                                    ></div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                                    Sustainability
                                </h3>
                                <p className="text-gray-600 text-center leading-relaxed mb-6">
                                    We prioritize eco-friendly practices, water conservation, and
                                    reducing our environmental impact at every stage of
                                    production.
                                </p>


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
                                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-3xl animate-bounce">
                                            ⭐
                                        </div>
                                    </div>

                                    {/* Floating Elements */}
                                    <div className="absolute top-2 right-4 w-5 h-5 bg-amber-300 rounded-full animate-pulse"></div>
                                    <div
                                        className="absolute bottom-4 left-6 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
                                        style={{ animationDelay: "0.5s" }}
                                    ></div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                                    Quality Excellence
                                </h3>
                                <p className="text-gray-600 text-center leading-relaxed mb-6">
                                    Every product undergoes rigorous quality checks to ensure we
                                    deliver only the finest cotton materials to our customers.
                                </p>


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
                                    <div
                                        className="absolute bottom-6 right-4 w-3 h-3 bg-indigo-400 rounded-full animate-pulse"
                                        style={{ animationDelay: "0.7s" }}
                                    ></div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                                    Integrity & Trust
                                </h3>
                                <p className="text-gray-600 text-center leading-relaxed mb-6">
                                    We maintain transparent relationships with suppliers,
                                    partners, and customers, built on trust and mutual respect.
                                </p>


                            </div>
                        </div>
                    </div>

                    {/* Bottom Stats Section */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-20">
                        <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
                            <div className="text-3xl font-bold text-sky-600 mb-2">90+</div>
                            <div className="text-gray-600">Years Experience</div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
                            <div className="text-3xl font-bold text-green-600 mb-2">40+</div>
                            <div className="text-gray-600">Team Members</div>
                        </div>

                        <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
                            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                            <div className="text-gray-600">Quality Focus</div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
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
                    <div
                        className="absolute top-20 right-20 w-4 h-4 bg-white/30 rounded-full animate-float"
                        style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                        className="absolute bottom-20 left-1/4 w-8 h-8 bg-white/15 rounded-full animate-float"
                        style={{ animationDelay: "2s" }}
                    ></div>
                    <div
                        className="absolute bottom-10 right-1/3 w-5 h-5 bg-white/25 rounded-full animate-float"
                        style={{ animationDelay: "1.5s" }}
                    ></div>
                    <div
                        className="absolute top-1/3 left-1/3 w-7 h-7 bg-white/20 rounded-full animate-float"
                        style={{ animationDelay: "0.5s" }}
                    ></div>

                    {/* Animated Waves */}
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/10 to-transparent"></div>

                    {/* Sparkle Elements */}
                    <div className="absolute top-1/4 right-1/4 animate-pulse">
                        <span className="text-2xl opacity-40">✨</span>
                    </div>
                    <div
                        className="absolute bottom-1/3 left-1/4 animate-pulse"
                        style={{ animationDelay: "1s" }}
                    >
                        <span className="text-xl opacity-30">⭐</span>
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Main Heading with Animation */}
                        <div className="mb-6">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up p-20">
                                Ready to Experience{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-300">
                                    Premium Quality
                                </span>{" "}
                                Cotton Bales and its by products?
                            </h2>
                        </div>

                        {/* CTA Buttons Group */}
                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
                            style={{ animationDelay: "0.6s" }}
                        >
                            {/* Main CTA Button */}
                            <button className="group relative bg-white text-sky-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 min-w-[200px]">
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-yellow-300 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <Link
                                    to={"/products"}
                                    className="relative z-10 flex items-center justify-center space-x-2"
                                >
                                    <span>Explore Our Products</span>
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                                        →
                                    </span>
                                </Link>

                                {/* Button Shine Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </button>

                            {/* Secondary Button */}
                            <Link
                                to={"/contact"}
                                className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-500 transform hover:scale-105 min-w-[180px]"
                            >
                                <span className="flex items-center justify-center space-x-2">
                                    <span>📞</span>
                                    <span>Contact Sales</span>
                                </span>
                            </Link>
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
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
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
        </div>
    );
};

export default Home;