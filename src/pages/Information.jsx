import React from 'react'
import Sidebar from '../components/Sidebar'

const Information = () => {
  const informationData = [
    {
      id: 1,
      title: 'Place 1',
      content: 'A good place to visit .......',
    },
    {
      id: 2,
      title: 'Place 2',
      content: 'Hill Station.......',
    },
    {
      id: 3,
      title: 'Place 3',
      content: 'Beach Place........',
    },
  ];
   
  return (
    <div  className='content' >
      <Sidebar />
      <div className="info">
      <div className="information">
        <h1>Information Page</h1>
        {informationData.map((section) => (
          <div key={section.id} className="information-section">
            <h3>{section.id}. {section.title}</h3>
            <h5>{section.content}</h5>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Information
