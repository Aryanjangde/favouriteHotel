import React, { useEffect, useState } from 'react'

const Card = ({ item, addFavorites, removeFavorites, isFavorite }) => {
  return (
    <div className='card'>
      <img src={item.img} alt='' className='hotel-image' />
      <h3>{item.name}</h3>
      <p>{item.location}</p>
      <p>Rs. {item.price}</p>
      {isFavorite ? <button className='wishlist-btn' onClick={()=>removeFavorites(item)}>Remove from Wishlist</button>:<button className='wishlist-btn' onClick={()=>addFavorites(item)}>Add to Wishlist</button>}
      
    </div>
  )
}

export default Card
