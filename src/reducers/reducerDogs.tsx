/* eslint-disable @typescript-eslint/no-explicit-any */

export type StateDogs = {
  dogs: Array<never>
}

export const StateDogsInit: StateDogs = {
  dogs: []
}

export type ActionDogs = {
  type: 'GET_RANDOM_DOGS',
  payload: any
} | {
  type: 'FETCH_DOGS_BY_BREED', 
  payload: any  
} | {
  type: 'DELETE_DOG', 
  payload: string 
}

export const reducerDogs = (state: StateDogs, action: ActionDogs): StateDogs => {
  switch (action.type) {    
    case 'GET_RANDOM_DOGS':      
      return {...state, dogs: action.payload.message}
    case 'DELETE_DOG':      
      return {...state, dogs: state.dogs.filter((dog) => { return dog !== action.payload})}
    case 'FETCH_DOGS_BY_BREED':
      return state
    default:
      throw new Error(`Unhandled action type: ${action}`)
  }
}
