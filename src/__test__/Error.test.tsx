import React from "react";
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'

import Error from '../components/Error'

describe('Test series 2', () => {
  it('Dog', () => {
    render(
      <Error 
        text={'Errore grosso'}
      />
    )
    screen.getByText(/Errore Grosso/i)
  })
})