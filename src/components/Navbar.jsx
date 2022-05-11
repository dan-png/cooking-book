import { Link } from 'react-router-dom'

// Styles
import './Navbar.css'




function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link to={'/'} className='brand'>
          <h1>Cooking Book</h1>
        </Link>
        <Link to={'/create'}>
          Create New Recipe
        </Link>
      </nav>
    </div>
  )
}

export default Navbar