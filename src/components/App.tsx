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
import Dog from './Dog';

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
        <Dogs
          dogs={stateDogs} 
          dispatchDogs={dispatchDogs} 
        />
    )
  }

  return (
    <div className='sm:flex sm:flex-col md:flex-row duration-200'>
      <div className='rounded m-1 bg-amber-400 md:w-56 duration-200'>
        <div className='pb-2 ml-[35%] md:ml-10 duration-200'>
          <FaDog className='w-28 h-28 p-2 ml-2' />
          <Select getDogByBreed={getDogByBreed} />
        </div>
      </div>
      <div className='m-1 sm:w-full md:w-4/5'>{displayDom()}</div>
    </div>

//  type Props = {
//   dog: Dog,
//   dispatchDogs: Dispatch<ActionDogs>,
//   mkey: number
// }
   
    // <div className="className">
    //     <Dog
    //       dog={{
    //         url: "https://images.dog.ceo/breeds/terrier-irish/n02093991_686.jpg",
    //         name: 'terrier irish'
    //       }} 
    //       dispatchDogs={dispatchDogs} 
    //       mkey={1}
    //     />

    // </div>
  )
}

export default App