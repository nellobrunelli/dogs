import axios from 'axios';
import React, { useReducer } from 'react'
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
        <Select getDogByBreed={getDogByBreed} />
        <Dogs
          dogs={stateDogs} 
          dispatchDogs={dispatchDogs} 
        />
      </div>
    )
  }

  return (
    <div>
      <div>{displayDom()}</div>
    </div>
  )
}

export default App