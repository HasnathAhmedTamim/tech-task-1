const GetInTouchSection = () => {
  return (
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
  )
}

export default GetInTouchSection