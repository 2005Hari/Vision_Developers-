"use client";

import React from 'react';
import { ChevronRight, MapPin, Clock, Award, Users, Heart } from 'lucide-react';
import Navigation from '@/components/sections/Navigation';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b002?w=300&h=300&fit=crop&crop=face'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
  },
  {
    name: 'Emma Wilson',
    role: 'Operations Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
  },
  {
    name: 'David Martinez',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
  }
];

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We deliver exceptional craftsmanship in every detail of your home'
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Building trust through transparent processes and honest relationships'
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'Working collaboratively to bring your vision to life'
  },
  {
    icon: Clock,
    title: 'Commitment',
    description: 'Dedicated to timelines and commitments that matter to you'
  }
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#ffffff]">
        {/* Hero Section */}
        <section className="relative bg-[#f5f5f5] py-24 pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-6xl font-extrabold text-[#3a3a3a] mb-6">
                Building Dreams,<br />Creating Legacies
              </h1>
              <p className="text-2xl text-[#666666] max-w-3xl mx-auto">
                Since 2010, Vision Developers has been transforming lives by creating exceptional living spaces that reflect the unique personalities and aspirations of our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-extrabold text-[#3a3a3a] mb-6">Our Mission</h2>
                <p className="text-lg text-[#666666] mb-6">
                  At Vision Developers, we believe that a home is more than just bricks and mortar—it's where life's most precious moments unfold. Our mission is to create spaces that inspire, comfort, and connect families for generations to come.
                </p>
                <p className="text-lg text-[#666666] mb-6">
                  Through innovative design, sustainable practices, and unwavering attention to detail, we build not just houses, but foundations for memories that last a lifetime. We envision a future where every family has access to beautifully designed, quality-built homes that enhance their quality of life.
                </p>
                <div className="flex items-start space-x-8">
                  <div>
                    <div className="text-3xl font-extrabold text-[#c4b59a]">500+</div>
                    <div className="text-[#666666]">Homes Built</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-[#c4b59a]">14+</div>
                    <div className="text-[#666666]">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-[#c4b59a]">98%</div>
                    <div className="text-[#666666]">Client Satisfaction</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
                  alt="Modern house exterior"
                  className="rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32">
                  <div className="absolute inset-0 bg-[#c4b59a] opacity-20"></div>
                  <div className="relative w-0 h-0 border-l-[64px] border-l-transparent border-b-[64px] border-b-[#c4b59a] border-r-[64px] border-r-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#3a3a3a] mb-4">Our Values</h2>
              <p className="text-lg text-[#666666] max-w-2xl mx-auto">
                These core principles guide every decision we make and every home we build
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#c4b59a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#3a3a3a] mb-2">{value.title}</h3>
                  <p className="text-[#666666]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#3a3a3a] mb-4">Meet Our Team</h2>
              <p className="text-lg text-[#666666] max-w-2xl mx-auto">
                Passionate professionals dedicated to bringing your dream home to life
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#3a3a3a]">{member.name}</h3>
                  <p className="text-[#666666]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#3a3a3a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold text-white mb-6">
              Ready to Build Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can create the perfect home for you and your family.
            </p>
            <button className="bg-[#c4b59a] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#b3a488] transition-colors duration-300 inline-flex items-center">
              Contact Us Today
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
