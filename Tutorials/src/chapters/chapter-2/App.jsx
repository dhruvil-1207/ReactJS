import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import ProfileCard from './components/profileCard'
import "./App.css"
const App = () => {
  const name = "Alice";
  return (
    <div className="parent">
      {/* <Navbar />
      <div>App</div>
      {Card()}
      <Card />
      <h2>Hello I'm {name}</h2> */}
      <ProfileCard name="Alice" img="https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"/>
      <ProfileCard name="Bob" img="https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" />
      <ProfileCard name="charlie" img="https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"/>

    </div>
  )
}

export default App