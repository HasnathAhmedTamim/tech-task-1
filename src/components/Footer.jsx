import facebookIcon from '../assets/facebookIcon.png'
import linkedinIcon from '../assets/linkedinIcon.png'
import xIcon from '../assets/xIcon.png'
import instraIcon from '../assets/instraIcon.png'
import mapPin from '../assets/mapIcon.png'
import mailIcon from '../assets/mailIcon.png'
import phoneIcon from '../assets/phoneIcon.png'

const Footer = () => {
  return (
    <section className="w-full bg-white">
      <div className="block md:hidden w-full min-h-[776px] pt-[32px] pr-[16px] pb-[32px] pl-[16px] opacity-100">
        <div className="max-w-[390px] mx-auto">
          <div className="flex flex-col gap-[32px]">
            <div className="w-full">
              <h2 className="text-[24px] font-bold font-inter text-black leading-[100%] tracking-[-0.03em]">
                Business Logo
              </h2>
            </div>
            <div className="flex gap-3 w-auto">
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
            
            {/* Our Services */}
            <div className="flex flex-col gap-[16px]">
              <h3 className="text-[16px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%]">
                Our Services
              </h3>
              <ul className="flex flex-col gap-2">
                <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">Plumbing</a></li>
                <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">Drainage</a></li>
                <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">Bathrooms</a></li>
                <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">Commercial</a></li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="flex flex-col gap-[16px]">
              <h3 className="text-[16px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%]">
                Useful Links
              </h3>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">Contact Us</a>
                  <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">Customer Services</a>
                  <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">Updates</a>
                  <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">Updates</a>
                  <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">About Us</a>
                  <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">Locations</a>
                  <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">Rates</a>
                  <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">Sitemap</a>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-[16px]">
              <h3 className="text-[16px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%]">
                Contact Info
              </h3>
              <div className="flex flex-col gap-[12px]">
                <div className="flex items-start gap-[8px]">
                  <img src={mapPin} alt="Location" className="w-4 h-4 mt-1 flex-shrink-0" />
                  <p className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[20px]">1 Sail Street, London, SE11 6NQ</p>
                </div>
                <div className="flex items-start gap-[8px]">
                  <img src={mailIcon} alt="Email" className="w-4 h-4 mt-1 flex-shrink-0" />
                  <a href="mailto:enquiries@PlumbingPros.com" className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity break-all">enquiries@PlumbingPros.com</a>
                </div>
                <div className="flex items-start gap-[8px]">
                  <img src={phoneIcon} alt="Phone" className="w-4 h-4 mt-1 flex-shrink-0" />
                  <a href="tel:02045276474" className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">020 4527 6474</a>
                </div>
              </div>
            </div>

            {/* Bottom Footer - Small Device */}
            <div className="pt-[16px] border-t border-gray-200">
              <div className="w-full max-w-[358px] h-[40px] gap-[8px] flex flex-col justify-center items-center mx-auto opacity-100">
                <p className="text-[12px] font-normal font-inter text-[#2A2F32] leading-[16px] text-center">
                  © Plumbing Pros. All Rights Reserved
                </p>
                <p className="text-[12px] font-normal font-inter text-[#2A2F32] leading-[16px] text-center">
                  Website by IH Adventure And Creative
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Medium Device Layout - Height: 631px, Gap: 40px, Padding: 40px, Opacity: 1 */}
      <div className="hidden md:flex lg:hidden w-full min-h-[631px] gap-[40px] p-[40px] opacity-100" style={{ transform: 'rotate(0deg)' }}>
        <div className="max-w-[768px] mx-auto w-full">
          <div className="flex flex-col gap-[40px]">
            {/* Top Row */}
            <div className="flex justify-between items-start">
              {/* Business Logo */}
              <div className="w-[200px]">
                <h2 className="text-[28px] font-bold font-inter text-black leading-[100%] tracking-[-0.03em]">
                  Business Logo
                </h2>
              </div>
              
              {/* Social Media */}
              <div className="flex gap-3">
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

            {/* Content Grid */}
            <div className="grid grid-cols-2 gap-[40px]">
              {/* Our Services */}
              <div className="flex flex-col gap-[16px]">
                <h3 className="text-[16px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%]">
                  Our Services
                </h3>
                <ul className="flex flex-col gap-3">
                  <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">Plumbing</a></li>
                  <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">Drainage</a></li>
                  <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">Bathrooms</a></li>
                  <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">Commercial</a></li>
                </ul>
              </div>

              {/* Useful Links */}
              <div className="flex flex-col gap-[16px]">
                <h3 className="text-[16px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%]">
                  Useful Links
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">Contact Us</a>
                  <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">Customer Services</a>
                  <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">Updates</a>
                  <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">Updates</a>
                  <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">About Us</a>
                  <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">Locations</a>
                  <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">Rates</a>
                  <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">Sitemap</a>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-[16px]">
              <h3 className="text-[16px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%]">
                Contact Info
              </h3>
              <div className="flex flex-col gap-[12px]">
                <div className="flex items-start gap-[8px]">
                  <img src={mapPin} alt="Location" className="w-4 h-4 mt-1 flex-shrink-0" />
                  <p className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[20px]">1 Sail Street, London, SE11 6NQ</p>
                </div>
                <div className="flex items-start gap-[8px]">
                  <img src={mailIcon} alt="Email" className="w-4 h-4 mt-1 flex-shrink-0" />
                  <a href="mailto:enquiries@PlumbingPros.com" className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity break-all">enquiries@PlumbingPros.com</a>
                </div>
                <div className="flex items-start gap-[8px]">
                  <img src={phoneIcon} alt="Phone" className="w-4 h-4 mt-1 flex-shrink-0" />
                  <a href="tel:02045276474" className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[20px] hover:opacity-75 transition-opacity">020 4527 6474</a>
                </div>
              </div>
            </div>

            {/* Bottom Footer - Medium Device */}
            <div className="pt-[24px] border-t border-gray-200">
              <div className="w-full max-w-[688px] h-[20px] flex justify-between items-center mx-auto opacity-100">
                <p className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px]">
                  © Plumbing Pros. All Rights Reserved
                </p>
                <p className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px]">
                  Website by IH Adventure And Creative
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Device Layout - Height: 456px, Gap: 80px, Padding: 120px 120px 60px 120px, Opacity: 1 */}
      <div className="hidden lg:flex w-full min-h-[456px] gap-[80px] pt-[120px] pr-[120px] pb-[60px] pl-[120px] opacity-100" style={{ transform: 'rotate(0deg)' }}>
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="flex flex-col gap-[80px]">
            {/* Main Footer Content */}
            <div className="flex justify-between items-start w-full max-w-[1360px] mx-auto">
              {/* Business Logo & Social Icons */}
              <div className="flex flex-col w-[260px] gap-[28px]">
                <h2 className="text-[32px] font-bold font-inter text-black leading-[100%] tracking-[-0.03em]">
                  Business Logo
                </h2>
                
                {/* Social Media Icons */}
                <div className="flex gap-4 w-auto max-w-[144px]">
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

              {/* Our Services and Useful Links Container */}
              <div className="flex w-[430px] gap-[80px] items-start">
                {/* Our Services */}
                <div className="flex flex-col w-[79px] gap-[16px]">
                  <h3 className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%]">
                    Our Services
                  </h3>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">
                        Plumbing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">
                        Drainage
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">
                        Bathrooms
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">
                        Commercial
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Useful Links */}
                <div className="flex flex-col gap-[24px] items-start">
                  <h3 className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%]">
                    Useful Links
                  </h3>
                  <div className="flex gap-[20px] items-start">
                    <div className="flex flex-col w-[75px] gap-[16px]">
                      <ul className="flex flex-col gap-3">
                        <li>
                          <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity whitespace-nowrap">
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity whitespace-nowrap">
                            Updates
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity whitespace-nowrap">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity whitespace-nowrap">
                            Rates
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col w-[126px] gap-[16px]">
                      <ul className="flex flex-col gap-3">
                        <li>
                          <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity whitespace-nowrap">
                            Customer Services
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity whitespace-nowrap">
                            Updates
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity whitespace-nowrap">
                            Locations
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity whitespace-nowrap">
                            Sitemap
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col w-[430px] gap-[24px]">
                <h3 className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%]">
                  Contact Info
                </h3>
                <div className="flex flex-col w-[246px] gap-[20px]">
                  {/* Address */}
                  <div className="flex items-start w-[246px] h-[24px] gap-[12px]">
                    <img src={mapPin} alt="Location" className="w-6 h-6 mt-1" />
                    <p className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%]">
                      1 Sail Street, London, SE11 6NQ
                    </p>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-start w-[246px] h-[24px] gap-[12px]">
                    <img src={mailIcon} alt="Email" className="w-6 h-6 mt-1" />
                    <a href="mailto:enquiries@PlumbingPros.com" className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%] hover:opacity-75 transition-opacity">
                      enquiries@PlumbingPros.com
                    </a>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start w-[246px] h-[24px] gap-[12px]">
                    <img src={phoneIcon} alt="Phone" className="w-6 h-6 mt-1" />
                    <a href="tel:02045276474" className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%] hover:opacity-75 transition-opacity">
                      020 4527 6474
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer - Large Device */}
            <div className="flex items-center justify-center w-full max-w-[1360px] mx-auto h-[20px] opacity-100">
              <div className="w-full max-w-[1360px] h-[20px] flex justify-between items-center">
                <p className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%]">
                  © Plumbing Pros. All Rights Reserved
                </p>
                <p className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%]">
                  Website by IH Adventure And Creative
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer