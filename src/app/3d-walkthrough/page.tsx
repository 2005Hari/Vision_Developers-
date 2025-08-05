import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

export default function ThreeDWalkthrough() {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-6">
              3D Walkthrough
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our properties in immersive 3D. Walk through every room, explore the layout, and visualize your dream home before it's built.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Placeholder for 3D walkthrough content */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <p className="text-gray-500">3D Walkthrough Coming Soon</p>
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-2">Luxury Villa</h3>
              <p className="text-gray-600">Experience our premium villa designs in stunning 3D detail.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <p className="text-gray-500">3D Walkthrough Coming Soon</p>
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-2">Modern Townhouse</h3>
              <p className="text-gray-600">Explore contemporary townhouse layouts with interactive 3D tours.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <p className="text-gray-500">3D Walkthrough Coming Soon</p>
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-2">Family Home</h3>
              <p className="text-gray-600">Perfect family homes designed for comfort and style.</p>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary-dark mb-6">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-2">Select Property</h3>
                <p className="text-gray-600">Choose from our collection of premium properties</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-2">Launch 3D Tour</h3>
                <p className="text-gray-600">Click to start your immersive 3D experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-2">Explore & Interact</h3>
                <p className="text-gray-600">Navigate through rooms and customize finishes</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 