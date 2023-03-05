import { useReducer } from 'react'

export type StateDogs = {
  dogs:[]
}

export const StateDogsInit: StateDogs = {
  dogs: []
}

export type ActionDogs = {
  type: 'GET_DOGS', 
  payload: string
} | {
  type: 'FETCH_DOGS', 
  payload: string  
}

export const reducerDogs = (state: StateDogs, action: ActionDogs): StateDogs => {
  switch (action.type) {
    case 'GET_DOGS':
      return state
    case 'FETCH_DOGS':
      return state
    default:
      throw new Error(`Unhandled action type: ${action}`)
  }
}
