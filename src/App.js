import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import AddContact from './pages/addContact/addContact.js'
import './App.css'

function App() {
  const [contacts, setContacts] = useState([])

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
          <Route path='/add'  element={<AddContact/>}/>
				</Routes>
      </main>
    </div>
  )
}

export default App
