import React from 'react'
import "./profileCard.css"
const ProfileCard = (props) => {
  return (
    <div className="parent">
      <div className="card">
        <img src={props.img}></img>
        <h1>{props.name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default ProfileCard