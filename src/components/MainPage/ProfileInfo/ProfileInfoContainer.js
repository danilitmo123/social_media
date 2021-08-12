import {connect} from "react-redux";
import {setProfileAC} from "../../../redux/reducer/profile-reducer";
import ProfileInfo from "./index";
import {useEffect} from "react";
import { withRouter } from 'react-router-dom'
import {profileAPI} from "../../../api/api";

const ProfileInfoContainer = ({profile, setProfile, match}) => {

  useEffect(() => {
    const id = match.params.userId
    profileAPI.getProfile(id).then(data => {
      setProfile(data)
    })
  }, [])

  return <ProfileInfo profile={profile}/>
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

const withRouterComponent = withRouter(ProfileInfoContainer)

export default connect(mapStateToProps, {setProfile: setProfileAC})(withRouterComponent)






