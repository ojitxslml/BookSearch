import React from 'react'
import LoaderImg from "../assets/IMG/loader.svg"

const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img src={LoaderImg} alt="loader" />
    </div>
  )
}

export default Loader