import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

export default function NewHomeDesignsSearch() {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-6">
              New Home Designs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of stunning home designs and floor plans. Find the perfect layout for your dream home.
            </p>
          </div>
          
          {/* Design Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-primary-dark rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-dark mb-2">Single Storey</h3>
              <p className="text-gray-600 text-sm">Perfect for families and accessibility</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-primary-dark rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-dark mb-2">Double Storey</h3>
              <p className="text-gray-600 text-sm">Maximize space on smaller blocks</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-primary-dark rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏘️</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-dark mb-2">Townhouse</h3>
              <p className="text-gray-600 text-sm">Modern living with shared walls</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-primary-dark rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏰</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-dark mb-2">Luxury</h3>
              <p className="text-gray-600 text-sm">Premium designs with premium finishes</p>
            </div>
          </div>
          
          {/* Search Filters */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
            <h2 className="text-2xl font-bold text-primary-dark mb-6">Filter Designs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Style</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent">
                  <option>All Styles</option>
                  <option>Modern</option>
                  <option>Contemporary</option>
                  <option>Traditional</option>
                  <option>Hamptons</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent">
                  <option>Any</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Size Range</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent">
                  <option>Any Size</option>
                  <option>150-200sqm</option>
                  <option>200-250sqm</option>
                  <option>250-300sqm</option>
                  <option>300sqm+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent">
                  <option>Any Price</option>
                  <option>$200k - $300k</option>
                  <option>$300k - $400k</option>
                  <option>$400k - $500k</option>
                  <option>$500k+</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <button className="bg-primary-dark text-white px-8 py-3 rounded-lg hover:bg-primary-dark/90 transition-colors">
                Search Designs
              </button>
            </div>
          </div>
          
          {/* Design Listings */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Design Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-dark mb-2">The Belmont</h3>
                <p className="text-gray-600 mb-4">4 bed, 2 bath, 2 car garage</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-primary-dark">250sqm</span>
                  <span className="text-sm text-gray-500">Modern</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary-dark">$380,000</span>
                  <span className="text-sm text-gray-500">Single Storey</span>
                </div>
                <button className="w-full bg-primary-dark text-white py-2 rounded-lg hover:bg-primary-dark/90 transition-colors">
                  View Design
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Design Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-dark mb-2">The Hamilton</h3>
                <p className="text-gray-600 mb-4">3 bed, 2.5 bath, 1 car garage</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-primary-dark">180sqm</span>
                  <span className="text-sm text-gray-500">Contemporary</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary-dark">$320,000</span>
                  <span className="text-sm text-gray-500">Townhouse</span>
                </div>
                <button className="w-full bg-primary-dark text-white py-2 rounded-lg hover:bg-primary-dark/90 transition-colors">
                  View Design
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Design Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-dark mb-2">The Windsor</h3>
                <p className="text-gray-600 mb-4">5 bed, 3 bath, 3 car garage</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-primary-dark">320sqm</span>
                  <span className="text-sm text-gray-500">Luxury</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary-dark">$650,000</span>
                  <span className="text-sm text-gray-500">Double Storey</span>
                </div>
                <button className="w-full bg-primary-dark text-white py-2 rounded-lg hover:bg-primary-dark/90 transition-colors">
                  View Design
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Design Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-dark mb-2">The Kensington</h3>
                <p className="text-gray-600 mb-4">3 bed, 2 bath, 2 car garage</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-primary-dark">200sqm</span>
                  <span className="text-sm text-gray-500">Traditional</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary-dark">$280,000</span>
                  <span className="text-sm text-gray-500">Single Storey</span>
                </div>
                <button className="w-full bg-primary-dark text-white py-2 rounded-lg hover:bg-primary-dark/90 transition-colors">
                  View Design
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Design Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-dark mb-2">The Chelsea</h3>
                <p className="text-gray-600 mb-4">4 bed, 3 bath, 2 car garage</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-primary-dark">280sqm</span>
                  <span className="text-sm text-gray-500">Hamptons</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary-dark">$420,000</span>
                  <span className="text-sm text-gray-500">Double Storey</span>
                </div>
                <button className="w-full bg-primary-dark text-white py-2 rounded-lg hover:bg-primary-dark/90 transition-colors">
                  View Design
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Design Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-dark mb-2">The Richmond</h3>
                <p className="text-gray-600 mb-4">2 bed, 2 bath, 1 car garage</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-primary-dark">140sqm</span>
                  <span className="text-sm text-gray-500">Modern</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary-dark">$220,000</span>
                  <span className="text-sm text-gray-500">Townhouse</span>
                </div>
                <button className="w-full bg-primary-dark text-white py-2 rounded-lg hover:bg-primary-dark/90 transition-colors">
                  View Design
                </button>
              </div>
            </div>
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-primary-dark text-white px-8 py-3 rounded-lg hover:bg-primary-dark/90 transition-colors">
              Load More Designs
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 