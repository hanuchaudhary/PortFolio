import React from 'react'

const Button = ({title}) => {
  return (
    <div><button className="bg-green-500 font-mono rounded-md font-semibold px-4 py-1 text-green-950">
    {title}
  </button></div>
  )
}

export default Button