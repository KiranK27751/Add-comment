import React from 'react'
import Button from '../Button'
import style from './postList.module.scss'

const PostList = ({comment, onDelete, onDone}) => {
  return(
    <div className={style.postList}>
      <div className={style.comment}><p>{comment}</p></div>
      <div className={style.buttons}><Button buttonText="Delete" onClick={onDelete} customClass='red'/>
      <Button buttonText="Done" onClick={onDone} customClass='green'/></div>
    </div>
  )
}

export default PostList