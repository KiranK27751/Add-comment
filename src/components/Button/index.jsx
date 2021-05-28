import React from 'react'
import style from './buttom.module.scss'

const Button = ({buttonText, onClick}) => {
  return (
    <button onClick={onClick}>{buttonText}</button>
  )
}

export default Button