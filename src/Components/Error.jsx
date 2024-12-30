import React from 'react'
import {useRouterError} from "react-router-dom";
const Error = () => {
    const error = useRouterError();
    console.log(error);
  return (
    <>
        <h1 className='bg-red-200'>Error</h1>
    </>
  )
}

export default Error;