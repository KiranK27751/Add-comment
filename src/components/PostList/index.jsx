import React from 'react'
import Button from '../Button'
import style from './postList.module.scss'

const PostList = ({comment, onDelete, onDone}) => {
  return(
    <div className={style.postList}>
      <div className={style.comment}>{comment}</div>
      <Button buttonText="Delete" onClick={onDelete} customClass='red'/>
      <Button buttonText="Done" onClick={onDone} customClass='green'/>
    </div>
  )
}

export default PostList