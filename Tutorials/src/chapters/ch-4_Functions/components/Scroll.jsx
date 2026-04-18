import React from 'react'

const Scroll = (e) => {
  const pageScrolling = () =>{
    console.log (e);
  }
  return (
    <div onWheel={(e) => {
      // pageScrolling(e);
      console.log("Vertical Scroll Speed:", event.deltaY);
      
      if (event.deltaY > 0) {
        console.log("User is scrolling down");
      } 
      else {
        console.log("User is scrolling up");
      }
    }}>
      <div className="h-screen bg-indigo-300"></div>
      <div className="h-screen bg-green-300"></div>
      <div className="h-screen bg-pink-700"></div>
    </div>
  )
}

export default Scroll