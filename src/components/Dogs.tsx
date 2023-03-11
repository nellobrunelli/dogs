import axios from 'axios'
import { Dispatch, useEffect, useReducer } from 'react'
import type React from 'react'
import { URL_GET_RANDOM_DOGS } from '../constants/url'
import type {ActionDogs, StateDogs} from '../reducers/reducerDogs'
import type { ActionErrors } from '../reducers/reducerErrors'
import {reducerLoading, StateLoadingInit} from '../reducers/reducerLoading';

import Dog from './Dog'
import Loader from './Loader'
import '../css/styles.css'

interface Props {
  dogs: StateDogs
  dispatchDogs: Dispatch<ActionDogs>,
  dispatchErrors: Dispatch<ActionErrors>
}

const Dogs:React.FC<Props> = ({
    dogs,
    dispatchDogs,
    dispatchErrors,
  }) => {

  const [stateLoading, dispatchLoading] = useReducer(reducerLoading, StateLoadingInit)

  useEffect(() => {
    getRandomDogs()
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

  const displayDogs = (dogs: StateDogs) => {   
    
    return dogs.dogs.map((dog, i) => { 
      return (
        <Dog 
          dog={dog}
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