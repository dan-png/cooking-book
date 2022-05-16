import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import Deleteicon from '../assets/delete_icon.svg'
import { db } from '../firebase/config'
import { doc, deleteDoc } from "firebase/firestore";

// Styles
import './RecipeList.css'



function RecipeList({ recipes }) {
  const {mode} = useTheme()
  
  if (recipes.length === 0) {
    return <div className='error'>No recipes to Load...</div>
  }

  const handleClick = async (id) => {
    await deleteDoc(doc(db, 'recipes', id))
  }
  return (
    <div className='recipe-list'>
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/${recipe.id}`}>Cook This</Link>
          <img
            onClick={()=>handleClick(recipe.id)}
            className='delete'
            src={Deleteicon}
            alt='delete'
          />
        </div>
      ))}
    </div>
  )
}

export default RecipeList