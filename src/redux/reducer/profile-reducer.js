const ADD_POST = 'ADD_POST'

const initialState = {
  posts: [{id: 1, message: 'Some message', likeCount: 12}]
}

export const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: action.message,
        likeCount: 0
      }
      state.posts.push(newPost)
      return state
    default:
      return state
  }
}

export const addPostActionCreator = (message) => ({type: ADD_POST, message})