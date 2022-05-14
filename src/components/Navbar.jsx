import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

// Styles
import './Navbar.css'

// Components
import SearchBar from './SearchBar'




function Navbar() {
  const {color} = useTheme()

  return (
    <div className='navbar' style={{background: color}}>
      <nav>
        <Link to={'/'} className='brand'>
          <h1 >Cooking Book</h1>
        </Link>
        <SearchBar/>
        <Link to={'/create'}>
          Create New Recipe
        </Link>
      </nav>
    </div>
  )
}

export default Navbar