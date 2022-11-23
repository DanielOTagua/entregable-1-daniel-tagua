import React from 'react'

const ButtonQuote = ({objStyleBtn, handleClick}) => {
  return (
    <button  className="card__btn" onClick={handleClick} style={objStyleBtn}>
    &gt;
  </button>
  )
}

export default ButtonQuote