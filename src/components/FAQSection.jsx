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
    <>
      {/* Mobile Layout */}
      <div className="block md:hidden w-full max-w-[390px] h-auto min-h-[448px] mx-auto py-[60px] px-4 bg-white">
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

      {/* Tablet/Medium Layout - For all medium devices (768px - 1280px) */}
      <div className="hidden md:flex xl:hidden w-full max-w-[768px] h-auto min-h-[488px] gap-[40px] p-[40px] mx-auto flex-col bg-white">
        <h2 className="text-[32px] font-bold text-center text-[#1B1743] font-inter md:leading-[40px] tracking-[-0.03em] w-full max-w-[688px] mx-auto">
          Frequently asked questions
        </h2>
        
        <div className="w-full max-w-[688px] gap-[24px] flex flex-col mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full gap-[30px] flex flex-col border-b border-gray-200 last:border-b-0 pb-6">
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
      <div className="hidden xl:flex w-full max-w-[1600px] h-auto min-h-[850px] gap-[120px] xl:p-[60px] 2xl:p-[120px] mx-auto flex-col justify-center items-center bg-white">
        <h2 className="text-[48px] font-bold text-center text-[#1B1743] font-inter lg:leading-[48px] tracking-[-0.03em] w-full max-w-[1360px] h-[58px] mx-auto px-4">
          Frequently asked questions
        </h2>
        
        <div className="w-full max-w-[920px] h-auto min-h-[432px] gap-[40px] flex flex-col mx-auto px-4">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full max-w-[920px] h-auto min-h-[120px] gap-[40px] flex flex-col border-b border-gray-200 last:border-b-0 pb-8">
              <button
                className="w-full flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 px-0"
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
                  openFaq === index ? 'max-h-96' : 'max-h-0'
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
    </>
  )
}

export default FAQSection