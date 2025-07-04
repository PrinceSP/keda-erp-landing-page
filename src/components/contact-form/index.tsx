import { useState } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { MdArrowOutward, MdEmail, MdPhoneInTalk } from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io'
import Button from '../button'

interface ContactFormProps {
  onSubmit?: (e: React.FormEvent) => void
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const methods = [
    {
      title: "telegram",
      placeholder: "type your @username",
      icon: (isActive: boolean) => <FaTelegramPlane color={isActive ? "#FFFFFF" : "#343434"} />
    },
    {
      title: "viber",
      placeholder: "type your phone number",
      icon: (isActive: boolean) => <MdPhoneInTalk color={isActive ? "#FFFFFF" : "#343434"} />
    },
    {
      title: "whatsapp",
      placeholder: "type your phone number",
      icon: (isActive: boolean) => <IoLogoWhatsapp color={isActive ? "#FFFFFF" : "#343434"} />
    },
    {
      title: "e-mail",
      placeholder: "type your e-mail",
      icon: (isActive: boolean) => <MdEmail color={isActive ? "#FFFFFF" : "#343434"} />
    }
  ]

  const [activeMethod, setActiveMethod] = useState<string>(methods[0].title)

  return (
    <form onSubmit={onSubmit} data-testid="contact-form">
      <h1 className='text-[#232323] text-left text-[3.75em] font-helve tracking-[-4px]'>how to reach</h1>
      <p className='text-[#232323] text-left text-lg font-helve-roman tracking-[-0.7px]'>please fill out the form and we will contact you</p>
      <label htmlFor="name" className="block text-base font-helve-roman text-[#232323] tracking-[-0.7px] mt-7">type your name:</label>
      <input placeholder="what is your name?" type="text" name='name' id='name' className='bg-[#f1f1f1] rounded-[15px] w-full h-14 p-[25px] placeholder:text-[#BBA4A4] placeholder:font-helve tracking-[-0.7px]' />
      <label htmlFor="method" className="block text-base font-helve-roman text-[#232323] tracking-[-0.7px] mt-6">choose a contact method:</label>
      <div className='flex items-center justify-between gap-3'>
        {methods.map((item) => {
          const isActive = activeMethod === item.title
          return (
            <Button
              key={item.title}
              size="text-[0.75em] tracking-[-0.3px]"
              family="font-helve-roman"
              leftIcon={item.icon(isActive)}
              title={item.title}
              onClick={() => setActiveMethod(item.title)}
              containerClass={`w-full flex items-center justify-center gap-2 !px-0 !py-[8px] ${isActive ? "bg-[#7C3AED]" : "bg-[#F3F3F3]"}`}
              color={isActive ? "text-[#FCFCFD]" : "text-[#2A2E45]"}
              radius="rounded-full"
            />
          )
        })}
      </div>
      <input
        placeholder="your contact info"
        type="text"
        name='contact'
        id='contact'
        className='bg-[#f1f1f1] rounded-[15px] w-full h-14 p-[25px] placeholder:text-[#BBA4A4] placeholder:font-helve tracking-[-0.7px] mt-6'
      />
      <Button size="text-xl" family="font-helve-roman tracking-[-0.5px]" title="discuss for info" rightIcon={<MdArrowOutward color="#FFF" size="1.375em" />} containerClass="w-full flex items-center justify-center gap-2 !py-4 bg-[#7C3AED] rounded-full mt-6" />
    </form>
  )
}

export default ContactForm
