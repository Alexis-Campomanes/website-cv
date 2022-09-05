import React from 'react';
import './card.scss';

const Card = ({emoji, heading, detail}) => {
  return (
    <div className='card'>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className='b-card'>learn more</button>
    </div>
  )
}

export default Card
