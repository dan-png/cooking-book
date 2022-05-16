
import { db } from '../../firebase/config'
import { useState, useEffect } from 'react'
import {collection, onSnapshot} from 'firebase/firestore'

// Styles
import './Home.css'

// Components
import RecipeList from '../../components/RecipeList'



function Home() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)
    const colRef = collection(db, 'recipes')

  const unsub =  onSnapshot(colRef,(snapshot => {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({...doc.data(), id:doc.id})
        })
        setData(results)
        setIsPending(false)
    }), (err) => {
      setError(err.message)
      setIsPending(false)
      })
      
      return () => unsub()
  },[])
  

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading....</p>}
      {data && <RecipeList recipes= {data }/>}
    </div>
  )
}

export default Home