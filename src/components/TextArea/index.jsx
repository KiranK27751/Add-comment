import React from 'react'
import style from './textarea.module.scss'

const TextArea = ({labelText, placeholder, onChange, value}) => {
  return (
    <>
    <label>{labelText}</label>
    <textarea  className ={style.textarea}placeholder={placeholder} value={value} onChange={onChange}/>
  </>
  )
}

export default TextArea