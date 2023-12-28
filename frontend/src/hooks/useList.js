import { useState } from 'react'
// import { useAuthContext } from './useAuthContext'

export const useList = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  // const { dispatch } = useAuthContext()

  const list = async (name,description,category,startPrice,condition,phone,address,city,pincode) => {
    setIsLoading(true)
    setError(null)
  
    const response = await fetch('/api/user/list', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name,description,category,startPrice,condition,phone,address,city,pincode })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    // if (response.ok) {
    //   // save the user to local storage
    //   // localStorage.setItem('user', JSON.stringify(json))

    //   // // update the auth context
    //   // dispatch({type: 'LOGIN', payload: json})

    //   // // update loading state
    //   // setIsLoading(false)
    // }
  }

  return { list, isLoading, error }
}
