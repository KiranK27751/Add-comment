const initialState ={
  posts: []
}
const postReducer = (state, action) => {
  switch(action.type){
    case 'ADD_POST': return (
      posts= [...posts, ]
    )
    default: console.log('default case')
  }
}