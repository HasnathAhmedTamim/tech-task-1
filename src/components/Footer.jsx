import facebookIcon from '../assets/facebookIcon.png'
import linkedinIcon from '../assets/linkedinIcon.png'
import xIcon from '../assets/xIcon.png'
import instraIcon from '../assets/instraIcon.png'
import mapPin from '../assets/map-pin.png'

const Footer = () => {
  return (
    <footer className="w-full bg-white mx-auto">
      {/* Desktop Layout */}
      <div className="hidden lg:flex h-[456px] w-full max-w-[1600px] mx-auto flex-col gap-[80px] pt-[120px] px-[120px] pb-[60px]">
        {/* Main Footer Content Cards */}
        <div className="grid grid-cols-4 items-start w-full max-w-[1360px] h-[176px] gap-[120px]">
          {/* Business Logo & Social Icons */}
          <div className="flex flex-col h-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-inter">
              Business Logo
            </h2>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src={xIcon} alt="X (Twitter)" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src={instraIcon} alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-inter">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">
                  Plumbing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">
                  Drainage
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">
                  Bathrooms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">
                  Commercial
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-inter">
              Useful Links
            </h3>
            <div className="grid grid-cols-2 gap-x-12">
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter whitespace-nowrap">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter whitespace-nowrap">
                    Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter whitespace-nowrap">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter whitespace-nowrap">
                    Rates
                  </a>
                </li>
              </ul>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter whitespace-nowrap">
                    Customer Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter whitespace-nowrap">
                    Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter whitespace-nowrap">
                    Locations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter whitespace-nowrap">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-inter">
              Contact Info
            </h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <img src={mapPin} alt="Location" className="w-5 h-5 mt-1" />
                <p className="text-gray-600 font-inter">
                  1 Sail Street, London, SE11 6NQ
                </p>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:enquiries@PlumbingPros.com" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">
                  enquiries@PlumbingPros.com
                </a>
              </div>
              
              {/* Phone */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:02045276474" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">
                  020 4527 6474
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-inter">
            © Plumbing Pros. All Rights Reserved
          </p>
          <p className="text-gray-500 text-sm font-inter">
            Website by IH Adventure And Creative
          </p>
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:flex lg:hidden flex-col w-full max-w-[768px] min-h-[631px] mx-auto gap-[40px] p-[40px] md:px-8">
        {/* Business Logo & Social Icons */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-inter">
            Business Logo
          </h2>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-75 transition-opacity">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              <img src={xIcon} alt="X (Twitter)" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              <img src={instraIcon} alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Our Services and Useful Links Row */}
        <div className="grid grid-cols-2 gap-x-16">
          {/* Our Services */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-inter">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">Plumbing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">Drainage</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">Bathrooms</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">Commercial</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-inter">
              Useful Links
            </h3>
            <div className="grid grid-cols-2 gap-x-12">
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter whitespace-nowrap">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter whitespace-nowrap">Updates</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter whitespace-nowrap">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter whitespace-nowrap">Rates</a></li>
              </ul>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter whitespace-nowrap">Customer Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter whitespace-nowrap">Updates</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter whitespace-nowrap">Locations</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter whitespace-nowrap">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 font-inter">
            Contact Info
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <img src={mapPin} alt="Location" className="w-5 h-5 mt-1" />
              <p className="text-gray-600 font-inter">1 Sail Street, London, SE11 6NQ</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 mt-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:enquiries@PlumbingPros.com" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">enquiries@PlumbingPros.com</a>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 mt-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:02045276474" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">020 4527 6474</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center gap-4 mt-auto">
          <p className="text-gray-500 text-sm font-inter">© Plumbing Pros. All Rights Reserved</p>
          <p className="text-gray-500 text-sm font-inter">Website by IH Adventure And Creative</p>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col w-full max-w-[390px] h-[776px] mx-auto gap-[32px] pt-[32px] px-[16px] pb-[32px]">
        {/* Business Logo & Social Icons */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-gray-900 mb-4 font-inter">
            Business Logo
          </h2>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-75 transition-opacity">
              <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              <img src={xIcon} alt="X (Twitter)" className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              <img src={instraIcon} alt="Instagram" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Our Services */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 font-inter">
            Our Services
          </h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">Plumbing</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">Drainage</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">Bathrooms</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">Commercial</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 font-inter">
            Useful Links
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">Updates</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">Rates</a></li>
            </ul>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">Customer Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">Updates</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">Locations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">Sitemap</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 font-inter">
            Contact Info
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <img src={mapPin} alt="Location" className="w-4 h-4 mt-1" />
              <p className="text-gray-600 font-inter text-sm">1 Sail Street, London, SE11 6NQ</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 mt-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:enquiries@PlumbingPros.com" className="text-gray-600 hover:text-gray-900 transition-colors font-inter text-sm">enquiries@PlumbingPros.com</a>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 mt-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:02045276474" className="text-gray-600 hover:text-gray-900 transition-colors font-inter text-sm">020 4527 6474</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center gap-4 mt-auto">
          <p className="text-gray-500 text-xs font-inter text-center">© Plumbing Pros. All Rights Reserved</p>
          <p className="text-gray-500 text-xs font-inter text-center">Website by IH Adventure And Creative</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer