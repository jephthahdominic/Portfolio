import React from 'react'

const Button = ({background, border, color, classes, children}) => {
  return (
    <button className={`px-4 py-2 flex gap-2 justify-center ${background ? background : ""} ${color ? color : "text-white-400"} shadow-md ${border ? border : ""} rounded-md text-md ${classes ? classes : ''}`}>
        {children}
    </button>
  )
}

export default Button