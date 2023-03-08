import type React from 'react'

interface Props {
  dogs: []
}

const Dogs:React.FC<Props> = ({dogs}) => {

  const displayDogs = () => {    
    return dogs.map((dog, i) => { 
      return <img src={dog} key={i} />
    })
  }

  return (
    <div>
     {displayDogs()}
    </div>
  )
}

export default Dogs