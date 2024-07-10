import React from 'react'
import Navbar from './Navbar'
import SearchForm from './SearchForm'

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className="header-content flex flex-c text-center text-white">
                <h2 className='header-title'>
                Encuentra el libro que buscas.
                </h2>
                <br/>
                <p className='header-text fs-18 fw-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda alias sint esse porro, facilis consectetur natus expedita dolores illum, tenetur eveniet sit sequi cumque eius!
                </p>
                <SearchForm/>
            </div>
        </header>
    </div>
  )
}

export default Header