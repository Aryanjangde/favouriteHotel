import React from 'react'

const Navbar = ({ setIsModalOpen, isSignedIn, setIsSignedIn, setPage }) => {
  return (
    <div className='navbar'>
      <div className='logo'>HotelView</div>
      <div className='filler'></div>
      <div className='navbar-options'>
        {isSignedIn && (
          <button className='nav-button' onClick={() => setIsSignedIn(false)}>
            Sign Out
          </button>
        )}
        {!isSignedIn && (
          <button
            className='nav-button'
            onClick={() => {
              setIsModalOpen(true)
            }}
          >
            Sign Up / Sign In
          </button>
        )}

        <button className='nav-button' onClick={() => setPage('favourite')}>
          Favourites
        </button>
        <button className='nav-button' onClick={() => setPage('main')}>
          Main Page
        </button>
      </div>
    </div>
  )
}

export default Navbar
