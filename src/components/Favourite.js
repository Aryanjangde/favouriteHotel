import { useState } from 'react'
import React from 'react'
import { hotelData } from '../utils/hotelData'
import Card from './Card'
const Favourite = ({favorites, addFavorites, removeFavorites}) => {
  
  return (
    <div className='main'>
      <h1>Favourites Page</h1>
     <div className='content'>
        {favorites.map((item) => (
          <Card item={item} removeFavorites={removeFavorites} addFavorites={addFavorites} isFavorite={true}/>
        ))}
      </div>
      
    </div>
    )
}

export default Favourite
