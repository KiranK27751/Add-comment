import React from 'react'
import style from './button.module.scss'

const Button = ({buttonText, onClick}) => {
  return (
    <button className={style.button} onClick={onClick}>{buttonText}</button>
  )
}

export default Button