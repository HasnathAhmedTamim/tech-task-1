import { useState } from 'react'

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(0) // Track which FAQ is open (default first one)

  const faqs = [
    {
      question: "Do plumbers deal with heating?",
      answer: "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens."
    },
    {
      question: "Do you charge a call out fee?",
      answer: "We provide transparent pricing with no hidden call-out fees. Our quotes are provided upfront before any work begins."
    },
    {
      question: "How quickly can your company send out an engineer?",
      answer: "We offer same-day emergency service for urgent plumbing issues, and our team can typically be on-site within 2-4 hours of your call."
    },
    {
      question: "What should I do if I get a water leak?",
      answer: "Turn off your main water supply immediately, clear the area of any valuables, and call us right away for emergency plumbing assistance."
    }
  ]

  return (
    <div className="w-full py-[120px] px-4 md:px-[120px] bg-white">
      <div className="max-w-[1360px] mx-auto">
        <h2 className="text-[24px] md:text-[32px] lg:text-[48px] font-bold text-center text-custom-dark mb-[120px] font-inter" 
            style={{
              fontFamily: 'Inter', 
              fontWeight: 700, 
              color: '#1B1743',
              letterSpacing: '-3%'
            }}>
          <span className="block md:hidden" style={{fontSize: '24px', lineHeight: '32px'}}>
            Frequently asked questions
          </span>
          <span className="hidden md:block lg:hidden" style={{fontSize: '32px', lineHeight: '40px'}}>
            Frequently asked questions
          </span>
          <span className="hidden lg:block" style={{fontSize: '48px', lineHeight: '48px'}}>
            Frequently asked questions
          </span>
        </h2>
        
        <div className="space-y-0 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                className="w-full py-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 px-0"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                <h3 className="text-[16px] md:text-[20px] lg:text-[28px] font-semibold text-custom-dark pr-4 font-inter" 
                    style={{
                      fontFamily: 'Inter', 
                      fontWeight: 600, 
                      color: '#1B1743',
                      letterSpacing: '-3%'
                    }}>
                  <span className="block md:hidden" style={{fontSize: '16px', lineHeight: '24px'}}>
                    {faq.question}
                  </span>
                  <span className="hidden md:block lg:hidden" style={{fontSize: '20px', lineHeight: '28px'}}>
                    {faq.question}
                  </span>
                  <span className="hidden lg:block" style={{fontSize: '28px', lineHeight: '40px'}}>
                    {faq.question}
                  </span>
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === index ? 'max-h-96 pb-8' : 'max-h-0 pb-0'
                }`}
              >
                <p className="text-[14px] md:text-[14px] lg:text-[18px] font-normal text-custom-gray font-inter" 
                   style={{
                     fontFamily: 'Inter', 
                     fontWeight: 400, 
                     color: '#2A2F32',
                     letterSpacing: '0%'
                   }}>
                  <span className="block md:hidden" style={{fontSize: '14px', lineHeight: '20px'}}>
                    {faq.answer}
                  </span>
                  <span className="hidden md:block lg:hidden" style={{fontSize: '14px', lineHeight: '20px'}}>
                    {faq.answer}
                  </span>
                  <span className="hidden lg:block" style={{fontSize: '18px', lineHeight: '30px'}}>
                    {faq.answer}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQSection