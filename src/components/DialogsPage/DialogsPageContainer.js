import React from 'react';

import {connect} from "react-redux";
import {addDialogMessageActionCreator} from "../../redux/reducer/dialog-reducer";

import DialogsPage from "./index";

const mapStateToProps = (state) => {
  return {
    state: state.dialogPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => {
      dispatch(addDialogMessageActionCreator(message))
    }
  }
}

const DialogsPageContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsPage)

export default DialogsPageContainer;