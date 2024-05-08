import React from 'react';
import { FiHeart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import './Nav.css';
function Nav({ handleInputChange, query }) {
  return <nav>
    <div className='nav-container'>
      <input type='text' 
        placeholder='enter your search shoes'
        className='search-input'
        onChange={handleInputChange}
        value={query}
      />
 
    </div>
    <div className='profile-container'>
      <a>
        <FiHeart  className='nav-icons'/>
      </a>
      <a href='#'>  
        <AiOutlineShoppingCart className='nav-icons'/>
      </a>
      <a href='#'>
        <AiOutlineUser className='nav-icons'/>
      </a>

    </div>

    
  </nav>
}

export default Nav
