import axios from 'axios';
import React, { useReducer } from 'react'
import { FaDog } from 'react-icons/fa';

import { useEffect } from 'react';
import { URL_GET_RANDOM_DOGS } from '../constants/url';

import {reducerDogs, StateDogsInit} from '../reducers/reducerDogs';
import {reducerErrors, StateErrorsInit} from '../reducers/reducerErrors';
import { reducerLoading, StateLoadingInit } from '../reducers/reducerLoading';
import Dogs from './Dogs';
import Error from './Error';
import Loader from './Loader';
import Select from './Select';

function App() {

  const [stateDogs, dispatchDogs] = useReducer(reducerDogs, StateDogsInit)
  const [stateErrors, dispatchErrors] = useReducer(reducerErrors, StateErrorsInit)
  const [stateLoading, dispatchLoading] = useReducer(reducerLoading, StateLoadingInit)

  useEffect(() => {
    getRandomDogs()
  }, [])


  const getRandomDogs = () => {    

    dispatchLoading({type: 'LOADING_TRUE'})

    axios
      .get(URL_GET_RANDOM_DOGS)
      .then(response => {
        dispatchDogs({
          type: 'GET_RANDOM_DOGS',
          payload: response.data
        })
      })
      .catch(error => {      
        dispatchErrors({
          type: 'SHOW_ERROR',
          isActive: true,
          payload: error.message
        })     
      })
      .finally(() => {
        dispatchLoading({type: 'LOADING_FALSE'})
      })
  }

  const getDogByBreed = (url: string) => {    

    dispatchLoading({type: 'LOADING_TRUE'})

    axios
      .get(url)
      .then(response => {
        
        dispatchDogs({
          type: 'GET_DOG_BY_BREED',
          payload: response
        })
      })
      .catch(error => {      
        dispatchErrors({
          type: 'SHOW_ERROR',
          isActive: true,
          payload: error.message
        })     
      })
      .finally(() => {
        dispatchLoading({type: 'LOADING_FALSE'})
      })
  }


  const displayDom = () => {

    if (stateErrors.isActive) {
      return <Error text={stateErrors.error} />
    }

    if (stateLoading.isLoading) {
      return <Loader />
    }

    return (
      <div>
        <Dogs
          dogs={stateDogs} 
          dispatchDogs={dispatchDogs} 
        />
      </div>
    )
  }

  return (
    <div className='sm:flex sm:flex-col md:flex md:flex-row duration-200'>
      <div className='bg-amber-400'>
        <div className="ml-[40%] md:ml-2 duration-200">
          <FaDog className='w-28 h-28 p-2' />
          <div className='w-1/3'>
            <Select getDogByBreed={getDogByBreed} />
          </div>
        </div>
      </div>
      <div className='sm:w-full md:p-2 md:w-4/5'>{displayDom()}</div>
    </div>
  )
}

export default App