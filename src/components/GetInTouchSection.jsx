import arrowRight from '../assets/arrow-right.png'

const GetInTouchSection = () => {
  return (
    <div className="w-full px-4 py-8 md:py-12">
      <div className="w-full max-w-[1360px] mx-auto">
        <div 
          className="rounded-[24px] text-center mx-auto flex flex-col justify-center items-center
                     w-[358px] h-[236px] p-4 gap-4
                     md:w-[688px] md:h-[278px] md:p-10 md:gap-6
                     lg:w-full lg:max-w-[1360px] lg:h-[404px] lg:p-20 lg:gap-8"
          style={{
            backgroundColor: '#0058FF',
            opacity: 1
          }}
        >
          <h2 className="text-white font-inter font-bold text-center"
              style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '-3%',
                textAlign: 'center'
              }}>
            <span className="block md:hidden" style={{fontSize: '24px', lineHeight: '32px'}}>
              Get In Touch
            </span>
            <span className="hidden md:block lg:hidden" style={{fontSize: '32px', lineHeight: '40px'}}>
              Get In Touch
            </span>
            <span className="hidden lg:block" style={{fontSize: '48px', lineHeight: '100%'}}>
              Get In Touch
            </span>
          </h2>
          
          <p className="text-white font-inter font-normal text-center"
             style={{
               fontFamily: 'Inter',
               fontWeight: 400,
               color: '#FFFFFF',
               letterSpacing: '0%',
               textAlign: 'center'
             }}>
            <span className="block md:hidden" style={{fontSize: '14px', lineHeight: '20px'}}>
              Contact us now to enquire our plumbing services, whether you have a commercial project that requires support, or a domestic plumbing task that needs the attention of a trusted professional.
            </span>
            <span className="hidden md:block lg:hidden" style={{fontSize: '14px', lineHeight: '20px'}}>
              Contact us now to enquire our plumbing services, whether you have a commercial project that requires support, or a domestic plumbing task that needs the attention of a trusted professional.
            </span>
            <span className="hidden lg:block lg:max-w-3xl" style={{fontSize: '18px', lineHeight: '30px'}}>
              Contact us now to enquire our plumbing services, whether you have a commercial project that requires support, or a domestic plumbing task that needs the attention of a trusted professional.
            </span>
          </p>
          
          <button 
            className="inline-flex items-center bg-white hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95
                       w-[260px] h-[40px] px-[20px] py-[10px]
                       md:w-[299px] md:h-[50px] md:px-[24px] md:py-[10px]"
            style={{
              borderRadius: '8px',
              opacity: 1,
              gap: '8px',
              fontFamily: 'Inter',
              fontWeight: 700,
              letterSpacing: '-1%',
              color: '#0058FF'
            }}>
            <span className="block md:hidden" style={{fontSize: '14px', lineHeight: '20px'}}>
              Book a Professional Plumber
            </span>
            <span className="hidden md:block" style={{fontSize: '16px', lineHeight: '30px'}}>
              Book a Professional Plumber
            </span>
            <img 
              src={arrowRight} 
              alt="Arrow right" 
              className="w-4 h-4"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default GetInTouchSection