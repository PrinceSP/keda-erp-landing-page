import { servicesDatas } from "../../constants"

const Services = () => {
  return (
    <div className='w-screen min-h-dvh bg-[#F4F8FF] py-20 px-18'>
      <h1 className='text-[#2A2E45] text-[2.875em] font-inter-extrabold w-3/4 mb-2.5'>Features that Automate Your Operations During High-Tides!</h1>
      <p className='text-[#757C9D] text-xl font-inter-regular'>Get The Best Advise and Reach Heights in Your Business</p>
      <section className='flex flex-wrap items-center justify-between gap-6 mt-[50px]'>
        {servicesDatas.map(item =>
          <div key={item.title} className='w-[411px] h-[399px] bg-white rounded-[12px] flex flex-col items-center justify-between gap-3 py-9 px-6'>
            <img src={item.icon} alt={item.icon} className='p-0 m-0'/>
            <div className='flex flex-col items-center justify-between gap-6'>
              <h1 className='text-[#2A2E45] text-xl text-center font-inter-bold'>{item.title}</h1>
              <p className='text-[#585F81] text-base text-center font-inter-regular text-wrap'>{item.desc}</p>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default Services