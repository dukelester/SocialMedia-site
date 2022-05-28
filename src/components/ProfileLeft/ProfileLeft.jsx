import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch';
import FollowersCard from '../FollowersCard/FollowersCard';
import InfoCard from '../InfoCard/InfoCard';
import './ProfileLeft.css'
const ProfileLeft = () => {
  return (
    <div className="ProfileLeft">
    <LogoSearch />
    <InfoCard/>
    <FollowersCard/>

    </div>
  )
}

export default ProfileLeft
