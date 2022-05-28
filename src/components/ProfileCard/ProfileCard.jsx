import React from 'react'
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg';

import './ProfileCard.css'
const ProfileCard = () => {
  return (
    <div className="ProfileCard">
    <div className="ProfileImages">
    <img src={Cover} alt=""/>
    <img src={Profile} alt=""/>
    </div>
    <div className="ProfileName">
    <span>Duke Lester</span>
    <span>Software Engineer</span>
    </div>

      <div className="followStatus">
        <hr/>
            <div>
                <div className="follow">
                    <span>7,800</span>
                    <span>Followers</span>
                </div>
                <div className="Vl"></div>
                <div className="follow">
                    <span>4</span>
                    <span>Following</span>
                </div>
            </div>
        <hr/>
      </div>
      <span>
          My Profile
      </span>
    </div>
  )
}

export default ProfileCard
