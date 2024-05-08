import React from 'react';
import { FaStar,FaShoppingBag  } from "react-icons/fa";

function Card({img, title, star, reviews, newPrice, prevPrice}) {
  return (
    <section className='card'>
        <img  className='card-img' src={img} alt={title}/>
        <div className='card-details'>
          <h3 className='card-title'>{title}</h3>
          <section className='card-reviews'>
            {star} {star} {star} {star} {star}
            <span className='total-reviews'>{reviews}</span>
          </section>
          <section className='card-price'>
            <div className='price'>
              <del>{prevPrice}</del> {newPrice }
            </div>
            <div className='bag'>
              <FaShoppingBag className='bag-icon'/>
            </div>
          </section>
        </div>
    </section>
  )
}

export default Card
