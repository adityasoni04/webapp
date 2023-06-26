import React from 'react'
import Sidebar from '../components/Sidebar'

const Contact = () => {
  const contactsData = [
    { id: 1, name: 'Aman Singh', phone: '123-456-7890', email: 'aman.singh@example.com' },
    { id: 2, name: 'Akshat Yadav', phone: '987-654-3210', email: 'akshat.yadav@example.com' },
    { id: 3, name: 'Aman Ansh', phone: '555-555-5555', email: 'aman.ansh@example.com' },
  ];

  return (
    <div className='content'>
        <Sidebar/>
      <div className="cont">
      <div className="contacts">
        <h1>Contacts</h1>
        <ul>
          {contactsData.map((contact) => (
            <li key={contact.id}>
              <div className="contact-name">{contact.id}. {contact.name}</div>
              <div className="contact-details">
                <div className="contact-phone">{contact.phone}</div>
                <div className="contact-email">{contact.email}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
      </div>
  )
}

export default Contact
