import React, { useReducer } from 'react'
import { reducerDogs, StateDogsInit } from '../reducers/reducerDogs'

function App() {
  
  const [state, dispatch] = useReducer(reducerDogs, StateDogsInit)

  return (
    <div>Ciao mondo!</div>
  )
}

export default App