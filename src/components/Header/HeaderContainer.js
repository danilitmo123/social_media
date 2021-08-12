import React, {useEffect} from "react";
import Header from "./index";

import {authAPI} from "../../api/api";
import {connect} from "react-redux";
import {setUserDataAC} from "../../redux/reducer/auth-reducer";


const HeaderContainer = ({auth, setUserData}) => {

  useEffect(() => {
    authAPI.getAuth().then(data => {
      if (data.resultCode === 0) {
        const {id, login, email} = data.data
        setUserData(id, login, email)
      }
    })
  }, [])

  return <Header userData={auth}/>
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, {setUserData: setUserDataAC})(HeaderContainer)