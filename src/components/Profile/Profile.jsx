import React from 'react'
import ProfileLeft from '../ProfileLeft/ProfileLeft';
import './Profile.css';
import PostSide from '../PostSide/PostSide';
import ProfileCard from '../ProfileCard/ProfileCard';
import RightSide from '../RightSide/RightSide';

const Profile = () => {
  return (
    <div className="Profile">
      
      <ProfileLeft/>
      <div className="ProfileCenter">
          <ProfileCard />
          <PostSide />
          <RightSide/>
      </div>
    </div>
  )
}

export default Profile
