import React from 'react'
import style from './postList.module.scss'

const PostList = ({comment}) => {
  return(
    <div className={style.postList}>
      {comment}
    </div>
  )
}

export default PostList