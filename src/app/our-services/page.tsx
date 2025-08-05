"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home, Building, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Carousel from "@/components/ui/carousel";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

export default function OurServicesPage() {
  const router = useRouter();

  const services = [
    {
      id: "custom-new-homes",
      title: "Custom New Homes",
      icon: Home,
      description: "Crafting bespoke luxury homes tailored to your unique vision and lifestyle.",
      image: "/image13.jpg",
      button: "Learn More"
    },
    {
      id: "knockdown-rebuild",
      title: "Knockdown Rebuild",
      icon: Building,
      description: "Transform your existing property with a complete knockdown rebuild.",
      image: "/image4.jpg",
      button: "Learn More"
    },
    {
      id: "sub-divisions",
      title: "Sub Divisions",
      icon: MapPin,
      description: "Maximize your property's potential with professional subdivision expertise.",
      image: "/image21.jpg",
      button: "Learn More"
    },
    {
      id: "multi-dwelling",
      title: "Multi Dwelling",
      icon: Users,
      description: "Develop premium multi-dwelling projects for investment or sale.",
      image: "/image9.jpg",
      button: "Learn More"
    }
  ];

  const handleServiceClick = (index: number) => {
    const service = services[index];
    router.push(`/our-services/${service.id}`);
  };

  return (
    <>
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Discover our comprehensive range of premium building services tailored for luxury living in Perth. 
              From custom homes to multi-dwelling developments.
            </p>
          </div>
        </section>

        {/* Services Static Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                What We Offer
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Click on any service to learn more about our expertise and process
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                  onClick={() => handleServiceClick(index)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute top-4 left-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary-dark mb-2 group-hover:text-primary-dark/80 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary-dark font-medium group-hover:text-primary-dark/80 transition-colors">
                      {service.button}
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary-dark text-white py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
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
                <Link href="tel:0894471554">Call: 0894 471 554</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}