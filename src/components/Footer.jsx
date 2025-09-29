import facebookIcon from '../assets/facebookIcon.png'
import linkedinIcon from '../assets/linkedinIcon.png'
import xIcon from '../assets/xIcon.png'
import instraIcon from '../assets/instraIcon.png'
import mapPin from '../assets/mapIcon.png'
import mailIcon from '../assets/mailIcon.png'
import phoneIcon from '../assets/phoneIcon.png'

const Footer = () => {
  return (
    <footer className="bg-white w-full flex justify-center">
      {/* Desktop Layout */}
      <div className="hidden xl:flex w-full max-w-[1600px] h-auto min-h-[456px] flex-col gap-[80px] xl:pt-[60px] xl:pr-[60px] xl:pb-[40px] xl:pl-[60px] 2xl:pt-[120px] 2xl:pr-[120px] 2xl:pb-[60px] 2xl:pl-[120px] justify-center items-center">
        {/* Main Footer Content Cards */}
        <div className="flex items-start w-full max-w-[1360px] h-auto xl:gap-[80px] 2xl:gap-[120px] flex-wrap xl:flex-nowrap px-4">
          {/* Business Logo & Social Icons */}
          <div className="flex flex-col w-full max-w-[260px] h-auto gap-[28px]">
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
          <div className="flex w-full max-w-[430px] h-auto gap-[80px] items-start flex-wrap sm:flex-nowrap">
            {/* Our Services */}
            <div className="flex flex-col w-full max-w-[88px] h-auto gap-[24px]">
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
              <div className="flex gap-[20px] items-start flex-wrap sm:flex-nowrap">
                <div className="flex flex-col w-full max-w-[75px] h-auto gap-[16px]">
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
                <div className="flex flex-col w-full max-w-[126px] h-auto gap-[16px]">
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
          <div className="flex flex-col w-full max-w-[430px] h-auto gap-[24px]">
            <h3 className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%]">
              Contact Info
            </h3>
            <div className="space-y-4">
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
              <div className="flex items-start w-[141px] h-[24px] gap-[12px]">
                <img src={phoneIcon} alt="Phone" className="w-6 h-6 mt-1" />
                <a href="tel:02045276474" className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%] hover:opacity-75 transition-opacity">
                  020 4527 6474
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-between items-center w-full max-w-[1360px] h-auto flex-wrap sm:flex-nowrap gap-4">
          <p className="w-auto max-w-[251px] text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] opacity-50">
            © Plumbing Pros. All Rights Reserved
          </p>
          <p className="w-auto max-w-[254px] text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] opacity-50">
            Website by IH Adventure And Creative
          </p>
        </div>
      </div>

      {/* Tablet/Medium Layout - For all medium devices (768px - 1280px) */}
      <div className="hidden md:flex xl:hidden flex-col w-full max-w-[768px] h-auto min-h-[631px] mx-auto gap-[40px] p-[40px]">
        {/* Business Logo & Social Icons */}
        <div className="flex flex-col w-full max-w-[260px] gap-[28px]">
          <h2 className="text-[32px] font-bold font-inter text-black leading-[100%] tracking-[-0.03em]">
            Business Logo
          </h2>
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

        {/* Our Services and Useful Links Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px] w-full max-w-[688px]">
          {/* Our Services */}
          <div className="flex flex-col w-full max-w-[200px] gap-[16px]">
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
          <div className="flex flex-col w-full max-w-[448px] gap-[16px]">
            <h3 className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%]">
              Useful Links
            </h3>
            <div className="flex gap-x-12 flex-wrap sm:flex-nowrap">
              <div className="flex flex-col w-auto max-w-[83px] gap-[16px]">
                <ul className="space-y-3">
                  <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity whitespace-nowrap">Contact Us</a></li>
                  <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity whitespace-nowrap">Updates</a></li>
                  <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity whitespace-nowrap">About Us</a></li>
                  <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity whitespace-nowrap">Rates</a></li>
                </ul>
              </div>
              <div className="flex flex-col w-auto max-w-[126px] gap-[16px]">
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
        <div className="flex flex-col w-full max-w-[688px] gap-[16px]">
          <h3 className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%]">
            Contact Info
          </h3>
          <div className="flex flex-col w-auto max-w-[246px] gap-[20px]">
            <div className="flex items-start w-auto max-w-[246px] gap-[12px]">
              <img src={mapPin} alt="Location" className="w-6 h-6 mt-1" />
              <p className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%]">1 Sail Street, London, SE11 6NQ</p>
            </div>
            <div className="flex items-start w-auto max-w-[246px] gap-[12px]">
              <img src={mailIcon} alt="Email" className="w-6 h-6 mt-1" />
              <a href="mailto:enquiries@PlumbingPros.com" className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%] hover:opacity-75 transition-opacity">enquiries@PlumbingPros.com</a>
            </div>
            <div className="flex items-start w-auto max-w-[141px] gap-[12px]">
              <img src={phoneIcon} alt="Phone" className="w-6 h-6 mt-1" />
              <a href="tel:02045276474" className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%] hover:opacity-75 transition-opacity">020 4527 6474</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-between items-center w-full max-w-[688px] flex-wrap sm:flex-nowrap gap-4">
          <p className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] opacity-50 w-auto max-w-[251px]">
            © Plumbing Pros. All Rights Reserved
          </p>
          <p className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] opacity-50 w-auto max-w-[254px]">
            Website by IH Adventure And Creative
          </p>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col w-full max-w-[390px] h-auto min-h-[776px] mx-auto gap-[32px] pt-[32px] px-[16px] pb-[32px]">
        {/* Business Logo & Social Icons */}
        <div className="flex flex-col">
          <h2 className="text-[20px] font-bold font-inter text-black leading-[28px] tracking-[-0.03em] mb-4">
            Business Logo
          </h2>
          <div className="flex gap-4 w-auto max-w-[128px] h-[20px] flex-wrap">
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
        <div className="flex flex-col w-full max-w-[358px] h-auto min-h-[168px] gap-4">
          <h3 className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%]">
            Our Services
          </h3>
          <div className="w-full max-w-[358px] h-auto min-h-[128px] gap-[16px]">
            <ul className="space-y-3">
              <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">Plumbing</a></li>
              <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">Drainage</a></li>
              <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">Bathrooms</a></li>
              <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">Commercial</a></li>
            </ul>
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col w-full">
          <h3 className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%] mb-4">
            Useful Links
          </h3>
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="w-auto max-w-[171px] h-auto min-h-[128px] gap-[16px]">
              <ul className="space-y-3">
                <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">Contact Us</a></li>
                <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">Updates</a></li>
                <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">About Us</a></li>
                <li><a href="#" className="text-[14px] font-normal font-inter text-[#2A2F32] leading-[20px] tracking-[0%] hover:opacity-75 transition-opacity">Rates</a></li>
              </ul>
            </div>
            <div className="w-auto max-w-[171px] h-auto min-h-[128px] gap-[16px]">
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
        <div className="flex flex-col w-full">
          <h3 className="text-[14px] font-semibold font-inter text-[#2A2F32] leading-[24px] tracking-[0%] mb-4">
            Contact Info
          </h3>
          <div className="flex flex-col w-full max-w-[246px] h-auto min-h-[104px] gap-[16px]">
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
        <div className="flex flex-col items-center w-full max-w-[358px] h-auto min-h-[40px] gap-[8px] mt-auto">
          <p className="text-[10px] font-normal font-inter text-[#2A2F32] leading-[16px] tracking-[0%] text-center">© Plumbing Pros. All Rights Reserved</p>
          <p className="text-[10px] font-normal font-inter text-[#2A2F32] leading-[16px] tracking-[0%] text-center opacity-50 w-auto max-w-[181px] h-auto min-h-[16px]">Website by IH Adventure And Creative</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer