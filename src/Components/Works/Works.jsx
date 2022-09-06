import React from 'react';
import './Works.scss'
import Upwork from '../../img/Upwork.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import Fiver from '../../img/fiverr.png';


const Works = () => {
  return (
    <div className='works'>
      <div className="i-left">
        <div className="i-name">
          <span>Works for All these</span>
          <span>Brands & Clients</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cupiditate officia? Aut odio autem voluptatibus adipisci rerum ab deleniti excepturi, dolore dolores</span>
        </div>
        <button className='button i-button'>Hire me</button>
      </div>
      <div className="i-right">
        <div className='w-background'>
          <div className="blue" style={{
            backgroundColor:'#1986dd'
          }}
          ></div>
          <div className="yellow"></div>
          <div className="white"></div>
        </div>
        <img src={Upwork} alt="" />
        <img src={Shopify} alt="" />
        <img src={Facebook} alt="" />
        <img src={Fiver} alt="" />
      </div>
    </div>
  )
}

export default Works
