import React, { useReducer } from 'react'

import {reducerDogs, StateDogsInit} from '../reducers/reducerDogs';
import {reducerErrors, StateErrorsInit} from '../reducers/reducerErrors';
import Dogs from './Dogs';
import Error from './Error';
import Select from './Select';

function App() {

  const [stateDogs, dispatchDogs] = useReducer(reducerDogs, StateDogsInit)
  const [stateErrors, dispatchErrors] = useReducer(reducerErrors, StateErrorsInit)

  const displayDom = () => {

    if (stateErrors.isActive) {
      return <Error text={stateErrors.error} />
    }

    return (
      <Dogs 
          dogs={stateDogs} 
          dispatchDogs={dispatchDogs} 
          dispatchErrors={dispatchErrors} 
      />
      // <Select dispatchDogs={dispatchDogs} />
    )
  }

  return (
    <div className="">{displayDom()}</div>
  )
}

export default App