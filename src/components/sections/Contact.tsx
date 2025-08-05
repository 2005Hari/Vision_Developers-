"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    suburb: "",
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
          suburb: "",
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
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/image-29.jpeg?')",
      }}
    >
      <div className="absolute inset-0 bg-white/50"></div>
      <div className="container mx-auto max-w-6xl px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 shadow-2xl">
          <div className="bg-warm-beige p-8 md:p-12 text-white">
            <p className="mb-8 text-lg leading-relaxed">
              Whether you're looking to build or develop in South Australia,
              Vision Developers makes it easy. Please feel free to contact us with
              any questions!
            </p>
            <ul className="space-y-6 text-lg">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Main Office:</p>
                  <a
                    href="https://maps.app.goo.gl/FaEz8gXSHy3K1eif8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    483 North East Road, Hillcrest SA 5086
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Our Homes:</p>
                  <div className="space-y-1 text-sm">
                    <p>1 Essex Street, Brighton, SA 5048</p>
                    <p>37 Arthur Street, Payneham, SA 5070</p>
                    <p>63 Floriedale Road, Greenacres, SA 5086</p>
                  </div>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-4 mt-1 flex-shrink-0" />
                <a href="tel:+61435319913" className="hover:underline">
                  +61 435 319 913
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-4 mt-1 flex-shrink-0" />
                <a
                  href="mailto:Rajiv@visiondevelopers.com.au"
                  className="hover:underline"
                >
                  Rajiv@visiondevelopers.com.au
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 md:p-12">
            <h2 className="text-3xl font-extrabold uppercase mb-6 text-primary-dark tracking-wider">
              contact us today
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className="w-full bg-light-grey border-none p-4 rounded-none placeholder:text-medium-grey focus:ring-warm-beige focus:ring-1 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="w-full bg-light-grey border-none p-4 rounded-none placeholder:text-medium-grey focus:ring-warm-beige focus:ring-1 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                className="w-full bg-light-grey border-none p-4 rounded-none placeholder:text-medium-grey focus:ring-warm-beige focus:ring-1 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Suburb"
                value={formData.suburb}
                onChange={(e) => handleInputChange('suburb', e.target.value)}
                required
                className="w-full bg-light-grey border-none p-4 rounded-none placeholder:text-medium-grey focus:ring-warm-beige focus:ring-1 focus:outline-none"
              />
              <textarea
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                required
                className="sm:col-span-2 w-full bg-light-grey border-none p-4 rounded-none placeholder:text-medium-grey focus:ring-warm-beige focus:ring-1 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="sm:col-span-2 w-full bg-warm-beige text-white font-bold py-4 text-lg uppercase tracking-wider hover:bg-primary-dark transition-colors duration-300 rounded-none disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="sm:col-span-2 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800 text-center">
                    Thank you! Your message has been sent. We'll get back to you soon.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="sm:col-span-2 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800 text-center">
                    There was an error sending your message. Please try again or contact us directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;