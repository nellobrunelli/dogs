import { useReducer } from 'react'

const ADD_TODO = 'addTodo'
const UPDATE_VALUE = 'updateValue'

type State = {
  dogs:[]
}

const initialState: State = {
  dogs: []
}

type Action = {
  type: string, 
  payload: string
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ADD_TODO:
      return state
    case UPDATE_VALUE:
      return state
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>ci sono</div>
  )
}

export default App