import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons';
const InfoCard = () => {
  return (
    <div className="InfoCard">
    <div className="InfoHead">
    <h4>Your Info</h4>
    <div>
    <UilPen width='2rem' height='1.2rem'/>
    </div>
    </div>
      
      <div className="Info">
          <span>
              <b>Status </b> 
          </span>
          <span>in Relationship</span>
      </div>
      <div className="Info">
          <span>
              <b>Lives In </b>
          </span>
          <span>Nairobi, Kenya</span>
      </div>
      <div className="Info">
          <span>
              <b>Works at </b>
          </span>
          <span>LesterSofts Inc</span>
      </div>
      <button className="button logout-button">Logout</button>
    </div>
  )
}

export default InfoCard
