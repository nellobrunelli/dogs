import React from 'react'
import type { Dispatch } from 'react'
import type { ActionDogs } from '../reducers/reducerDogs'

type Props = {
  dog: {name: string, url: string},
  dispatchDogs: Dispatch<ActionDogs>,
  mkey: number
}

const Dog = ({dog, dispatchDogs, mkey}: Props) => {
  
  return (
    <div key={mkey} className="dog">
      <div className="dog-header">  
        <div className='dog-name'>{dog.name}</div>
        <div className="grow"></div>
        <div className="buttonDeleteDog">
          <button 
            type="button" 
            onClick={() => {dispatchDogs({type: 'DELETE_DOG', payload: dog.url})}}
          >
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div className='dog-image'><img src={dog.url} /></div>
      
    </div>
  )
}
export default Dog;