import React from 'react'

const Button = ({variant, label, width}) => {
  return (
    <div>
        <button className={`btn btn-${variant} ${width}`}>{label}</button>
    </div>
  )
}

export default Button