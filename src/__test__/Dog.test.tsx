import React from "react";
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'

import Dog from '../components/Dog'

/**
 * questo test è stato relaizzato cambiando la sintassi del componente
 * Ciò che rompe Jest sono le "import type". Non le capisce e si rompe su ueste definizioni
 */
describe('Test series 2', () => {
  it('Dog', () => {
    render(
      <Dog 
        dog={{
          url: "www.google/immagineDiUnCane",
          name: "labrador"
        }} 
        dispatchDogs={() => {return true}} 
        mkey={0}/>
    )
    screen.getByText(/labrador/i)
  })
})