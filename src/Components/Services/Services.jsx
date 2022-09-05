import React from 'react';
import './Services.scss';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';

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
        <div className="blur" style={{
          background:'#abf1ff94'
        }}
        ></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div className='cards-conteiner' style={{
          left:'9rem'
        }}>
          <Card 
            emoji = {HeartEmoji}
            heading = {'Design'}
            detail = {'Figma, Sketch, Photoshop, Adobe ilustrator, Adobe xd'}
          />
        </div>
        <div className="cards-glasses" style={{
          top: '20rem',
          left: '24rem'
        }}>
          <Card 
            emoji = {Glasses}
            heading = {'Developer'}
            detail = {'Html, Css, JavaScript, React, NodeJs, Express'}
          />
        </div>
        <div className="cards-humble" style={{
          top:'28.3rem',
          left: '-11em'
        }}>
          <Card 
            emoji={Humble}
            heading = {'UI/UX'}
            detail = {'Lorem ipsum durmy text are usually use in section where we need some rando text'}
          />
        </div>
        <div className="blur-cards" style={{
          background: '#edd0ff'
        }}
        ></div>
      </div>
    </div>
  )
}

export default Services
