import React from 'react'
import type { Dispatch } from 'react'
import  type {ActionDogs, StateDogs} from '../reducers/reducerDogs'

import Dog from './Dog'
import '../css/styles.css'

interface Props {
  dogs: StateDogs
  dispatchDogs: Dispatch<ActionDogs>,
}

const Dogs:React.FC<Props> = ({
    dogs,
    dispatchDogs
  }) => {

  const displayDogs = (dogs: StateDogs) => {       
    return dogs.dogs.reverse().map((dog, i) => { 
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
    return <div className='dogs'>{displayDogs(dogs)}</div>
  }

  return (
    <div className='rounded'>
     {displayDom()}
    </div>
  )
}

export default Dogs