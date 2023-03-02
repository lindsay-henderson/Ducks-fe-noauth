import { useState, useEffect, } from 'react'
import { Route, Link, useNavigate, Routes } from 'react-router-dom'
import AddContact from './pages/AddContact/AddContact.js'
import ContactList from './pages/ContactList/ContactList'
import * as contactService from './services/contactService'

import './App.css'

function App() {
  const [contacts, setContacts] = useState([])
  const navigate = useNavigate()

  const handleAddContact = async newContactData => {
    const newContact = await contactService.create(newContactData)
    setContacts([...contacts, newContact])
    // alert('contact added')
    navigate('/contacts')
  }
  useEffect(() => {
    const fetchAllContacts = async () =>{
      const contactData = await contactService.getAll()
      setContacts(contactData)
    }
    fetchAllContacts()
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        Ducks
        <nav>
          <Link to='/contacts'>Contact List</Link>
          <Link className='m-left' to='/addcontact'>Add Contact</Link>
        </nav>
      </header>
			<main>
        <Routes>
          <Route path='/addcontact'  element={<AddContact handleAddContact={handleAddContact}/>}/>
          <Route path='/contacts' element={<ContactList contacts={contacts}/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
