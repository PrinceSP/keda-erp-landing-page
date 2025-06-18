import React from 'react'

const services = [
  {
    title: "Online and Offline Sync",
    desc: "Offline orders sync automatically when switching to the online mode of the KeDa ERP system.",
    icon: "illustrations/services/convert-3d-cube.svg",
    color: "#EF30C5"
  },
  {
    title: "Supplier Management",
    desc: "Reduce 60% of time by tracking, collaborating, qualifying, transacting, and monitoring suppliers.",
    icon: "illustrations/services/3d-rotate.svg",
    color: "#2757D2"
  },
  {
    title: "Multi Location",
    desc: "Manage and track multiple stores across locations with one software, enabling easy expansion",
    icon: "illustrations/services/location-add.svg",
    color: "#F2742D"
  },
  {
    title: "Multi Users ",
    desc: "The unlimited license authorizes the use of the KeDa concurrently by all users within an organization and has no limit on end-user installations.",
    icon: "illustrations/services/profile-2user.svg",
    color: "#16BE6A"
  },
  {
    title: "Integration",
    desc: "KeDa offers a wide range of integration capabilities that allow businesses to seamlessly connect with third-party applications and services.",
    icon: "illustrations/services/format-circle.svg",
    color: "#EF30C5"
  },
  {
    title: "Order Management System",
    desc: "Enhance order processing with real-time tracking and centralized sales data, ensuring accuracy and efficiency.",
    icon: "illustrations/services/box.svg",
    color: "#CCB910"
  },
  {
    title: "Warehouse Management System",
    desc: "Optimize inventory tracking and warehouse operations to maintain stock levels and reduce overhead costs.",
    icon: "illustrations/services/house.svg",
    color: "#CCB910"
  },
  {
    title: "Integrated Accounting Operations",
    desc: "Simplify finances with automated transactions and real-time insights, making financial management hassle-free.",
    icon: "illustrations/services/driver-refresh.svg",
    color: "#2757D2"
  },
  {
    title: "HR & Payroll Management",
    desc: "Efficiently manage employee data and payroll with integrated tools, ensuring compliance and accuracy.",
    icon: "illustrations/services/user-edit.svg",
    color: "#F2742D"
  },
]

const Services = () => {
  return (
    <div className='w-screen min-h-dvh bg-[#F4F8FF] py-20 px-18'>
      <h1 className='text-[#2A2E45] text-[2.875em] font-inter-extrabold w-3/4 mb-2.5'>Features that Automate Your Operations During High-Tides!</h1>
      <p className='text-[#757C9D] text-xl font-inter-regular'>Get The Best Advise and Reach Heights in Your Business</p>
      <section className='flex flex-wrap items-center justify-between gap-6 mt-[50px]'>
        {services.map(item =>
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