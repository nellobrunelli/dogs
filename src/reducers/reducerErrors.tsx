export type StateErrors = {
  error:string
  isActive: boolean
}

export const StateErrorsInit: StateErrors = {
  error: "",
  isActive: false
}

export type ActionErrors = {
  payload: string
  isActive: boolean,
  type: 'SHOW_ERRORS'
}

export const reducerErrors = (state: StateErrors, action: ActionErrors): StateErrors => {
  switch (action.type) {
    case 'SHOW_ERRORS':      
      return {...state, error: action.payload, isActive: true}
    default:
      throw new Error(`Unhandled action type: ${action}`)
  }
}