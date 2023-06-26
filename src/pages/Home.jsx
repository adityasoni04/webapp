import React from 'react'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    
    <div className='content'>
      <Sidebar/>
      <div className="home">
      <div className="hero">
        <h1>Welcome to My Website</h1>
        <h1>HOME PAGE</h1>
        <h2>Explore, Learn, and Create</h2>
       <h2>Here we have functionality of 4 buttons like:</h2>
       <ul>
        <li>Home</li>
        <li>Contacts</li>
        <li>Information</li>
        <li>Guide</li>
       </ul>
      </div>
      </div>
    </div>
  )
}

export default Home
