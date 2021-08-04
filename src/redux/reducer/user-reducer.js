const SUBSCRIBE = 'SUBSCRIBE'
const UNSUBSCRIBE = 'UNSUBSCRIBE'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_PAGE_COUNT = 'SET_TOTAL_PAGE_COUNT'

const initialState = {
  users: [],
  totalPageCount: 1
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBSCRIBE:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user
        })
      }
    case UNSUBSCRIBE:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user
        })
      }
    case SET_USERS:
      return {...state, users: action.users.items}
    case SET_TOTAL_PAGE_COUNT:
      return {...state, totalPageCount: action.totalCount}
    default:
      return state
  }
}

export const subscribeUserAC = (userId) => ({type: SUBSCRIBE, userId})
export const unsubscribeUserAC = (userId) => ({type: UNSUBSCRIBE, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setTotalPageCountAC = (totalCount) => ({type: SET_TOTAL_PAGE_COUNT, totalCount})