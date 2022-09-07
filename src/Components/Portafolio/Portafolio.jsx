import React from 'react';
import './Portafolio.scss';
import img1 from '../../img/Screenshot_1.jpg';
import img2 from '../../img/Screenshot_5.jpg';

const Portafolio = () => {
  return (
    <div className='portafolio'>
      <span>Recent Projects</span>
      <span>Portfolio</span>
      <div className="p-img">
        <a href="https://gym-app-react.netlify.app/"><img src={img2} alt="Portfolio_img_1" /></a>
        <a href="https://ecommerce-astro.netlify.app/"><img src={img1} alt="Portfolio_img_2" /></a>
      </div>
    </div>
  )
}

export default Portafolio
