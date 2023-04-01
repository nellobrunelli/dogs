import React from "react";
import {render} from '@testing-library/react'

import Loader from './Loader'

describe('ecco un test', () => {
  it('il mio primo test ', () => {
    const loader = render(<Loader />)
    console.log(loader);
    
    expect(1).toBe(1)
  })
})