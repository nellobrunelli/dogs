export type StateLoading = {
  isLoading: boolean
}

export const StateLoadingInit: StateLoading = {
  isLoading: false
}

export type ActionLoading = {
  type: 'LOADING_TRUE'
} | {
  type: 'LOADING_FALSE'
}

export const reducerLoading = (state: StateLoading, action: ActionLoading): StateLoading => {
  switch (action.type) {
    case 'LOADING_TRUE':      
      return {...state, isLoading: true}
    case 'LOADING_FALSE':      
      return {...state, isLoading: false}
    default:
      throw new Error(`Unhandled action type: ${action}`)
  }
}