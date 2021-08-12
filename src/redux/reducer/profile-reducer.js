const ADD_POST = 'ADD_POST'
const SET_PROFILE_PAGE = 'SET_PROFILE_PAGE'

const initialState = {
  posts: [{id: 1, message: 'Some message', likeCount: 12}],
  profile: null
}

export const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: action.message,
        likeCount: 0
      }
      return {...state, posts: [...state.posts, newPost]}
    case SET_PROFILE_PAGE:
      return {...state, profile: action.profile}
    default:
      return state
  }
}

export const addPostActionCreator = (message) => ({type: ADD_POST, message})
export const setProfileAC = (profile) => ({type: SET_PROFILE_PAGE, profile})