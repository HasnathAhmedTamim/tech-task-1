import { useState } from 'react'
import './App.css'

function App() {
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
    <div className="min-h-screen bg-gray-50">
      {/* FAQ Section */}
      <div className="w-full py-[120px] px-4 md:px-[120px] bg-white">
        <div className="max-w-[1360px] mx-auto">
          <h2 className="text-[48px] font-bold text-center text-custom-dark mb-[120px] font-inter" style={{fontFamily: 'Inter', fontWeight: 700, fontSize: '48px', color: '#1B1743'}}>
            Frequently asked questions
          </h2>
          
          <div className="space-y-0 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  className="w-full py-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 px-0"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <h3 className="text-[28px] font-semibold text-custom-dark pr-4 font-inter" style={{fontFamily: 'Inter', fontWeight: 600, fontSize: '28px', lineHeight: '40px', letterSpacing: '-3%', color: '#1B1743'}}>
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
                  <p className="text-[18px] font-normal text-custom-gray font-inter" style={{fontFamily: 'Inter', fontWeight: 400, fontSize: '18px', lineHeight: '30px', letterSpacing: '0%', color: '#2A2F32'}}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="w-full flex items-center justify-center p-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Get In Touch
              </h2>
              
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
                Contact us now to enquire our plumbing services, whether you have a commercial project that requires support, or a domestic plumbing task that needs the attention of a trusted professional.
              </p>
              
              <button className="inline-flex items-center gap-3 bg-white text-blue-600 font-semibold text-lg md:text-xl px-8 py-4 md:px-10 md:py-5 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                Book a Professional Plumber
                <svg 
                  className="w-5 h-5 md:w-6 md:h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
