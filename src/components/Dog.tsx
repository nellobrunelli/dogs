import type React from 'react'
import type { Dispatch } from 'react'
import type { ActionDogs } from '../reducers/reducerDogs'

type Props = {
  url: string,
  dispatchDogs: Dispatch<ActionDogs>,
  mkey: number
}

const Dog:React.FC<Props> = ({url, dispatchDogs, mkey}) => {
  return (
    <div key={mkey} className="dog">
      <button 
        type="button" 
        className="buttonDeleteDog"
        onClick={() => {dispatchDogs({type: 'DELETE_DOG', payload:url})}}
      >
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <img src={url} />
    </div>
  )
}
export default Dog;
