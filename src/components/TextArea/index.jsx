import React from 'react'
import style from './buttom.module.scss'

const TextArea = ({labelText, placeholder, onChange, value}) => {
  return (
    <>
    <label>{labelText}</label>
    <textarea placeholder={placeholder} value={value} onChange={onChange}/>
  </>
  )
}

export default TextArea