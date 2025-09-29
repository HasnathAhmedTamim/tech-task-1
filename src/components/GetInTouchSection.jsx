import arrowRight from '../assets/arrow-right.png'

const GetInTouchSection = () => {
  return (
    <section className="w-full bg-white">
      {/* Small Device Layout - Height: 300px, Padding: 32px 16px, Opacity: 1 */}
      <div className="block md:hidden w-full min-h-[300px] pt-[32px] pr-[16px] pb-[32px] pl-[16px] opacity-100" style={{ transform: 'rotate(0deg)' }}>
        <div className="max-w-[390px] mx-auto">
          <div className="w-full max-w-[358px] h-[236px] p-[16px] gap-[16px] mx-auto rounded-[24px] bg-[#0058FF] flex flex-col justify-center items-center text-center">
            <h2 className="w-full max-w-[326px] h-[32px] text-[24px] font-bold text-white font-inter leading-[32px] tracking-[-0.03em] text-center">
              Get In Touch
            </h2>
            
            <p className="w-full max-w-[326px] h-[100px] text-[14px] font-normal text-white font-inter leading-[20px] tracking-[0%] text-center">
              Contact us now to enquire our plumbing services, whether you have a commercial project that requires support, or a domestic plumbing task that needs the attention of a trusted professional.
            </p>
            
            <button className="inline-flex items-center bg-white hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 w-[260px] h-[40px] px-[20px] py-[10px] rounded-[8px] gap-[8px] text-[14px] font-bold text-[#0058FF] font-inter leading-[20px] tracking-[-0.01em]">
              Book a Professional Plumber
              <img src={arrowRight} alt="Arrow right" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Medium Device Layout - Height: 358px, Gap: 40px, Padding: 40px, Opacity: 1 */}
      <div className="hidden md:flex lg:hidden w-full min-h-[358px] gap-[40px] p-[40px] justify-center items-center opacity-100" style={{ transform: 'rotate(0deg)' }}>
        <div className="max-w-[768px] mx-auto w-full">
          <div className="w-full max-w-[688px] h-[278px] p-[40px] gap-[24px] mx-auto rounded-[24px] bg-[#0058FF] flex flex-col justify-center items-center text-center">
            <h2 className="w-full max-w-[608px] h-[40px] text-[32px] font-bold text-white font-inter leading-[40px] tracking-[-0.03em] text-center">
              Get In Touch
            </h2>
            
            <p className="w-full max-w-[608px] h-[80px] text-[14px] font-normal text-white font-inter leading-[20px] tracking-[0%] text-center">
              Contact us now to enquire our plumbing services, whether you have a commercial project that requires support, or a domestic plumbing task that needs the attention of a trusted professional.
            </p>
            
            <button className="inline-flex items-center bg-white hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 w-[259px] h-[42px] px-[20px] py-[11px] rounded-[8px] gap-[8px] text-[14px] font-bold text-[#0058FF] font-inter leading-[20px] tracking-[-0.01em]">
              Book a Professional Plumber
              <img src={arrowRight} alt="Arrow right" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Laptop Layout - Responsive (1024px-1280px) */}
      <div className="hidden lg:flex xl:hidden w-full min-h-[500px] gap-[60px] py-[60px] px-4 flex-col justify-center items-center opacity-100" style={{ transform: 'rotate(0deg)' }}>
        <div className="max-w-[1024px] mx-auto w-full">
          <div className="w-full max-w-[900px] h-auto min-h-[300px] p-[40px] gap-[24px] rounded-[24px] bg-[#0058FF] flex flex-col justify-center items-center text-center mx-auto">
            <h2 className="w-full max-w-[800px] text-[40px] font-bold text-white font-inter leading-[48px] tracking-[-0.03em] text-center">
              Get In Touch
            </h2>
            
            <p className="w-full max-w-[800px] text-[16px] font-normal text-white font-inter leading-[24px] tracking-[0%] text-center">
              Contact us now to enquire our plumbing services, whether you have a commercial project that requires support, or a domestic plumbing task that needs the attention of a trusted professional.
            </p>
            
            <button className="inline-flex items-center bg-white hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 w-[280px] h-[50px] px-[20px] py-[15px] rounded-[8px] gap-[8px] text-[14px] font-bold text-[#0058FF] font-inter leading-[20px] tracking-[-0.01em]">
              Book a Professional Plumber
              <img src={arrowRight} alt="Arrow right" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Large Device Layout - Height: 644px, Gap: 120px, Padding: 120px, Opacity: 1 (1280px+) */}
      <div className="hidden xl:flex w-full min-h-[644px] gap-[120px] p-[120px] flex-col justify-center items-center opacity-100" style={{ transform: 'rotate(0deg)' }}>
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="w-full max-w-[1360px] h-auto min-h-[404px] p-[40px] gap-[24px] rounded-[24px] bg-[#0058FF] flex flex-col justify-center items-center text-center mx-auto">
            <h2 className="w-full max-w-[1200px] h-[58px] text-[48px] font-bold text-white font-inter leading-[58px] tracking-[-0.03em] text-center">
              Get In Touch
            </h2>
            
            <p className="w-full max-w-[1200px] h-[120px] text-[18px] font-normal text-white font-inter leading-[30px] tracking-[0%] text-center">
              Contact us now to enquire our plumbing services, whether you have a commercial project that requires support, or a domestic plumbing task that needs the attention of a trusted professional.
            </p>
            
            <button className="inline-flex items-center bg-white hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 w-[299px] h-[62px] px-[20px] py-[21px] rounded-[8px] gap-[8px] text-[16px] font-bold text-[#0058FF] font-inter leading-[20px] tracking-[-0.01em]">
              Book a Professional Plumber
              <img src={arrowRight} alt="Arrow right" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouchSection