import React from 'react'

const Button = ({children}) => {

  const buttonStyles = {
    border: '0',
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 20px',
    cursor: 'pointer'
  }

  return (
    <button style={buttonStyles}>
      {children}
    </button>
  )
}

export default Button