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
          <h2 className="text-white font-inter font-bold
                         text-[24px] leading-[28px]
                         md:text-[36px] md:leading-[42px]
                         lg:text-[48px] lg:leading-[56px]"
              style={{letterSpacing: '-2%'}}>
            Get In Touch
          </h2>
          
          <p className="text-white/90 font-inter font-light text-center
                        text-[14px] leading-[20px]
                        md:text-[16px] md:leading-[24px]
                        lg:text-[18px] lg:leading-[28px] lg:max-w-3xl">
            Contact us now to enquire our plumbing services, whether you have a commercial project that requires support, or a domestic plumbing task that needs the attention of a trusted professional.
          </p>
          
          <button className="inline-flex items-center bg-white text-blue-600 font-semibold rounded-[12px] hover:bg-blue-50 transition-all duration-300 font-inter
                           text-[14px] px-4 py-2 gap-2
                           md:text-[16px] md:px-6 md:py-3 md:gap-3 md:rounded-[14px]
                           lg:text-[18px] lg:px-8 lg:py-4 lg:gap-3 lg:rounded-[16px] lg:hover:shadow-lg lg:hover:scale-105 lg:active:scale-95">
            Book a Professional Plumber
            <img 
              src={arrowRight} 
              alt="Arrow right" 
              className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" 
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default GetInTouchSection