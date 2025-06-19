import { NavLink } from 'react-router'
import Button from '../button'
import { FcGoogle } from 'react-icons/fc'

const Register = () => {
  return (
    <main className='w-screen min-h-dvh h-screen max-h-auto flex'>
      <section className='w-full lg:w-3/5 h-full flex flex-col items-center justify-center gap-4 px-8 md:px-28'>
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <div className="w-full flex items-center justify-center gap-3">
            <h1 className='font-inter-medium text-3xl md:text-4xl'>Welcome to</h1>
            <img src="/illustrations/erp-logo.svg" alt="ERP LOGO" className='w-22 md:w-28' />
            <h1 className='font-inter-medium text-3xl md:text-4xl'>KeDA</h1>
            <h1 className='font-inter-light text-3xl md:text-4xl'>ERP</h1>
          </div>
          <p className="text-[#565656] font-inter-regular text-sm md:text-lg">Get Started - it's free. No Credit card needed.</p>
        </div>
        <Button leftIcon={<FcGoogle size={20} />} title="Continue with Google" color="text-[#343434]" containerClass="!w-4/5 md:!w-4/6 flex items-center justify-center gap-2 border-1 border-[#B2C5DA] rounded-[6px] !py-3 mt-15" />
        <div className="w-4/5 md:w-4/6 flex items-center justify-between gap-2">
          <div className="w-4/5 md:w-4/6 h-[2px] bg-[#dfe3e8]" />
          <p className="font-inter-medium text-sm text-[#343434] text-center">Or</p>
          <div className="w-4/5 md:w-4/6 h-[2px] bg-[#dfe3e8]" />
        </div>
        <form className="w-4/5 md:w-4/6 flex flex-col items-center gap-6">
          <fieldset className="w-full">
            <input type="text" id="email" name="email" placeholder="name@company.com" className="w-full border-[1.2px] border-[#6582EC] py-3 px-6 md:px-8 rounded-[6px] placeholder:text-[#656A70]" />
          </fieldset>
          <Button title="Continue" color="text-[#fff]" family="font-inter-bold" containerClass="w-full flex items-center justify-center gap-2 border-1 border-[#B2C5DA] rounded-[6px] !py-3 bg-[#7C3AED]" />
        </form>
        <div>
          <p className="text-[#454545] text-sm text-center font-inter-medium">By proceeding, you agree to the</p>
          <p className="text-[#454545] text-sm text-center font-inter-medium flex items-center justify-center gap-2">
            <span className="underlined text-[#803FEE] font-inter-light"><u>Terms of Service</u></span>
            <span>and</span>
            <span className="underlined text-[#803FEE] font-inter-light"><u>Privacy Policy</u></span>
          </p>
        </div>
        <p className="text-sm md:text-base text-[#343434] font-inter-medium mt-20 flex items-center justify-center gap-2">
          Already have a KeDA ERP Account?
          <NavLink to="/sign-in" >
            <span className="underlined text-[#803FEE] font-inter-light"><u>Log in</u></span>
          </NavLink>
        </p>
      </section>
      <section className='hidden md:block md:flex-1'>
        <img src="../signUpImage.webp" alt="" className="w-full h-full object-cover" />
      </section>
    </main>
  )
}

export default Register