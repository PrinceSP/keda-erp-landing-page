import { forwardRef } from "react"
import type { BtnProps } from "../../types"

const Button = forwardRef<HTMLButtonElement, BtnProps>(({ onClick, id, title, leftIcon, rightIcon, containerClass="", color = "text-white", radius = "rounded-2xl", padding = "px-7 py-5", size, family }, ref) => {
  return (
    <button ref={ref} id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden ${padding} ${radius} ${containerClass}`} onClick={onClick} type="button">
      {leftIcon}
      <span className={`relative overflow-hidden incline-flex text-base ${color}`}>
        <p className={`${size} ${family}`}>{title}</p>
      </span>
      {rightIcon}
    </button>
  )
})

export default Button