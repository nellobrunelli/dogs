import axios from 'axios'
import { Dispatch, useEffect } from 'react'
import type React from 'react'
import { URL_GET_RANDOM_DOGS } from '../constants/url'
import type {ActionDogs} from '../reducers/reducerDogs'
import '../css/styles.css'

interface Props {
  dogs: []
  dispatchDogs: Dispatch<ActionDogs>
}

const Dogs:React.FC<Props> = ({dogs, dispatchDogs}) => {

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
        throw error
      })
  }

  const displayDogs = () => {    
    return dogs.map((dog, i) => { 
      return (
       <div key={i} className="dog">
          <img src={dog} />
        </div> 
      )
    })
  }

  return (
    // <button className='btn-primary'>bottone</button>
    <div className="dogs">
     {displayDogs()}
    </div>
  )
}

export default Dogs