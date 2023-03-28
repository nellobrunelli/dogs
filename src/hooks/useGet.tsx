import type { Dispatch } from 'react'
import type { ActionDogs } from '../reducers/reducerDogs'
import type { ActionErrors } from '../reducers/reducerErrors'
import type { ActionLoading } from '../reducers/reducerLoading'

export const getDog = (
  URL: string,
  OPTIONS = {},
  dispatchError: Dispatch<ActionErrors>,
  dispatchLoading: Dispatch<ActionLoading>,
  dispatchDogs: Dispatch<ActionDogs>
) => {

  dispatchLoading({type:'LOADING_TRUE'})

  fetch(URL, OPTIONS)
    .then((r1) => {
      return r1
    })
    .then((r2) => {
      return r2.json()
    })
    .then((r3) => {
      dispatchDogs({type: 'GET_DOG_BY_BREED', payload: r3})
    })
    .catch((error) => {
      dispatchError({type: 'SHOW_ERROR', isActive: true, payload: error.message})
    })
    .finally(() => {
      dispatchLoading({type:'LOADING_FALSE'})
    })

}

export default getDog;