import type React from 'react'
import { useState } from 'react';
import { FaDog } from 'react-icons/fa';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

type getDogByBreed = (par: string) => void
interface Props {
  getDogByBreed: getDogByBreed
}

const Select:React.FC<Props> = ({getDogByBreed}) => {


  const [open, setOpen] = useState(false);
  const [optionsState] = useState([
    {
      name: 'Boxer',
      url: 'https://dog.ceo/api/breed/boxer/images/random',
      selected: false
    },
    {
      name: 'Chihuahua',
      url: 'https://dog.ceo/api/breed/chihuahua/images/random',
      selected: false
    },
    {
      name: 'Collie',
      url: 'https://dog.ceo/api/breed/collie/border/images/random',
      selected: false
    },
    {
      name: 'San Bernardo',
      url: 'https://dog.ceo/api/breed/stbernard/images/random',
      selected: false
    },
    {
      name: 'Doberman',
      url: 'https://dog.ceo/api/breed/doberman/images/random',
      selected: false
    },
    {
      name: 'Pitbull',
      url: 'https://dog.ceo/api/breed/pitbull/images/random',
      selected: false
    }
  ])

  type option = {
      name: string,
      url: string,
      selected: boolean
  }
  
  const toggle = (flag: boolean) => {
    setOpen(flag);
  }


  const showHeader = (open: boolean) => {
    return (
      <div>
        <div 
          onClick={() => {toggle(!open)}}
          className='w-40 p-2 flex hover:bg-slate-400 hover:text-white duration-200 rounded'
        >
          <div className='flex-auto'>one more dog</div>
          <div className='p-1 ml-2 rounded-full hover:bg-slate-600 duration-200'>
            {getHeaderArrow(open)}
          </div>
        </div>
      </div>
    )
  }

  const showOptions = (open: boolean, options: option[]) => {
    
    return open ? (
      options.map((option, i) => {
        return (
          <div className={'p-1 flex hover:bg-slate-400 hover:text-white duration-200 my-1 rounded'}
            onClick={() => {
              getDogByBreed(option.url)
              setOpen(false);
            }}
            key={i}
          >
            <FaDog className='my-1 mx-1 mr-2'/>
            <div className=''>{option.name}</div>
          </div>
        )
      })
    ) : (
       null
    )
  }


  const getHeaderArrow = (open: boolean) => {
    return open ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />
  }

  const showbackground = (open: boolean| null): React.ReactNode => {
    return open? 
      <button className='fixed top-0 right-0 bottom-0 h-full w-full bg-slate-400 opacity-40 cursor-default' 
        onClick={() => { setOpen(false) }}
      />  
      : null
  }

  return (
    <div>
      <div>
        <div>
          {showHeader(open)}
        </div>
        <div >
          {showbackground(open)}
        </div>   
      </div>
      <div className='absolute bg-white rounded'>
        {showOptions(open, optionsState)}
      </div>
    </div>
  )
}

export default Select
