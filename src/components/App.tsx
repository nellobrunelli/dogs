/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useReducer } from 'react'

import  {URL_GET_RANDOM_DOGS} from '../constants/url';
import axios from 'axios';

function App() {

  const getRandomDogs = () => {
    axios
      .get(URL_GET_RANDOM_DOGS)
      .then(response => {
        dispatchDogs({
          type: 'GET_RANDOM_DOGS',
          payload: response.data
        })       
      })
      .catch(error => {
        throw error
      })
  }
  
 const reducerDogs = (state: StateDogs, action: ActionDogs): StateDogs => {
  switch (action.type) {    
    case 'GET_RANDOM_DOGS':
      return {...state, dogs: action.payload.message}
    case 'FETCH_DOGS_BY_BREED':
      return state
    default:
      throw new Error(`Unhandled action type: ${action}`)
  }
}

 type StateDogs = {
    dogs:[]
  }

 const StateDogsInit: StateDogs = {
  dogs: []
}

  type ActionDogs = {
    payload: any
    type: 'GET_RANDOM_DOGS'
  } | {
    type: 'FETCH_DOGS_BY_BREED', 
    payload: any  
  }

  const [state, dispatchDogs] = useReducer(reducerDogs, StateDogsInit)

  return (
    <div>
      <button 
        className="bg-slate-600"
        onClick={() => {getRandomDogs()}}
      >
        BOTTONE
      </button>
    </div>
  )
}

export default App