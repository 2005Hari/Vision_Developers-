import Navigation from "../../components/sections/Navigation";
import Footer from "../../components/sections/Footer";

export default function HouseLandSearch() {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-6">
              House & Land Search
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your perfect house and land package. Browse our extensive collection of properties across prime locations.
            </p>
          </div>
          
          {/* Search Filters */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
            <h2 className="text-2xl font-bold text-primary-dark mb-6">Search Filters</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent">
                  <option>All Locations</option>
                  <option>Melbourne</option>
                  <option>Sydney</option>
                  <option>Brisbane</option>
                  <option>Perth</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent">
                  <option>Any Price</option>
                  <option>$300k - $500k</option>
                  <option>$500k - $750k</option>
                  <option>$750k - $1M</option>
                  <option>$1M+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent">
                  <option>All Types</option>
                  <option>House & Land</option>
                  <option>Duplex</option>
                  <option>Townhouse</option>
                  <option>Villa</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent">
                  <option>Any</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <button className="bg-primary-dark text-white px-8 py-3 rounded-lg hover:bg-primary-dark/90 transition-colors">
                Search Properties
              </button>
            </div>
          </div>
          
          {/* Property Listings */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Property Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-dark mb-2">Modern Family Home</h3>
                <p className="text-gray-600 mb-4">4 bed, 2 bath, 2 car garage</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary-dark">$650,000</span>
                  <span className="text-sm text-gray-500">Melbourne</span>
                </div>
                <button className="w-full bg-primary-dark text-white py-2 rounded-lg hover:bg-primary-dark/90 transition-colors">
                  View Details
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Property Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-dark mb-2">Luxury Villa</h3>
                <p className="text-gray-600 mb-4">3 bed, 2.5 bath, 1 car garage</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary-dark">$580,000</span>
                  <span className="text-sm text-gray-500">Sydney</span>
                </div>
                <button className="w-full bg-primary-dark text-white py-2 rounded-lg hover:bg-primary-dark/90 transition-colors">
                  View Details
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Property Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-dark mb-2">Contemporary Townhouse</h3>
                <p className="text-gray-600 mb-4">2 bed, 2 bath, 1 car garage</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary-dark">$450,000</span>
                  <span className="text-sm text-gray-500">Brisbane</span>
                </div>
                <button className="w-full bg-primary-dark text-white py-2 rounded-lg hover:bg-primary-dark/90 transition-colors">
                  View Details
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Property Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-dark mb-2">Executive Duplex</h3>
                <p className="text-gray-600 mb-4">3 bed, 2 bath, 2 car garage</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary-dark">$720,000</span>
                  <span className="text-sm text-gray-500">Perth</span>
                </div>
                <button className="w-full bg-primary-dark text-white py-2 rounded-lg hover:bg-primary-dark/90 transition-colors">
                  View Details
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Property Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-dark mb-2">Premium House & Land</h3>
                <p className="text-gray-600 mb-4">4 bed, 3 bath, 2 car garage</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary-dark">$890,000</span>
                  <span className="text-sm text-gray-500">Melbourne</span>
                </div>
                <button className="w-full bg-primary-dark text-white py-2 rounded-lg hover:bg-primary-dark/90 transition-colors">
                  View Details
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Property Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-dark mb-2">Smart Home Package</h3>
                <p className="text-gray-600 mb-4">3 bed, 2 bath, 1 car garage</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary-dark">$520,000</span>
                  <span className="text-sm text-gray-500">Sydney</span>
                </div>
                <button className="w-full bg-primary-dark text-white py-2 rounded-lg hover:bg-primary-dark/90 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-primary-dark text-white px-8 py-3 rounded-lg hover:bg-primary-dark/90 transition-colors">
              Load More Properties
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 