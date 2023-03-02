import { useState, useEffect, useNavigate} from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import AddContact from './pages/addContact/addContact.js'
import * as contactService from './services/contactService'

import './App.css'

function App() {
  const [contacts, setContacts] = useState([])
  const navigate = useNavigate()

  const handleAddContact = async newContactData => {
    const newContact = await contactService.create(newContactData)
    setContacts([...contacts, newContact])
    alert('contact added')
    navigate('/')
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
          <Link to='/'>Contact List</Link>
          <Link className='m-left' to='/add'>Add Contact</Link>
        </nav>
      </header>
			<main>
				<Routes>
          <Route path='/add'  element={<AddContact handleAddContact={handleAddContact}/>}/>
				</Routes>
      </main>
    </div>
  )
}

export default App
