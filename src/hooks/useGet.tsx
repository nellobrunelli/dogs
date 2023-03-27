import { Dispatch, useCallback, useEffect } from 'react'
import type { ActionDogs } from '../reducers/reducerDogs'
import type { ActionErrors } from '../reducers/reducerErrors'
import type { ActionLoading } from '../reducers/reducerLoading'

export const useGet = (
  URL: string,
  OPTIONS = {},
  action: 'GET_RANDOM_DOGS' | 'GET_DOG_BY_BREED',
  dispatchError: Dispatch<ActionErrors>,
  dispatchLoading: Dispatch<ActionLoading>,
  dispatchDogs: Dispatch<ActionDogs>
) => {

  useEffect(() => {
    fetchData()
  }, [URL])

  const fetchData =  useCallback(async () => {

    dispatchLoading({type:'LOADING_TRUE'})

    fetch(URL, OPTIONS)
      .then((r1) => {
        return r1
      })
      .then((r2) => {
        return r2.json()
      })
      .then((r3) => {
        if (action === 'GET_RANDOM_DOGS') {
          dispatchDogs({type: 'GET_RANDOM_DOGS', payload: r3})
        } else if (action === 'GET_DOG_BY_BREED') {
          dispatchDogs({type: 'GET_DOG_BY_BREED', payload: r3})
        }
      })
      .catch((error) => {
        dispatchError({type: 'SHOW_ERROR', isActive: true, payload: error.message})
      })
      .finally(() => {
        dispatchLoading({type:'LOADING_FALSE'})
      })
  }, [URL])
}

export default useGet;