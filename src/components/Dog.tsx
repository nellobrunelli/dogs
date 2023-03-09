import type React from 'react'
import type { Dispatch } from 'react'
import type { ActionDogs } from '../reducers/reducerDogs'

type Props = {
  url: string,
  dispatchDogs: Dispatch<ActionDogs>,
  key: number
}

const Dog:React.FC<Props> = ({url, dispatchDogs, key}) => {
  return (
      <div key={key} className="dog">
        <button 
          type="button" 
          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
