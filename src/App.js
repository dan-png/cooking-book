

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Page Components
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'
import Navbar from './components/Navbar'

// Styles
import './App.css';




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/search' element={<Search />} />
          <Route path='/:id' element={<Recipe />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
