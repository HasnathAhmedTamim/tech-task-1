import facebookIcon from '../assets/facebookIcon.png'
import linkedinIcon from '../assets/linkedinIcon.png'
import xIcon from '../assets/xIcon.png'
import instraIcon from '../assets/instraIcon.png'
import mapPin from '../assets/mapIcon.png'
import mailIcon from '../assets/mailIcon.png'
import phoneIcon from '../assets/phoneIcon.png'

const Footer = () => {
  return (
    <footer className="w-full bg-white mx-auto">
      {/* Desktop Layout */}
      <div className="hidden lg:flex h-[456px] w-full max-w-[1600px] mx-auto flex-col gap-[80px] pt-[120px] px-[120px] pb-[60px]">
        {/* Main Footer Content Cards */}
        <div className="grid grid-cols-4 items-start w-full max-w-[1360px] h-[176px] gap-[120px]">
          {/* Business Logo & Social Icons */}
          <div className="flex flex-col h-full">
            <h2 className="text-[32px] font-bold font-inter text-black leading-[100%] tracking-[-0.03em] mb-6">
              Business Logo
            </h2>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 w-[144px] h-[24px]">
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
            <h3 className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%] mb-4">
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
            <h3 className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%] mb-4">
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
            <h3 className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%] mb-4">
              Contact Info
            </h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <img src={mapPin} alt="Location" className="w-6 h-6 mt-1" />
                <p className="text-gray-600 font-inter">
                  1 Sail Street, London, SE11 6NQ
                </p>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-3">
                <img src={mailIcon} alt="Email" className="w-6 h-6 mt-1" />
                <a href="mailto:enquiries@PlumbingPros.com" className="text-gray-600 hover:text-gray-900 transition-colors font-inter">
                  enquiries@PlumbingPros.com
                </a>
              </div>
              
              {/* Phone */}
              <div className="flex items-start gap-3">
                <img src={phoneIcon} alt="Phone" className="w-6 h-6 mt-1" />
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
      <div className="hidden md:flex lg:hidden flex-col w-[768px] h-[631px] mx-auto gap-[40px] p-[40px]">
        {/* Business Logo & Social Icons */}
        <div className="flex flex-col w-[260px] h-[91px] gap-[28px]">
          <h2 className="text-[32px] font-bold font-inter text-black leading-[100%] tracking-[-0.03em]">
            Business Logo
          </h2>
          <div className="flex gap-4 w-[144px] h-[24px]">
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
        <div className="grid grid-cols-2 gap-[40px] w-[688px] h-[168px]">
          {/* Our Services */}
          <div className="flex flex-col w-[200px] h-[168px] gap-[16px]">
            <h3 className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%]">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">Plumbing</a></li>
              <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">Drainage</a></li>
              <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">Bathrooms</a></li>
              <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">Commercial</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col w-[448px] h-[168px] gap-[16px]">
            <h3 className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%]">
              Useful Links
            </h3>
            <div className="flex gap-x-12">
              <div className="flex flex-col w-[83px] h-[128px] gap-[16px]">
                <ul className="space-y-3">
                  <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity whitespace-nowrap">Contact Us</a></li>
                  <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity whitespace-nowrap">Updates</a></li>
                  <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity whitespace-nowrap">About Us</a></li>
                  <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity whitespace-nowrap">Rates</a></li>
                </ul>
              </div>
              <div className="flex flex-col w-[126px] h-[128px] gap-[16px]">
                <ul className="space-y-3">
                  <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity whitespace-nowrap">Customer Services</a></li>
                  <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity whitespace-nowrap">Updates</a></li>
                  <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity whitespace-nowrap">Locations</a></li>
                  <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity whitespace-nowrap">Sitemap</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col w-[688px] h-[152px] gap-[16px]">
          <h3 className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%]">
            Contact Info
          </h3>
          <div className="flex flex-col w-[246px] h-[112px] gap-[20px]">
            <div className="flex items-start w-[246px] h-[24px] gap-[12px]">
              <img src={mapPin} alt="Location" className="w-6 h-6 mt-1" />
              <p className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%]">1 Sail Street, London, SE11 6NQ</p>
            </div>
            <div className="flex items-start w-[246px] h-[24px] gap-[12px]">
              <img src={mailIcon} alt="Email" className="w-6 h-6 mt-1" />
              <a href="mailto:enquiries@PlumbingPros.com" className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%] hover:opacity-75 transition-opacity">enquiries@PlumbingPros.com</a>
            </div>
            <div className="flex items-start w-[141px] h-[24px] gap-[12px]">
              <img src={phoneIcon} alt="Phone" className="w-6 h-6 mt-1" />
              <a href="tel:02045276474" className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%] hover:opacity-75 transition-opacity">020 4527 6474</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-between items-center w-[688px] h-[20px]">
          <p className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] opacity-50 w-[251px] h-[20px]">
            © Plumbing Pros. All Rights Reserved
          </p>
          <p className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] opacity-50 w-[254px] h-[20px]">
            Website by IH Adventure And Creative
          </p>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col w-full max-w-[390px] h-[776px] mx-auto gap-[32px] pt-[32px] px-[16px] pb-[32px]">
        {/* Business Logo & Social Icons */}
        <div className="flex flex-col">
          <h2 className="text-[20px] font-bold font-inter text-black leading-[28px] tracking-[-0.03em] mb-4">
            Business Logo
          </h2>
          <div className="flex gap-4 w-[128px] h-[20px]">
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
        <div className="flex flex-col w-[358px] h-[168px] gap-4">
          <h3 className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%]">
            Our Services
          </h3>
          <div className="w-[358px] h-[128px] gap-[16px]">
            <ul className="space-y-3">
              <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">Plumbing</a></li>
              <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">Drainage</a></li>
              <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">Bathrooms</a></li>
              <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">Commercial</a></li>
            </ul>
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col">
          <h3 className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%] mb-4">
            Useful Links
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-[171px] h-[128px] gap-[16px]">
              <ul className="space-y-3">
                <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">Contact Us</a></li>
                <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">Updates</a></li>
                <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">About Us</a></li>
                <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">Rates</a></li>
              </ul>
            </div>
            <div className="w-[171px] h-[128px] gap-[16px]">
              <ul className="space-y-3">
                <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">Customer Services</a></li>
                <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">Updates</a></li>
                <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">Locations</a></li>
                <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col">
          <h3 className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%] mb-4">
            Contact Info
          </h3>
          <div className="flex flex-col w-[246px] h-[104px] gap-[16px]">
            <div className="flex items-start gap-3">
              <img src={mapPin} alt="Location" className="w-6 h-6 mt-1" />
              <p className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%]">1 Sail Street, London, SE11 6NQ</p>
            </div>
            <div className="flex items-start gap-3">
              <img src={mailIcon} alt="Email" className="w-6 h-6 mt-1" />
              <a href="mailto:enquiries@PlumbingPros.com" className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%] hover:opacity-75 transition-opacity">enquiries@PlumbingPros.com</a>
            </div>
            <div className="flex items-start gap-3">
              <img src={phoneIcon} alt="Phone" className="w-6 h-6 mt-1" />
              <a href="tel:02045276474" className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%] hover:opacity-75 transition-opacity">020 4527 6474</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center w-[358px] h-[40px] gap-[8px] mt-auto">
          <p className="text-[10px] font-normal font-inter text-[#2A2F32] leading-[16px] tracking-[0%] text-center">© Plumbing Pros. All Rights Reserved</p>
          <p className="text-[10px] font-normal font-inter text-[#2A2F32] leading-[16px] tracking-[0%] text-center opacity-50 w-[181px] h-[16px]">Website by IH Adventure And Creative</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer