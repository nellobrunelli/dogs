import React from 'react'
import '../reducers/reducerDogs'

import { useReducer } from 'react'

type StateDogs = {
  dogs:[]
}

const StateDogsInit: StateDogs = {
  dogs: []
}

type ActionDogs = {
  type: 'GET_DOGS', 
  payload: string
} | {
  type: 'FETCH_DOGS', 
  payload: string  
}

const reducerDogs = (state: StateDogs, action: ActionDogs): StateDogs => {
  switch (action.type) {
    case 'GET_DOGS':
      return state
    case 'FETCH_DOGS':
      return state
    default:
      throw new Error(`Unhandled action type: ${action}`)
  }
}

function App() {
  
  const [state, dispatch] = useReducer(reducerDogs, StateDogsInit)

  return (
    <div>Ciao mondo!</div>
  )
}

export default App