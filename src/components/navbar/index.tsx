import { useEffect, useRef, useState } from "react"
import gsap from "gsap";
import { IoIosCloseCircleOutline } from "react-icons/io"
import { MdArrowOutward } from "react-icons/md"
import { RxHamburgerMenu } from "react-icons/rx"
import { useWindowScroll } from "react-use";
import { NavLink, useNavigate } from "react-router";

const Navbar = ({openModal}) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const navContainerRef = useRef<HTMLDivElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const closeBtn = useRef<HTMLButtonElement | null>(null)
  const [lastScrollY, setLastScrollY] = useState<number>(0)
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false)
  const { y: currentScrollY } = useWindowScroll()
  const navigate = useNavigate()

  const navItems = ['About', 'Pricing', 'Services']

  const onShowMenu = () => {
    menuRef?.current?.classList.add("md:scale-x-0")
    menuRef?.current?.classList.remove("scale-x-0")
    menuRef?.current?.classList.remove("sm:inset-x-6")
    document.body.classList.add("no-scroll")
  }

  const onCloseMenu = () => {
    menuRef?.current?.classList.remove("md:scale-x-0")
    menuRef?.current?.classList.add("scale-x-0")
    menuRef?.current?.classList.add("sm:inset-x-6")
    document.body.classList.remove("no-scroll")
  }

  const onMouseEnter = () => {
    gsap.to(closeBtn.current, { rotation: 180, duration: 0.5, ease: 'power1.inOut' })
  }
  const onMouseLeave = () => {
    gsap.to(closeBtn.current, { rotation: 0, duration: 0.5, ease: 'power2.inOut' })
  }

  const openContactModal = ()=>{
    setIsOpenModal(true)
    openModal(isOpenModal)
  }

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true)
      navContainerRef?.current?.classList.remove('floating-nav')
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false)
      navContainerRef?.current?.classList.add('floating-nav')
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true)
      navContainerRef?.current?.classList.add('floating-nav')
    }
    setLastScrollY(currentScrollY)
  }, [currentScrollY, lastScrollY])

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2
    })
  }, [isNavVisible])

  return (
    <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-100 h-16 border-none transition-all duration-700 sm:inset-x-6">
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <a href="/" className="flex flex-col text-base leading-4 font-helve-light">
            <img src="/illustrations/erp-logo.svg" />
          </a>

          <div ref={menuRef} className="absolute left-0 top-0 h-screen w-full bg-blue-300 origin-right duration-200 ease-in-out scale-x-0">
            <button ref={closeBtn} className="close absolute left-5 top-5 cursor-pointer border-none" onClick={onCloseMenu} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onMouseUp={onMouseLeave}>
              <IoIosCloseCircleOutline size="5em" />
            </button>
            <div className="flex flex-col h-full items-center justify-center">
              {
                navItems.map((item, index) =>
                  <a key={index} className="nav-hover-btn line-animated !text-4xl my-4" href={`#${item.toLowerCase()}`}>{item}</a>
                )
              }
            </div>
          </div>

          <div className="hidden md:flex md:flex-row md:items-center md:justify-between md:gap-9">
            {
              navItems.map((item, index) =>
                <NavLink to={`#${item.toLowerCase()}`} onClick={(e) => {
                  e.preventDefault();
                  const sectionId = item.toLowerCase();
                  const section = document.getElementById(sectionId);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  } else {
                    navigate(`/#${sectionId}`);
                  }
                }}>
                  <a key={index} className="nav-hover-btn line-animated">{item}</a>
                </NavLink>
              )
            }

            <div className="flex flex-row gap-9">
              <button onClick={openContactModal} type="button" className="flex items-center btn-outlined font-inter-regular">
                <p className="text-[0.875em] mr-2">Contact us</p>
                <MdArrowOutward color="#FFD700" size="0.875em" />
              </button>

              <button type="button" className="flex items-center btn-outlined bg-[#EDE9FE] !border-none font-inter-bold">
                <p className="text-[0.875em] text-[#803FEE]">Log in</p>
              </button>
            </div>
          </div>

          <button className="block md:hidden" onClick={onShowMenu}>
            <RxHamburgerMenu size="2em" />
          </button>
        </nav>
      </header>
    </div >
  )
}

export default Navbar