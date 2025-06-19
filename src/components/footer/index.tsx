import { BsTwitterX } from "react-icons/bs"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6"

const Footer = () => {
  const sitemap = [
    {
      heading: "Company",
      menus: ["About us", "Contact us", "Careers", "Blogs"]
    },
    {
      heading: "Product",
      menus: ["Features", "Pricing", "News", "Help desk", "Support"]
    },
    {
      heading: "Services",
      menus: ["POS System", "Sales Analysis", "SEO for Business", "Taxation"]
    },
    {
      heading: "Legal",
      menus: ["Privacy Policy", "Terms & Conditions", "Return Policy"]
    },
    {
      heading: "Contact us",
      menus: ["support@kedaerp.io", "+123-456-7895-2121"]
    }
  ]
  return (
    <footer className="w-screen flex flex-col items-center justify-between pt-50 md:px-40 bg-[#161C2D]">
      <section className="w-full md:w-4/5 h-auto flex flex-col md:flex-row items-start justify-between gap-[80px] md:gap-[40px]">
        {sitemap.map(item =>
          <div className="w-full flex flex-col items-center md:items-start gap-10">
            <p className="text-[0.937em] text-center md:text-left text-white/65 font-inter-regular">{item.heading}</p>
            <ul className="flex flex-col items-center md:items-start gap-4">
              {item.menus.map(menuList =>
                <li>
                  <a href={`#${menuList.split(" ").join("").toLowerCase()}`} className="text-white text-[1.062em] text-left font-inter-regular">{menuList}</a>
                </li>
              )}
            </ul>
          </div>
        )}
      </section>
      <section className="w-4/5 h-30 mt-24 py-6 border-t-1 border-[#292F41] flex items-end md:items-center justify-between">
        <p className="text-white/65 text-[0.937em] font-inter-regular">© 2025 Copyright, All Right Reserved, Made by <span className="font-inter-bold">PrinceSiachin</span>.</p>
        <div className="flex items-center justify-between gap-4">
          <FaInstagram color="#fff" />
          <BsTwitterX color="#fff" />
          <FaFacebookF color="#fff" />
          <FaLinkedinIn color="#fff" />
        </div>
      </section>
    </footer>
  )
}

export default Footer