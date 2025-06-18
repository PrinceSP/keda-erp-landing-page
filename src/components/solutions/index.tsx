import { PiPencilSimpleLineLight } from "react-icons/pi"
import Button from "../button"

const Solutions = () => {
  return (
    <div className="w-screen min-h-dvh relative flex flex-col items-start gap-10 px-20">
      <div>
        <h1 className="font-inter-bold text-[1.75em] md:text-[2.875em] text-[#2A2E45]">ERP Solutions Installation Options:</h1>
        <h1 className="font-inter-bold text-[1.75em] md:text-[2.875em] text-[#2A2E45]">Online Cloud or Thin Offline</h1>
      </div>
      <article className="w-full flex flex-col-reverse gap-10 md:flex-row items-start justify-between">
        <section className="w-full md:w-2/5 flex flex-col gap-10">
          <p className="text-[#585F81] font-inter-regular text-[0.875em] md:text-[1.25em]">In today's evolving business landscape, choosing the right ERP software for Multi-Field Company is crucial. Our system offers flexible installation options to align with your business needs, whether it's our Online Cloud or Thin Offline setup.</p>
          <p className="text-[#585F81] font-inter-regular text-[0.875em] md:text-[1.25em]">What sets us apart is that we provide the same intuitive interface and robust functionality across both deployment models, guaranteeing a seamless and consistent user experience regardless of your choice.</p>
          <Button leftIcon={<PiPencilSimpleLineLight size={24} color="#FFF"/>} title="Book Demo - It's free" containerClass="flex items-center justify-between gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"/>
        </section>
        <section className="w-full relative md:w-2/5">
          <div className="w-[456px] h-[119px] rotate-90 absolute top-53 -left-58 -z-2 bg-[#eff1f3] rounded-[12px]" />
          <div className="w-[391px] h-[119px] rotate-90 absolute bottom-40 -right-45 -z-2 bg-[#eff1f3] rounded-[12px]" />
          <img src="/erpsolution.webp" alt="A man playing with his laptop" />
        </section>
      </article>
      <img src="illustrations/solution-rectangle.svg" alt="" className="absolute -top-150 left-0 -z-10" />
    </div>
  )
}

export default Solutions