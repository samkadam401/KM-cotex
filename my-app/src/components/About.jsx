import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpeg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.jpeg";
import gallery5 from "../assets/gallery5.jpeg";
import gallery6 from "../assets/gallery6.jpeg";
import gallery7 from "../assets/gallery7.jpeg";
import gallery8 from "../assets/gallery8.jpeg";
import gallery9 from "../assets/gallery9.jpeg";
import gallery10 from "../assets/gallery10.jpeg";
import gallery11 from "../assets/gallery11.jpeg";
import gallery12 from "../assets/gallery12.jpeg";
import gallery13 from "../assets/gallery13.jpeg";
import gallery14 from "../assets/gallery14.jpeg";

export default function AboutUs() {
   const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
   gallery12,
    gallery13,
     gallery14,
];



  return (

    
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50 pt-24 sm:pt-28 md:pt-32">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-9npm">
  About{" "}
  <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-600">
    K.M. Cotex Pvt. Ltd.
  </span>
</h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We are a trusted name in cotton manufacturing, delivering premium-quality
              cotton products with a strong commitment to sustainability, innovation,
              and long-term partnerships.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-sky-100 text-sky-700 rounded-full font-semibold">
                🌱 Sustainable Manufacturing
              </div>
              <div className="px-6 py-3 bg-cyan-100 text-cyan-700 rounded-full font-semibold">
                🏭 Advanced Infrastructure
              </div>
              <div className="px-6 py-3 bg-emerald-100 text-emerald-700 rounded-full font-semibold">
                🌍 Global Reach
              </div>
            </div>
          </div>

          {/* Image Card */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
                alt="Cotton Manufacturing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Journey
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto text-center">
            Founded with a vision to redefine cotton manufacturing, K.M. Cotex Pvt. Ltd.
            has grown from humble beginnings into a respected industry leader.
            With decades of expertise, we focus on quality, ethical sourcing,
            and environmentally responsible production practices.
          </p>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-gradient-to-r from-sky-500 to-cyan-600 text-white rounded-3xl p-10 shadow-xl">
          <h3 className="text-2xl font-bold mb-4">🎯 Our Mission</h3>
          <p className="leading-relaxed text-sky-100">
            To deliver superior cotton products through innovation,
            sustainable practices, and uncompromising quality standards
            while creating long-term value for our partners.
          </p>
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-3xl p-10 shadow-xl">
          <h3 className="text-2xl font-bold mb-4">🌟 Our Vision</h3>
          <p className="leading-relaxed text-emerald-100">
            To become a globally recognized cotton manufacturing brand,
            setting benchmarks in sustainability, efficiency, and trust.
          </p>
        </div>

      </section>
      {/* Associate Concerns Section */}
<section className="py-20 bg-gradient-to-br from-white to-sky-50 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute top-0 right-0 w-72 h-72 bg-sky-100 rounded-full translate-x-1/3 -translate-y-1/3 opacity-40"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full -translate-x-1/3 translate-y-1/3 opacity-30"></div>

    <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative">
                Associate Concerns
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 mt-4 rounded-full"></div>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Our trusted associate firms that strengthen our business ecosystem
            </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Card 1 */}
            <div className="group bg-white rounded-3xl shadow-xl p-8 border border-sky-100 hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">⛽</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Maganlal Nathulal Jain & Sons
                </h3>
                <p className="text-sky-600 font-semibold mb-3">
                    Dealer – Indian Oil
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Authorized Indian Oil Petrol Pump Dealer based at <strong>Anjad</strong>, delivering reliable fuel services with trust and integrity.
                </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-3xl shadow-xl p-8 border border-emerald-100 hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">🚜</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Siddhi Enterprises
                </h3>
                <p className="text-emerald-600 font-semibold mb-3">
                    Dealer – Mahindra Tractors
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Authorized Mahindra Tractors Dealer at <strong>Anjad</strong>, supporting farmers with dependable agricultural machinery.
                </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-3xl shadow-xl p-8 border border-amber-100 hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">🏭</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Joshi Cotex
                </h3>
                <p className="text-amber-600 font-semibold mb-3">
                    Silod (M.H)
                </p>
                <p className="text-gray-600 leading-relaxed">
                    A key associate firm engaged in cotton processing operations at <strong>Silod, Maharashtra</strong>, contributing to the extended cotton value chain.
                </p>
            </div>

        </div>
    </div>
</section>


     

     <section className="container mx-auto px-4 py-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
    Our Manufacturing Gallery
  </h2>

  <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
    A glimpse into our cotton manufacturing facilities, showcasing our
    advanced infrastructure, quality processes, and skilled workforce.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {images.map((img, index) => (
      <div
        key={index}
        className="group relative h-72 w-full rounded-2xl overflow-hidden shadow-xl bg-center bg-cover"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <span className="text-white font-semibold text-lg">
            Cotton Factory View
          </span>
        </div>
      </div>
    ))}
  </div>
</section>



    </div>
  );
}
