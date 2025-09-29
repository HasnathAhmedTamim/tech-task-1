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
        {/* Mobile Layout */}
        <div className="block md:hidden w-[390px] h-[448px] mx-auto">
          <h2 className="text-[24px] font-bold text-center text-[#1B1743] mb-[120px] font-inter leading-[32px] tracking-[-0.03em]">
            Frequently asked questions
          </h2>
          
          <div className="w-[358px] h-[288px] gap-[16px] flex flex-col mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="w-[358px] h-[96px] gap-[28px] flex flex-col border-b border-gray-200 last:border-b-0">
                <button
                  className="w-full flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 px-0"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <h3 className="text-[16px] font-semibold text-[#1B1743] pr-4 font-inter leading-[24px] tracking-[-0.03em]">
                    {faq.question}
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
                    openFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="text-[14px] font-normal text-[#2A2F32] font-inter leading-[20px] tracking-[0%]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet and Desktop Layout */}
        <div className="hidden md:block">
          {/* Tablet Layout */}
          <div className="lg:hidden w-[768px] h-[488px] gap-[40px] p-[40px] mx-auto flex flex-col">
            <h2 className="text-[32px] font-bold text-center text-[#1B1743] font-inter md:leading-[40px] tracking-[-0.03em] w-[688px] h-[40px] mx-auto">
              Frequently asked questions
            </h2>
            
            <div className="w-[688px] h-[328px] gap-[24px] flex flex-col mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="w-[688px] h-[88px] gap-[40px] flex flex-col border-b border-gray-200 last:border-b-0">
                  <button
                    className="w-full flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 px-0"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    <h3 className="text-[20px] font-semibold text-[#1B1743] pr-4 font-inter md:leading-[28px] tracking-[-0.03em]">
                      {faq.question}
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
                      openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p className="text-[14px] font-normal text-[#2A2F32] font-inter md:leading-[20px] tracking-[0%]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <h2 className="text-[48px] font-bold text-center text-[#1B1743] mb-[120px] font-inter lg:leading-[48px] tracking-[-0.03em]">
              Frequently asked questions
            </h2>
            
            <div className="space-y-0 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  <button
                    className="w-full py-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 px-0"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    <h3 className="text-[28px] font-semibold text-[#1B1743] pr-4 font-inter lg:leading-[40px] tracking-[-0.03em]">
                      {faq.question}
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
                    <p className="text-[18px] font-normal text-[#2A2F32] font-inter lg:leading-[30px] tracking-[0%]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQSection