import React from 'react'

const btn_mouse = () => {
  // function btnClicked() {
  //   console.log("Button was clicked");
  // }
  // function btnDoubleClicked() {
  //   console.log("Button was clicked twice");
  // }
  // function mouseEnter() {
  //   console.log("mouse enterred");
  // }
  // function inputChanged(e) {
  //   // console.log(e.target);
  //   console.log(e.target.value);
  // }
  return (
    // <div>
    //   <button onClick={btnClicked}  onMouseEnter={mouseEnter} className='bg-pink-300 px-4 py-1 rounded-full mt-5 ml-5'>Click me</button>
    //   <button onDoubleClick={btnDoubleClicked} className='bg-pink-300 px-4 py-1 rounded-full mt-5 ml-5'>Double Click me</button>
    //   <input type="text" onChange={inputChanged} placeholder="type something" className='border-3 border-dotted border-indigo-500 px-4 py-1 rounded-full mt-5 ml-5' />
    // </div>
    <div onMouseMove={(e) => {
      // console.log(e);
      console.log (e.clientX, e.clientY);
    }} className='h-100 w-100 bg-red-400 mt-10 ml-10'>
      Helloooo 
    </div>
  )
}

export default btn_mouse