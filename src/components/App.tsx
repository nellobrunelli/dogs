import React, { useReducer } from 'react'
import { reducerDogs, StateDogsInit } from '../reducers/reducerDogs'
import  {URL_GET_RANDOM_DOGS} from '../constants/url';

import axios from 'axios';

function App() {
  
  const [state, dispatch] = useReducer(reducerDogs, StateDogsInit)

  const getRandomDogs = () => {
    try {
      const response =  axios.get(URL_GET_RANDOM_DOGS);
      console.log('responde ', response);
    } catch (error) {
      console.log('error ', error);  
    }
  }

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