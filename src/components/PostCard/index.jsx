import React, {useState} from 'react'
import TextArea from '../TextArea'
import Button from '../Button'
import style from './postcard.module.scss'
import PostList from '../PostList'
import uuid from 'react-uuid'

const PostCard = () => {
const [text, setText]= useState("")
const [comment, setComent]= useState([])

const onChange=(e) => {
  setText(e.target.value)
}

const postComment=()=>{
  if(text!== ""){
    setComent([...comment, {id: uuid(), comment: text}])
    setText("")
    console.log(comment)
  }
  else{
    alert("Enter the text to POST")
  }
}

const onDelete = (id)=>{
  const remainingArray = comment.filter(item => item.id!==id)
  setComent(remainingArray)
}
const onDone = ()=>{

}

  return(
    <div className={style.postCard}>
      <TextArea value={text} placeholder="Enter the comment" labelText="Comment:" onChange={onChange}/>
      <div className={style.postButton}><Button buttonText="Post" onClick={postComment}/></div>

      <div className={style.postList}>
        {comment.map((item,index)=>{
          return(
            <div key={index} className={style.card}>
              <PostList comment={item.comment} onDone={onDone} onDelete={()=>onDelete(item.id)}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PostCard;