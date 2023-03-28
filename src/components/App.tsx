import React, { useReducer } from 'react'
import { FaDog } from 'react-icons/fa';

import { GET_OPTIONS, URL_GET_DOG_BY_BREED, URL_GET_RANDOM_DOGS } from '../constants/url';

import {reducerDogs, StateDogsInit} from '../reducers/reducerDogs';
import {reducerErrors, StateErrorsInit} from '../reducers/reducerErrors';
import {reducerLoading, StateLoadingInit} from '../reducers/reducerLoading';
import Dogs from './Dogs';
import Error from './Error';
import Loader from './Loader';
import Select from './Select';
import useFetch from '../hooks/useFetch';
 
function App() {

  const [stateDogs, dispatchDogs] = useReducer(reducerDogs, StateDogsInit);
  const [stateErrors, dispatchErrors] = useReducer(reducerErrors, StateErrorsInit);
  const [stateLoading, dispatchLoading] = useReducer(reducerLoading, StateLoadingInit);

  useFetch(
    URL_GET_RANDOM_DOGS,
    GET_OPTIONS,
    dispatchErrors,
    dispatchLoading,
    dispatchDogs
  );

  const showLoader = () => {    
    return stateLoading.isLoading ? <Loader/> : null
  }

  const showError = () => {
    return stateErrors.isActive ? <Error text={stateErrors.error}/> : null
  }

  return (
    <div className='sm:flex sm:flex-col md:flex-row duration-200'>
      <div className='rounded m-1 bg-amber-400 md:w-56 duration-200'>
        <div className='pb-2 ml-[35%] md:ml-10 duration-200'>
          <div>{showLoader()}</div>
          <div>{showError()}</div>
          <FaDog className='w-28 h-28 p-2 ml-2' />
          <Select 
            URL={URL_GET_DOG_BY_BREED}
            getOptions={GET_OPTIONS}
            dispatchErrors={dispatchErrors}
            dispatchLoading={dispatchLoading}
            dispatchDogs={dispatchDogs}
           />
        </div>
      </div>
      <div className='m-1 sm:w-full md:w-4/5'>
        <Dogs dogs={stateDogs} dispatchDogs={dispatchDogs} />
      </div>
    </div>
  );
}

export default App