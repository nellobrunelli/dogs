/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from 'axios';
import React, { useReducer } from 'react'
import { URL_GET_RANDOM_DOGS } from '../constants/url';

import {reducerDogs, StateDogsInit} from '../reducers/reducerDogs';

function App() {

  const [state, dispatchDogs] = useReducer(reducerDogs, StateDogsInit)

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