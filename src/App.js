import './App.css'
import Navbar from './components/Navbar'
import React, { useState, useEffect } from 'react'
import Modal from './components/Modal'
import Main from './components/Main'
import Favourite from './components/Favourite'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('SignUp')
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [page, setPage] = useState('main');
  const [favorites, setFavorites] = useState([]);
  useEffect(()=>{
    const savedFavs = localStorage.getItem('favs');
    if (savedFavs) {
      setFavorites(JSON.parse(savedFavs));
    }
  }, [])
  const addFavorites = (item) => {
    setFavorites(prev => {
      const newF = [...prev, item];
      localStorage.setItem('favs', JSON.stringify(newF))
      return newF;
  });
  }
  const removeFavorites = (item) => {
    setFavorites(prev => {
      const newF = prev.filter(i => i!==item)
      localStorage.setItem('favs', JSON.stringify(newF))
      return newF;
      });
  }

  return (
    <div>
      <Navbar
        isSignedIn={isSignedIn}
        setIsSignedIn={setIsSignedIn}
        setIsModalOpen={setIsModalOpen}

        setPage={setPage}
      />
      {isModalOpen && (
        <Modal
          isSignedIn={isSignedIn}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setIsSignedIn={setIsSignedIn}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <div className='page'>
        {isSignedIn ? (
          page == 'main' ? (
            <Main removeFavorites={removeFavorites} addFavorites={addFavorites} favorites={favorites} />
          ) : (
            <Favourite removeFavorites={removeFavorites} addFavorites={addFavorites} favorites={favorites} />
          )
        ) : (
          <p>Please Sign in first</p>
        )}
      </div>
    </div>
  )
}

export default App
