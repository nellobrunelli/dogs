import axios from 'axios'
import { Dispatch, useEffect } from 'react'
import type React from 'react'
import { URL_GET_RANDOM_DOGS } from '../constants/url'
import type {ActionDogs, StateDogs} from '../reducers/reducerDogs'
import type {ActionErrors, StateErrors} from '../reducers/reducerErrors'
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
    dispatchErrors
  }) => {

  useEffect(() => {
    getRandomDogs()
  }, [])

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
        dispatchErrors({
          type: 'SHOW_ERROR',
          isActive: true,
          payload: error.message
        })       
      })
  }

  const displayDogs = (StateDogs: StateDogs) => {        
    return StateDogs.dogs.map((dog, i) => { 
      return (
       <div key={i} className="dog">
          <img src={dog} />
        </div> 
      )
    })
  }

  const displayError = (error:string) => {    
    return (
      <div className="error">{error}</div>
    )
  }

  const displayDom = () => {
    return errors.isActive 
      ? displayError(errors.error)
      : displayDogs(dogs)
  }

  return (
    <div className="dogs">
     {displayDom()}
    </div>
  )
}

export default Dogs