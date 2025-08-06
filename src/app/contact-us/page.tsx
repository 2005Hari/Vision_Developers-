"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { Building2, Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import Navigation from "@/components/sections/Navigation";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#ffffff]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#2a2a2a] to-[#3a3a3a] text-white py-32 pt-40">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-[60px] font-extrabold mb-6 leading-tight text-white">
                Get In Touch
              </h1>
              <p className="text-[18px] text-white/95 leading-relaxed">
                Have questions about building your dream home? We're here to help. 
                Contact us today to start your journey with Vision Developers.
              </p>
            </div>
          </div>

          {/* Geometric Triangle Accent */}
          <div className="absolute bottom-0 right-20 w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-t-[80px] border-t-[#f5f5f5]"></div>
        </section>

        <div className="bg-[#f5f5f5]">
          {/* Contact Information Section */}
          <section className="py-20">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid grid-cols-1 gap-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Contact Methods */}
                  <div>
                    <h3 className="text-[32px] font-extrabold mb-8 text-[#3a3a3a]">
                      Contact Us
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#c4b59a] p-3 rounded-full">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#3a3a3a] mb-1">Email Us</h4>
                          <a href="mailto:Rajiv@visiondevelopers.com.au" className="text-[#666666] hover:text-[#c4b59a] transition-colors">
                            Rajiv@visiondevelopers.com.au
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#c4b59a] p-3 rounded-full">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#3a3a3a] mb-1">Call Us</h4>
                          <a href="tel:+61435319913" className="text-[#666666] hover:text-[#c4b59a] transition-colors">
                            +61 435 319 913
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#c4b59a] p-3 rounded-full">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#3a3a3a] mb-1">Business Hours</h4>
                          <p className="text-[#666666]">Mon - Fri: 9am - 5pm</p>
                          <p className="text-[#666666]">Sat: 10am - 2pm</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Office Locations */}
                  <div>
                    <h3 className="text-[32px] font-extrabold mb-8 text-[#3a3a3a]">
                      Our Locations
                    </h3>
                    <div className="space-y-8">
                      <div>
                        <div className="flex items-start space-x-4">
                          <div className="bg-[#c4b59a] p-3 rounded-full">
                            <Building2 className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-[#3a3a3a] mb-2">Main Office</h4>
                            <p className="text-[#666666]">483 North East Road</p>
                            <p className="text-[#666666]">Hillcrest SA 5086</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-start space-x-4">
                          <div className="bg-[#c4b59a] p-3 rounded-full">
                            <Building2 className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-[#3a3a3a] mb-2">Our Homes</h4>
                            <p className="text-[#666666]">1 Essex Street, Brighton, SA 5048</p>
                            <p className="text-[#666666]">37 Arthur Street, Payneham, SA 5070</p>
                            <p className="text-[#666666]">63 Floriedale Road, Greenacres, SA 5086</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-[40px] font-extrabold mb-4 text-[#3a3a3a]">Send Us a Message</h2>
                  <p className="text-[18px] text-[#666666]">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#3a3a3a] font-bold">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#3a3a3a] font-bold">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 border border-gray-300 rounded"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#3a3a3a] font-bold">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 border border-gray-300 rounded"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-[#3a3a3a] font-bold">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="What's your enquiry about?"
                        className="w-full px-4 py-3 border border-gray-300 rounded"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#3a3a3a] font-bold">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your enquiry in detail..."
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded resize-none"
                    />
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#c4b59a] text-white px-12 py-4 text-[16px] font-bold rounded transition-all duration-300 hover:bg-[#b4a589] hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                    {submitStatus === 'success' && (
                      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-green-800 font-medium">
                          Thank you for your enquiry! We'll be in touch soon.
                        </span>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                        <span className="text-red-800 font-medium">
                          There was an error sending your message. Please try again or contact us directly.
                        </span>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center mb-12">
                <h2 className="text-[40px] font-extrabold mb-4 text-[#3a3a3a]">Find Us</h2>
                <p className="text-[18px] text-[#666666]">
                  Visit us at any of our convenient locations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="aspect-video bg-[#f5f5f5] rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-[#c4b59a]" />
                    <p className="text-[#666666]">Main Office</p>
                    <p className="text-sm text-[#666666] mt-2">Hillcrest Location</p>
                  </div>
                </div>

                <div className="aspect-video bg-[#f5f5f5] rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-[#c4b59a]" />
                    <p className="text-[#666666]">Brighton Home</p>
                    <p className="text-sm text-[#666666] mt-2">Essex Street</p>
                  </div>
                </div>

                <div className="aspect-video bg-[#f5f5f5] rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-[#c4b59a]" />
                    <p className="text-[#666666]">Payneham Home</p>
                    <p className="text-sm text-[#666666] mt-2">Arthur Street</p>
                  </div>
                </div>

                <div className="aspect-video bg-[#f5f5f5] rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-[#c4b59a]" />
                    <p className="text-[#666666]">Greenacres Home</p>
                    <p className="text-sm text-[#666666] mt-2">Floriedale Road</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}