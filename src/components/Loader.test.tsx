import React from "react";
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'

import Loader from './Loader'

describe('Test series 1', () => {
  it('Loader description', () => {
    render(<Loader />)
    const el = screen.getByText(/loading dogs/i)
    expect(el).toBeInTheDocument()
  })
})