import React, { useReducer } from 'react'

import {reducerDogs, StateDogsInit} from '../reducers/reducerDogs';
import {reducerErrors, StateErrorsInit} from '../reducers/reducerErrors';
import Dogs from './Dogs';

function App() {

  const [stateDogs, dispatchDogs] = useReducer(reducerDogs, StateDogsInit)
  const [stateErrors, dispatchErrors] = useReducer(reducerErrors, StateErrorsInit)

  return (
    <div>
      <Dogs 
        dogs={stateDogs.dogs} 
        errors={stateErrors}
        dispatchDogs={dispatchDogs} 
        dispatchErrors={dispatchErrors} 
        />
    </div>
  )
}

export default App