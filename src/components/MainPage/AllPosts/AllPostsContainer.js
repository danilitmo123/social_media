import React from 'react';
import {connect} from "react-redux";
import {addPostActionCreator} from "../../../redux/reducer/profile-reducer";

import AllPosts from "./index";

const mapStateToProps = (state) => {
  return {
    state: state.profilePage.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (message) => {
      dispatch(addPostActionCreator(message))
    }
  }
}

const AllPostsContainer = connect(mapStateToProps, mapDispatchToProps)(AllPosts)

export default AllPostsContainer;