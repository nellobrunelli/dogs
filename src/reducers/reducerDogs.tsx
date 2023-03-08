/* eslint-disable @typescript-eslint/no-explicit-any */

type StateDogs = {
  dogs:[]
}

export const StateDogsInit: StateDogs = {
  dogs: []
}

export type ActionDogs = {
  payload: any
  type: 'GET_RANDOM_DOGS'
} | {
  type: 'FETCH_DOGS_BY_BREED', 
  payload: any  
}

export const reducerDogs = (state: StateDogs, action: ActionDogs): StateDogs => {
  switch (action.type) {    
    case 'GET_RANDOM_DOGS':      
      return {...state, dogs: action.payload.message}
    case 'FETCH_DOGS_BY_BREED':
      return state
    default:
      throw new Error(`Unhandled action type: ${action}`)
  }
}
