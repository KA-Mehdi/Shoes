import React from 'react';
import Buttons from '../components/Buttons';
import "./Recommended.css";
function Recommended({handleClick}) {
  return (
    <div className='rec'>
      <h2 className='recommended-title'>Recommended</h2>
      <div className='recommended-btns'>
        <Buttons onClickHandler={handleClick} value='' title="all product"/>
        <Buttons onClickHandler={handleClick} value='Nike' title="Nike"/>
        <Buttons onClickHandler={handleClick} value='Adidas' title="Adidas"/>
        <Buttons onClickHandler={handleClick} value='Puma' title="Puma"/>
        <Buttons onClickHandler={handleClick} value='Vans' title="vans "/>
      </div>
    </div>
  )
}

export default Recommended
