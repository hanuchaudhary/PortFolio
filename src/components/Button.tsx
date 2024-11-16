import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  ...props
}) => {
const baseStyles = "rounded-full text-[#FFFCE0] bg-transparent border-2 border-[#FFFCE0] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black duration-300"
  
  const variants = {
    default: "bg-black text-stone-50 hover:bg-[#FFFCE0] hover:text-[#0E100F]",
    outline: "border border-black text-black hover:bg-black hover:text-stone-50",
    ghost: "text-black hover:bg-gray-100"
  }
  
  const sizes = {
    sm: "py-1 px-2 text-sm",
    md: "py-1 px-3 text-base",
    lg: "py-3 px-6 text-lg"
  }

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim()

  return (
    <button
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button