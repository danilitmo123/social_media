import {connect} from "react-redux";

import {subscribeUserAC, unsubscribeUserAC, setUsersAC, setTotalPageCountAC, toggleSubProgressAC} from "../../redux/reducer/user-reducer";

import UsersPage from "./index";

const mapStateToProps = (state) => {
  return {
    state: state.userPage.users,
    totalPageCount: state.userPage.totalPageCount,
    subscribeProgress: state.userPage.subscribeProgress
  }
}

const UsersPageContainer = connect(mapStateToProps,{
  onSubscribe: subscribeUserAC,
  onUnsubscribe: unsubscribeUserAC,
  onSetUsers: setUsersAC,
  onSetTotalPageCount: setTotalPageCountAC,
  onToggleSubProgress: toggleSubProgressAC
})(UsersPage)

export default UsersPageContainer
