import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// Styles
import './Recipe.css'



function Recipe() {

  const {id} = useParams()
  const {data, isPending, error} = useFetch(`http://localhost:3000/recipes/${id}`)

  return (
    
    <div className='recipe'>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <>
          <h2 className='page-title'>{data.title}</h2>
          <p>Takes {data.cookingTime} to cook.</p>
          <ul>
            {data.ingredients.map(ingredient =>
              <li key={ingredient}>{ ingredient }</li>)}
          </ul>
          <p className='method'>{ data.method}</p>
        </>
      )}
    </div>
  )
}

export default Recipe