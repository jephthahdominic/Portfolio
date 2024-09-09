import React from 'react'

const URL = ({background, border, color, classes, url, children}) => {
    return (
      <a className={`px-4 py-2 flex gap-2 justify-center ${background ? background : ""} ${color ? color : "text-white-400"} shadow-md ${border ? border : ""} rounded-md text-white-400 font-openSans text-md transition-all ${classes ? classes : ''} cursor-pointer`}
      href={url}>
          {children}
      </a>
    )
  }

export default URL