import React, {useState} from 'react'
import TextArea from '../TextArea'
import Button from '../Button'
import style from './postcard.module.scss'
import PostList from '../PostList'

const PostCard = () => {
const [text, setText]= useState("")
const [comment, setComent]= useState([])

const onChange=(e) => {
  setText(e.target.value)
}

const postComment=()=>{
  if(text!== ""){
    setComent([...comment, {comment: text}])
    setText("")
    console.log(comment)
  }
  else{
    alert("Enter the text to POST")
  }
}

  return(
    <div className={style.postCard}>
      <TextArea value={text} placeholder="Enter the comment" labelText="Comment:" onChange={onChange}/>
      <Button buttonText="Post" onClick={postComment}/>

      <div className={style.postList}>
        {comment.map(item=>{
          return(
            <div className={style.card}>
              <PostList comment={item.comment}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PostCard;