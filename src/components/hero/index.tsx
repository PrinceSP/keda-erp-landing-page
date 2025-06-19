import { useEffect, useRef } from "react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { FaArrowDown } from "react-icons/fa6"
import Button from "../button"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const heroContainerRef = useRef<null>(null)
  const headlineRef1 = useRef<null>(null)
  const headlineRef2 = useRef<null>(null)

  const properties = {
    opacity: 1,
    transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
    ease: "power1.inOut",
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroContainerRef.current,
          start: '100 bottom',
          end: 'center bottom',
          toggleActions: 'play none none reverse',
        }
      })
      timeline.to(".animated-hero-heading", properties, "start")
        .to(".animated-hero-image", {
          opacity: 1,
          transform: "translate(0,0)",
          ease: "power1.inOut",
        }, "start")
        .to(".animated-hero-desc", properties, "start")
        .to(".animated-hero-box", properties, "start")
    }, heroContainerRef)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={heroContainerRef} className="relative flex flex-col md:flex-row max-h-auto min-h-dvh w-screen mb-60 md:mb-60">
      <section className="w-full relative">
        <img src="/illustrations/hero-bg.svg" className="absolute top-0 left-0" />
        <img src="/illustrations/diagonal-block.svg" className="absolute top-112 left-0 animated-hero-box" />
        <img src="/illustrations/hero-image.svg" alt="Hero Image" className="md:absolute right-1/12 top-5/6 lg:right-45 lg:top-50 object-cover animated-hero-image" />
      </section>

      <section className="absolute left-0 top-0 z-40">
        <div className="mt-70 px-5 sm:px-10 z-50">
          <h1 ref={headlineRef1} className="hero-heading animated-hero-heading">
            The easiest way to
          </h1>
          <h1 ref={headlineRef2} className="hero-heading animated-hero-heading">
            manage projects
          </h1>

          <p className="max-w-2xl font-inter-regular text-[#374151] text-[0.875em] mt-10 mb-19 md:text-[1.125em] animated-hero-desc">
            From the small stuff to the big picture, organizes the work so teams know
            what to do, why it matters, and how to get it done.
          </p>

          <Button id="discover" title="Get Started" rightIcon={<FaArrowDown color="#fff"/>} containerClass="flex items-center gap-3 !py-3 rounded-[10px] bg-[#7C3AED]" />
        </div>
      </section>
    </main>
  )
}

export default Hero