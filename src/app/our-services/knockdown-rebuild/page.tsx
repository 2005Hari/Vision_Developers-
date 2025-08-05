import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building, CheckCircle, Phone } from "lucide-react";

export default function KnockdownRebuildPage() {
  const features = [
    "Site assessment & feasibility",
    "Existing structure demolition",
    "Modern design solutions",
    "Council approvals handled",
    "Temporary accommodation assistance"
  ];

  const projects = [
    {
      name: "The Dalkeith Transformation",
      location: "Dalkeith",
      description: "From 1960s cottage to contemporary masterpiece",
      image: "/image4.jpg"
    },
    {
      name: "The Claremont Revolution",
      location: "Claremont",
      description: "Traditional character meets modern luxury",
      image: "/image21.jpg"
    },
    {
      name: "The Floreat Renewal",
      location: "Floreat",
      description: "Family home transformation with pool and courtyard",
      image: "/image9.jpg"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Site Assessment",
      description: "Evaluate demolition requirements and site potential"
    },
    {
      step: 2,
      title: "Design & Demolition",
      description: "Create new plans and safely demolish existing structure"
    },
    {
      step: 3,
      title: "Construction",
      description: "Build your new home from the ground up"
    },
    {
      step: 4,
      title: "Final Reveal",
      description: "Welcome to your brand new home"
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
              <Building className="w-16 h-16 text-primary-dark" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-6">
              Knockdown Rebuild
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your existing property with a complete knockdown rebuild. Keep your beloved location while enjoying a brand new home designed for modern living, without the stress of renovations.
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
              Ready to Transform Your Property?
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