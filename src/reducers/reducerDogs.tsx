/* eslint-disable @typescript-eslint/no-explicit-any */

export type StateDogs = {
  dogs: Array<{url: string, name: string}>
}

export type Dog = {
  url: string,
  name: string
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
    case 'GET_RANDOM_DOGS': {
      // return {...state, dogs: action.payload.message}
      const dogs = action.payload.message.map((url: string) => {
        return {
          url: url,
          name: url.split("/")[4].replace('-', ' ')
        }
      });
      return {...state, dogs: dogs}
    }
    case 'DELETE_DOG':      
      return {...state, dogs: state.dogs.filter((dog) => { return dog.url !== action.payload})}
    case 'FETCH_DOGS_BY_BREED':
      console.log('ci passo !!!');
      
      return state
    default:
      throw new Error(`Unhandled action type: ${action}`)
  }
}
