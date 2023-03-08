import axios from 'axios';
import React, { useReducer, useEffect } from 'react'
import { URL_GET_RANDOM_DOGS } from '../constants/url';

import {reducerDogs, StateDogsInit, StateDogs} from '../reducers/reducerDogs';
import Dogs from './Dogs';

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

  useEffect(() => {
    getRandomDogs()
  }, [])

  return (
    <div>
      <Dogs dogs={state.dogs} />
    </div>
  )
}

export default App