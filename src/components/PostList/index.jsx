import React from 'react'
import Button from '../Button'
import style from './postList.module.scss'

const PostList = ({comment, onDelete}) => {
  return(
    <div className={style.postList}>
      <div>{comment}</div>
      <Button buttonText="Delete" onClick={onDelete}/>
    </div>
  )
}

export default PostList