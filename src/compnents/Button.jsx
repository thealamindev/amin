import React from 'react'

const Button = ({text,className}) => {
  return (
    <button
      className={`${className} font-popins font-semibold text-2xl py-2.5 px-7 border border-1 border-borderColor rounded-lg drop-shadow-2xl hover:bg-secoundaryColor`}
    >
      {text}
    </button>
  );
}

export default Button