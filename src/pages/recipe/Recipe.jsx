import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useTheme } from '../../hooks/useTheme'
import { useEffect, useState } from 'react'

// Styles
import './Recipe.css'



function Recipe() {
   const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  const {id} = useParams()
  const { mode } = useTheme()
  
  useEffect(() => {
    setIsPending(true)

    const docRef = doc(db, 'recipes', id)

    getDoc(docRef)
      .then((doc) => {
        if (doc) {
          setIsPending(false)
          setData(doc.data())
        } else{
          setIsPending(false)
          setError('Could not find recipe')
        }
      })

  },[id])

  return (
    
    <div className={`recipe ${mode}`}>
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