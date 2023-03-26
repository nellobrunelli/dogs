import React, { useCallback, useEffect, useState } from 'react'

export const useFetch = (URL: string, OPTIONS = {}) => {

  const [result, setResult] = useState("")
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState({isError: false, errorMessage: ""})

  useEffect(() => {
    fetchData()
  }, [URL])

  const fetchData =  useCallback(async () => {
    setLoader(true)
    setError({isError: false, errorMessage:""})
    setResult("")

    fetch(URL, OPTIONS)
      .then((r1) => {
        setLoader(false)
        return r1
      })
      .then((r2) => {
        return r2.json()
      })
      .then((r3) => {
        setResult(r3.message) 
      })
      .catch((error) => {
        setLoader(false)
        setError({isError: true, errorMessage: error.message})
      })

  }, [URL])

  return (
    {loader, error, result}
  )
}

export default useFetch;