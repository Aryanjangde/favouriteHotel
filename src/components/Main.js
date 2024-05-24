import React, { useEffect, useState } from 'react'
import { hotelData } from '../utils/hotelData'
import Card from './Card'

const Main = ({addFavorites, favorites, removeFavorites}) => {



  return (
    <div className='main'>
      <h1>Main Page</h1>
      <div className='content'>
        {hotelData.map((item) => (
          <Card item={item} removeFavorites={removeFavorites} addFavorites={addFavorites} isFavorite={favorites.reduce((accum, next)=>accum || next===item, false)}/>
        ))}
      </div>
    </div>
  )
}

export default Main
