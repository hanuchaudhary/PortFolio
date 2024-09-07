import React from 'react'

const Button = ({title}) => {
  return (
    <div><button className="bg-yellow-500 hover:bg-yellow-400 transition-colors duration-300  font-mono rounded-md font-semibold px-4 py-1 text-yellow-950">
    {title}
  </button></div>
  )
}

export default Button