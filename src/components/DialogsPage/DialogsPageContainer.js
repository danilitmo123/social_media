import React from 'react';

import {connect} from "react-redux";
import {addDialogMessageActionCreator} from "../../redux/reducer/dialog-reducer";

import DialogsPage from "./index";

const mapStateToProps = (state) => {
  return {
    state: state.dialogPage
  }
}

const DialogsPageContainer = connect(mapStateToProps, {addMessage: addDialogMessageActionCreator})(DialogsPage)

export default DialogsPageContainer;