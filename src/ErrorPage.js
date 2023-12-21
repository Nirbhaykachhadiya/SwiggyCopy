import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error=useRouteError()
    console.log(error.data)
  return (
    <>
    <div>ErrorPage</div>
    <div>{error.data}</div>
    </>
  )
}

export default ErrorPage