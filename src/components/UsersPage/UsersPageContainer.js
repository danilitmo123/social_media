import {connect} from "react-redux";

import {subscribeUserAC, unsubscribeUserAC, setUsersAC, setTotalPageCountAC} from "../../redux/reducer/user-reducer";

import UsersPage from "./index";

const mapStateToProps = (state) => {
  return {
    state: state.userPage.users,
    totalPageCount: state.userPage.totalPageCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubscribe: (userId) => {
      dispatch(subscribeUserAC(userId))
    },
    onUnsubscribe: (userId) => {
      dispatch(unsubscribeUserAC(userId))
    },
    onSetUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    onSetTotalPageCount: (totalCount) => {
      dispatch(setTotalPageCountAC(totalCount))
    }
  }
}

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage)

export default UsersPageContainer
