const Integration = () => {
  return (
    <div className='w-screen flex items-center justify-center py-20 px-10 md:px-28'>
      <div className='w-full md:w-5/6 flex flex-col md:flex-row items-center justify-between'>
        <div className="w-full md:w-[45%]">
          <h1 className="text-wrap text-[#111827] text-4xl md:text-5xl font-inter-bold">Easy integrations with 170+ tools</h1>
          <p className="text-wrap text-[#111827] text-base md:text-lg font-inter-regular">Easy to connect with your favorite tools that you use daily and keep things on track.</p>
        </div>
        <div className="relative pt-10 w-full md:w-2/4 overflow-hidden min-h-[130px] md:min-h-[170px] lg:min-h-[280px]">
          <div className="absolute top-0 left-0 w-full h-[130px] md:h-[170px] lg:h-[280px] bg-[#EDE9FE] rounded-b-full z-0" />
          <img src="illustrations/integration.svg" alt="Integration tools CRM" className="relative z-10 mx-auto" />
        </div>
      </div>
    </div>
  )
}

export default Integration