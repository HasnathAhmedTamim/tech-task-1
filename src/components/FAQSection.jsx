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
    <section className="w-full bg-white">
      {/* Mobile Layout - Full width responsive, min-height: 448px */}
      <div className="block md:hidden w-full min-h-[448px] opacity-100" style={{ transform: 'rotate(0deg)' }}>
        <div className="max-w-[390px] mx-auto pt-[60px] px-[16px] pb-[60px]">
          <h2 className="text-[24px] font-bold text-center text-[#1B1743] mb-[40px] font-inter leading-[32px] tracking-[-0.03em]">
            Frequently asked questions
          </h2>
          
          <div className="w-full max-w-[358px] gap-[16px] flex flex-col mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="w-full gap-[20px] flex flex-col border-b border-gray-200 last:border-b-0 pb-4">
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
                {openFaq === index && (
                  <div className="pt-4">
                    <p className="w-full max-w-[306px] min-h-[60px] text-[14px] font-normal text-[#2A2F32] font-inter leading-[20px] tracking-[0%]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tablet/Medium Layout - Full width responsive, min-height: 488px */}
      <div className="hidden md:flex lg:hidden w-full min-h-[488px] gap-[40px] py-[40px] flex-col opacity-100" style={{ transform: 'rotate(0deg)' }}>
        <div className="max-w-[768px] mx-auto px-[40px] w-full">
          <h2 className="text-[32px] font-bold text-center text-[#1B1743] font-inter leading-[40px] tracking-[-0.03em] w-full max-w-[688px] h-[40px] mx-auto">
            Frequently asked questions
          </h2>
          
          <div className="w-full max-w-[688px] h-auto min-h-[328px] gap-[24px] flex flex-col mx-auto mt-[40px]">
            {faqs.map((faq, index) => (
              <div key={index} className="w-full h-auto min-h-[88px] gap-[40px] flex flex-col border-b border-gray-200 last:border-b-0 pb-6">
                <button
                  className="w-full flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 px-0"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <h3 className="text-[20px] font-semibold text-[#1B1743] pr-4 font-inter leading-[28px] tracking-[-0.03em]">
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
                {openFaq === index && (
                  <div className="pt-4 mt-4">
                    <p className="w-full max-w-[616px] h-auto min-h-[40px] text-[14px] font-normal text-[#2A2F32] font-inter leading-[20px] tracking-[0%]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Laptop Layout - Full width responsive, min-height: 850px (1024px-1280px) */}
      <div className="hidden lg:flex xl:hidden w-full min-h-[850px] gap-[60px] py-[60px] flex-col justify-center items-center opacity-100" style={{ transform: 'rotate(0deg)' }}>
        <div className="max-w-[1024px] mx-auto px-[60px] w-full">
          <h2 className="text-[48px] font-bold text-center text-[#1B1743] font-inter leading-[48px] tracking-[-0.03em] w-full max-w-[900px] h-[58px] mx-auto">
            Frequently asked questions
          </h2>
          
          <div className="w-full max-w-[800px] h-auto min-h-[432px] gap-[40px] flex flex-col mx-auto mt-[60px]">
            {faqs.map((faq, index) => (
              <div key={index} className="w-full h-auto min-h-[120px] gap-[40px] flex flex-col border-b border-gray-200 last:border-b-0 pb-8">
                  <button
                    className="w-full flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 px-0"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    <h3 className="text-[28px] font-semibold text-[#1B1743] pr-4 font-inter leading-[40px] tracking-[-0.03em]">
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
                  {openFaq === index && (
                    <div className="pt-4">
                      <p className="w-full max-w-[700px] text-[18px] font-normal text-[#2A2F32] font-inter leading-[30px] tracking-[0%]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
        </div>
      </div>

      {/* Desktop Layout - Full width responsive, min-height: 850px (1280px+) */}
      <div className="hidden xl:flex w-full min-h-[850px] gap-[120px] py-[120px] flex-col justify-center items-center opacity-100" style={{ transform: 'rotate(0deg)' }}>
        <div className="max-w-[1600px] mx-auto px-[120px] w-full">
          <h2 className="text-[48px] font-bold text-center text-[#1B1743] font-inter leading-[48px] tracking-[-0.03em] w-full max-w-[1360px] h-[58px] mx-auto">
            Frequently asked questions
          </h2>
          
          <div className="w-full max-w-[1360px] h-auto min-h-[432px] gap-[40px] flex flex-col mx-auto mt-[120px]">
            {faqs.map((faq, index) => (
              <div key={index} className="w-full h-auto min-h-[88px] gap-[40px] flex flex-col border-b border-gray-200 last:border-b-0 pb-8">
                  <button
                    className="w-full flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 px-0"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    <h3 className="text-[32px] font-semibold text-[#1B1743] pr-4 font-inter leading-[40px] tracking-[-0.03em]">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-8 h-8 text-gray-400 transition-transform duration-300 ${
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
                  {openFaq === index && (
                    <div className="pt-4">
                      <p className="w-full max-w-[848px] h-auto min-h-[60px] text-[18px] font-normal text-[#2A2F32] font-inter leading-[30px] tracking-[0%]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection