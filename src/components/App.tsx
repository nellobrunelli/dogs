import React, { useReducer } from 'react'

import {reducerDogs, StateDogsInit} from '../reducers/reducerDogs';
import Dogs from './Dogs';

function App() {

  const [state, dispatchDogs] = useReducer(reducerDogs, StateDogsInit)

  return (
    <div>
      <Dogs 
        dogs={state.dogs} 
        dispatchDogs={dispatchDogs} 
        />
    </div>
  )
}

export default App