import React from 'react'

const Button = ({className,btnText}) => {
  return (
    <div className={`py-5 px-15 bg-teal-400 ${className}`}>{btnText}</div>
  )
}

export default Button