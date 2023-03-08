import axios from 'axios'
import { Dispatch, useEffect } from 'react'
import type React from 'react'
import { URL_GET_RANDOM_DOGS } from '../constants/url'
import type {ActionDogs} from '../reducers/reducerDogs'

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
      return <img src={dog} key={i} />
    })
  }

  return (
    <div>
     {displayDogs()}
    </div>
  )
}

export default Dogs