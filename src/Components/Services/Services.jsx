import React from 'react';
import './Services.scss';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';

const Services = () => {
  return (
    <div className='services'>
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perspiciatis 
        <br/> 
        alias optio iusto voluptatem ratione illo nihil, iste eum temporibus id.
        </span>
        <div className="button s-button">Download CV</div>
        <div className="blur s-blur1" style={{
          background:'#abf1ff94'
        }}
        ></div>
      </div>
      {/* right side */}
      <div className="cards">
        Lorem ipsum dolor sit amet cnt iciendis voluptatum.
      </div>
    </div>
  )
}

export default Services
