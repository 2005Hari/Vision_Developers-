import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const searchLinks = [
    { name: 'House & Land Search', href: '/house-land-search' },
    { name: 'Home Designs Search', href: '/new-home-designs-search' },
  ];

  const companyLinks = [
    { name: 'Home', href: '/home' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Services', href: '/our-services' },
    { name: '3D Walkthrough', href: '/3d-walkthrough' },
    { name: 'Useful Tools', href: '/tools' },
  ];

  const contactLinks = [
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Builder Licence BLD272501', href: '#' },
  ];

  return (
    <footer className="bg-light-grey text-medium-grey">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          
          <div>
            <h4 className="font-extrabold text-primary-dark uppercase tracking-widest text-[13px]">
              Search
            </h4>
            <ul className="mt-5 space-y-3">
              {searchLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary-dark transition-colors duration-300 text-[15px]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-extrabold text-primary-dark uppercase tracking-widest text-[13px]">
              Links
            </h4>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary-dark transition-colors duration-300 text-[15px]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-extrabold text-primary-dark uppercase tracking-widest text-[13px]">
              Contact us
            </h4>
            <ul className="mt-5 space-y-3">
                <li>
                  <Link href="/contact-us" className="hover:text-primary-dark transition-colors duration-300 text-[15px]">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <p className="text-[15px]">Builder Licence BLD272501</p>
                </li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-primary-dark uppercase tracking-widest text-[13px]">
              Contact Info
            </h4>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+61435319913" className="hover:text-primary-dark transition-colors duration-300">
                  +61 435 319 913
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:Rajiv@visiondevelopers.com.au" className="hover:text-primary-dark transition-colors duration-300">
                  Rajiv@visiondevelopers.com.au
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <MapPin className="w-4 h-4 mr-2" />
                <span>483 North East Road, Hillcrest SA 5086</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-gray-300" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[13px] text-center md:text-left flex-1">
            © Vision Developers 2025
          </div>
          {/* Social media links removed */}
          <div className="flex gap-3 order-first md:order-none"></div>
          <div className="text-[13px] text-center md:text-right flex-1">
            Website managed by{' '}
            <Link href="https://www.visiondevelopers.com" className="text-primary-dark hover:underline transition-colors duration-300">
              Vision Developers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;