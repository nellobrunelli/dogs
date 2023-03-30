// import Loader from "../components/Loader";
import {describe, test, expect,  } from '@jest/globals';

const f1 = () => {
  return 1;
}

describe('sum module', () => {
  test('my first test', () => {
    expect(f1()).toEqual(1)
  })
});

