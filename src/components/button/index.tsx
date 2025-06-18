import React, { forwardRef } from "react"

interface BtnProps {
  id?: string | undefined;
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClass?: string;
}

const Button = forwardRef<HTMLButtonElement, BtnProps>(({ id, title, leftIcon, rightIcon, containerClass }, ref) => {
  return (
    <button ref={ref} id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-2xl px-7 py-5 text-black ${containerClass}`}>
      {leftIcon}
      <span className="relative overflow-hidden uppercase incline-flex font-inter-semibold text-base text-[#fff]">
        <p>{title}</p>
      </span>
      {rightIcon}
    </button>
  )
})

export default Button