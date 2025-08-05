import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, CheckCircle, Phone, Mail } from "lucide-react";

export default function CustomNewHomesPage() {
  const features = [
    "Bespoke architectural design",
    "Premium quality materials",
    "Energy-efficient solutions",
    "Smart home integration",
    "Landscaping & outdoor living"
  ];

  const projects = [
    {
      name: "The Hamilton Estate",
      location: "Hamilton Hill",
      description: "A stunning 5-bedroom luxury home with panoramic ocean views",
      image: "/image13.jpg"
    },
    {
      name: "The Coastal Retreat",
      location: "Cottesloe",
      description: "Modern beachside living with sustainable design features",
      image: "/image4.jpg"
    },
    {
      name: "The Urban Sanctuary",
      location: "Subiaco",
      description: "Contemporary luxury in an inner-city setting",
      image: "/image21.jpg"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Understand your vision, requirements, and budget"
    },
    {
      step: 2,
      title: "Design & Planning",
      description: "Create architectural plans and obtain necessary approvals"
    },
    {
      step: 3,
      title: "Construction",
      description: "Build your dream home with premium materials and craftsmanship"
    },
    {
      step: 4,
      title: "Handover & Warranty",
      description: "Final walkthrough and comprehensive warranty coverage"
    }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] text-center">
            <div className="flex justify-center mb-6">
              <Home className="w-16 h-16 text-primary-dark" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-6">
              Custom New Homes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Crafting bespoke luxury homes tailored to your unique vision and lifestyle. From architectural design to final handover, we ensure every detail reflects your personal taste and meets the highest standards of quality.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
            <h2 className="text-3xl font-bold text-primary-dark mb-12 text-center">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary-dark mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Example Projects */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
            <h2 className="text-3xl font-bold text-primary-dark mb-12 text-center">
              Example Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary-dark mb-2">{project.name}</h3>
                    <p className="text-gray-600 mb-2">{project.location}</p>
                    <p className="text-gray-700">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
            <h2 className="text-3xl font-bold text-primary-dark mb-12 text-center">
              Our Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 bg-primary-dark text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary-dark text-white py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Dream Home?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Let's discuss your vision and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-warm-beige text-primary-dark hover:bg-warm-beige/90 px-8 py-4 text-lg"
              >
                <Link href="/contact-us">Get Started</Link>
              </Button>
              <Button 
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-primary-dark px-8 py-4 text-lg"
              >
                <Link href="tel:0894471554">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 0894 471 554
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 