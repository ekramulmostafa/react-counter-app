import React from 'react'

// const Navbar = props => {
const Navbar = ({ totalCounters }) => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <a className='navbar-brand' href='#'>
        Navbar
        <span className='badge badge-pill badge-secondary m-2'>
          {totalCounters}
        </span>
      </a>
    </nav>
  )
}

export default Navbar
