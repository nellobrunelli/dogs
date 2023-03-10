import axios from 'axios'
import { Dispatch, useEffect, useReducer } from 'react'
import type React from 'react'
import { URL_GET_RANDOM_DOGS } from '../constants/url'
import type {ActionDogs, StateDogs} from '../reducers/reducerDogs'
import type {ActionErrors, StateErrors} from '../reducers/reducerErrors'
import {reducerLoading, StateLoadingInit} from '../reducers/reducerLoading';

import Dog from './Dog'
import Loader from './Loader'
import '../css/styles.css'

interface Props {
  dogs: StateDogs
  dispatchDogs: Dispatch<ActionDogs>,
  errors: StateErrors
  dispatchErrors: Dispatch<ActionErrors>
}

const Dogs:React.FC<Props> = ({
    dogs,
    errors,
    dispatchDogs,
    dispatchErrors,
  }) => {

  const [stateLoading, dispatchLoading] = useReducer(reducerLoading, StateLoadingInit)


  useEffect(() => {
    getRandomDogs()
    console.log('renderizzo dogs');
  }, [])

  const getRandomDogs = () => {    

    dispatchLoading({type: 'LOADING_TRUE'})

    axios
      .get(URL_GET_RANDOM_DOGS)
      .then(response => {
        dispatchLoading({type: 'LOADING_FALSE'})

        dispatchDogs({
          type: 'GET_RANDOM_DOGS',
          payload: response.data
        })
      })
      .catch(error => {      
        dispatchLoading({type: 'LOADING_FALSE'})
        dispatchErrors({
          type: 'SHOW_ERROR',
          isActive: true,
          payload: error.message
        })     
      })     
  }

  const displayDogs = (StateDogs: StateDogs) => {   
         
    return StateDogs.dogs.map((url, i) => { 
      return (
        <Dog 
          url={url}
          dispatchDogs={dispatchDogs}
          mkey={i}
          key={i}
        />
      )
    })    
  }

  const displayDom = () => {
    return stateLoading.isLoading
      ? <Loader />
      : <div className='dogs'>{displayDogs(dogs)}</div>
  }

  return (
    <div>
     {displayDom()}
    </div>
  )
}

export default Dogs