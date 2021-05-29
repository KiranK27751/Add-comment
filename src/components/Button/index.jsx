import React from 'react'
import style from './button.module.scss'

const Button = ({buttonText, onClick, customClass}) => {
  return (
    <button style={{backgroundColor: customClass? customClass: "#0080ff"}} className={ style.button} onClick={onClick}>{buttonText}</button>
  )
}

export default Button