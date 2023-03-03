import { useState, useEffect, } from 'react'
import { Route, Link, useNavigate, Routes } from 'react-router-dom'
import AddContact from './pages/AddContact/AddContact.js'
import ContactList from './pages/ContactList/ContactList'
import AddOrder from './pages/AddOrder/AddOrder.js'
import * as contactService from './services/contactService'
import * as orderService from './services/orderService'

import './App.css'

function App() {
  const [contacts, setContacts] = useState([])
  const navigate = useNavigate()
  const [orders, setOrders] = useState([])

  const handleAddContact = async newContactData => {
    const newContact = await contactService.create(newContactData)
    setContacts([...contacts, newContact])
    // alert('contact added')
    navigate('/contacts')
  }

  const handleAddOrder = async newOrderData => {
    const newOrder = await orderService.create(newOrderData)
    setOrders([...orders, newOrder])
    // alert('order added')
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
          <Link to='/addorder'>Add Order</Link> 
          <Link to='/contacts'>Contact List</Link>
          <Link className='m-left' to='/addcontact'>Add Contact</Link>
        </nav>
      </header>
			<main>
        <Routes>
          <Route path='/addorder' element={<AddOrder handleAddOrder={handleAddOrder}/>}/>
          <Route path='/addcontact'  element={<AddContact handleAddContact={handleAddContact}/>}/>
          <Route path='/contacts' element={<ContactList contacts={contacts}/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
