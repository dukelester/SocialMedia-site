import React from 'react'
import './PostShare.css'
import '../../App.css';
import ProfileImage  from '../../img/profileImg.jpg'
import {UilScenery} from '@iconscout/react-unicons';
import {UilPlayCircle} from '@iconscout/react-unicons';
import {UilLocationPoint} from '@iconscout/react-unicons';
import {UilSchedule} from '@iconscout/react-unicons';


const PostShare = () => {
  return (
    <div className="PostShare">
    <img src={ProfileImage} alt=""/>
      
      <div>
        <input type="text" placeholder="What's happening..."/>
     <div className="PostOptions">
        <div className="option" style={{color:"var(--photo)"}}>
            <UilScenery/>
        Photo
        </div>
        <div className="option" style={{color:"var(--video)"}}>
            <UilPlayCircle/>
            Video
        </div>
        <div className="option" style={{color:"var(--location)"}}>
            <UilLocationPoint/>
            Location
        </div>
        <div className="option" style={{color:"var(--schedule)"}}>
            <UilSchedule/>
            Schedule
        </div>
        <button className="button ps-button">Share</button>
       </div>
     </div>
     
        
    </div>
  )
}

export default PostShare
