import React from 'react';
import {connect} from "react-redux";
import {addPostActionCreator} from "../../../redux/reducer/profile-reducer";

import AllPosts from "./index";

const mapStateToProps = (state) => {
  return {
    state: state.profilePage.posts
  }
}

const AllPostsContainer = connect(mapStateToProps, {addPost: addPostActionCreator})(AllPosts)

export default AllPostsContainer;