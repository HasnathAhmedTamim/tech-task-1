import arrowRight from '../assets/arrow-right.png'

const GetInTouchSection = () => {
  return (
    <>
      {/* Mobile Layout */}
      <div className="block md:hidden w-full max-w-[390px] h-[300px] pt-[32px] pr-[16px] pb-[32px] pl-[16px] mx-auto bg-white">
        <div className="w-[358px] h-[236px] p-[16px] gap-[16px] mx-auto rounded-[24px] bg-[#0058FF] flex flex-col justify-center items-center text-center">
          <h2 className="w-[326px] h-[32px] text-[24px] font-bold text-white font-inter leading-[32px] tracking-[-0.03em] text-center">
            Get In Touch
          </h2>
          
          <p className="w-[326px] h-[100px] text-[14px] font-normal text-white font-inter leading-[20px] tracking-[0%] text-center">
            Contact us now to enquire our plumbing services, whether you have a commercial project that requires support, or a domestic plumbing task that needs the attention of a trusted professional.
          </p>
          
          <button className="inline-flex items-center bg-white hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 w-[260px] h-[40px] px-[20px] py-[10px] rounded-[8px] gap-[8px] text-[14px] font-bold text-[#0058FF] font-inter leading-[20px] tracking-[-0.01em]">
            Book a Professional Plumber
            <img src={arrowRight} alt="Arrow right" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tablet/Medium Layout - For all medium devices (768px - 1280px) */}
      <div className="hidden md:block xl:hidden w-full max-w-[768px] h-[358px] gap-[40px] p-[40px] mx-auto bg-white">
        <div className="w-[688px] h-[278px] p-[40px] gap-[24px] mx-auto rounded-[24px] bg-[#0058FF] flex flex-col justify-center items-center text-center">
          <h2 className="w-[608px] h-[40px] text-[32px] font-bold text-white font-inter leading-[40px] tracking-[-0.03em] text-center">
            Get In Touch
          </h2>
          
          <p className="w-[608px] h-[60px] text-[14px] font-normal text-white font-inter leading-[20px] tracking-[0%] text-center">
            Contact us now to enquire our plumbing services, whether you have a commercial project that requires support, or a domestic plumbing task that needs the attention of a trusted professional.
          </p>
          
          <button className="inline-flex items-center bg-white hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 w-[299px] h-[50px] px-[24px] py-[10px] rounded-[8px] gap-[8px] text-[16px] font-bold text-[#0058FF] font-inter leading-[30px] tracking-[-0.01em]">
            Book a Professional Plumber
            <img src={arrowRight} alt="Arrow right" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden xl:flex w-full max-w-[1600px] h-[644px] gap-[120px] xl:p-[60px] 2xl:p-[120px] mx-auto flex-col justify-center items-center bg-white">
        <div className="w-full max-w-[1360px] h-[404px] gap-[32px] xl:p-[60px] 2xl:p-[80px] rounded-[24px] bg-[#0058FF] flex flex-col justify-center items-center text-center">
          <h2 className="w-full max-w-[1200px] h-[58px] text-[48px] font-bold text-white font-inter leading-[100%] tracking-[-0.03em] text-center px-4">
            Get In Touch
          </h2>
          
          <p className="w-full max-w-[1000px] h-auto min-h-[60px] text-[18px] font-normal text-white font-inter leading-[30px] tracking-[0%] text-center px-4">
            Contact us now to enquire our plumbing services, whether you have a commercial project that requires support, or a domestic plumbing task that needs the attention of a trusted professional.
          </p>
          
          <button className="inline-flex items-center bg-white hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 w-auto max-w-[299px] min-w-[280px] h-[62px] px-[24px] py-[10px] rounded-[8px] gap-[8px] text-[16px] font-bold text-[#0058FF] font-inter leading-[30px] tracking-[-0.01em]">
            Book a Professional Plumber
            <img src={arrowRight} alt="Arrow right" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  )
}

export default GetInTouchSection