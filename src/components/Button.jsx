import React from 'react'

const Button = ({className,btnText}) => {
  return (
    <div className={`py-5 px-15 ${className}`}>{btnText}</div>
  )
}

export default Button