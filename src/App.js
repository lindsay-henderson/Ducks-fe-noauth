import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
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
        
      </main>
    </div>
  )
}

export default App
