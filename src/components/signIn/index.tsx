import { FcGoogle } from "react-icons/fc"
import Button from "../button"
import { NavLink } from "react-router"

const SignIn = () => {
  return (
    <main className='w-screen min-h-dvh h-screen max-h-auto relative flex flex-col items-center justify-center'>
      <img src="/illustrations/login-rectangle.svg" alt="" className="w-full absolute top-0 left-0 -z-10" />
      <div className="w-5/6 md:w-1/2 flex flex-col items-center justify-center gap-4">
        <div className="w-full flex items-center justify-center gap-5">
          <div className="flex items-center justify-center py-7 px-5 bg-white rounded-xl">
            <img src="/illustrations/erp-logo.svg" alt="ERP LOGO" className='w-20' />
          </div>
          <div>
            <h1 className="text-4xl md:text-[2.875em] text-left text-[#2a2e45] font-inter-bold">Login to KeDA</h1>
            <p className="text-left text-sm md:text-base text-[#656A70] font-inter-regular">Enter your email and password to login</p>
          </div>
        </div>
        <div className="w-full lg:w-4/6 bg-white rounded-[10px] px-[44px] pt-[50px] shadow-(--login-box-shadow)">
          <form className="w-full flex flex-col items-center gap-4">
            <fieldset className="w-full">
              <label htmlFor="email" className="font-inter-regular text-base text-[#656A70]">Email*</label>
              <input required type="text" id="email" name="email" placeholder="name@company.com" className="w-full border-[1.2px] border-[#6582EC] py-3 px-6 rounded-[6px] placeholder:text-[#656A70]" />
            </fieldset>
            <fieldset className="w-full">
              <label htmlFor="password" className="font-inter-regular text-base text-[#656A70]">Password*</label>
              <input required type="text" id="password" name="password" placeholder="Enter password here" className="w-full border-[1.2px] border-[#6582EC] py-3 px-6 rounded-[6px] placeholder:text-[#656A70]" />
            </fieldset>
            <Button title="Login" color="text-[#fff]" family="font-inter-semibold" containerClass="w-full flex items-center justify-center gap-2 border-1 border-[#B2C5DA] rounded-[6px] !py-3 bg-[#7C3AED]" />
          </form>
          <div className="w-full flex items-center justify-between gap-2 my-3">
            <div className="w-4/6 h-[2px] bg-[#dfe3e8]" />
            <p className="font-inter-medium text-sm text-[#343434] text-center">Or</p>
            <div className="w-4/6 h-[2px] bg-[#dfe3e8]" />
          </div>
          <Button leftIcon={<FcGoogle size={20} />} title="Continue with Google" color="text-[#343434]" containerClass="!w-full flex items-center justify-center gap-2 border-1 border-[#B2C5DA] rounded-[6px] !py-3" />
          
          <p className="text-sm text-[#343434] font-inter-medium my-8 flex items-center justify-center gap-2">
            Don't have an account yet?
            <NavLink to="/register" >
              <span className="underlined text-[#803FEE] font-inter-light"><u>Register</u></span>
            </NavLink>
          </p>
        </div>
      </div>
    </main>
  )
}

export default SignIn