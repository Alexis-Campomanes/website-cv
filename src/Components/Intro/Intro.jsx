import React from 'react';
import './Intro.scss';
import GitHub from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoj1 from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';


const Intro = () => {
  return (
    <div className='intro'>
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Alexis Campomanes</span>
          <span>Fronted Developer with high level of experience in web designing and development, producting the Qhuality work</span>
        </div>
        <button className='button i-button'>Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/Alexis-Campomanes">
            <img src={GitHub} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/alexiscampomanes/">
            <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <img src={Glassesimoj1} alt="" />
      <div style={{
          left: '25rem',
          top: '3rem'
        }}>
        <FloatingDiv imagen={Crown} text1={'web'} text2={'Developer'} />
      </div>
      <div style={{
        bottom:'8.6rem',
        left: '2rem'
      }}>
      <FloatingDiv imagen={Thumbup} text1={'Best Design'} text2={'Award'}/>
      </div>
      {/* blur divs */}
      <div className="blur" style={{ 
        background:'rgb(238 210 255)'
        }}
      ></div>
      <div className="blur" style={{ 
        background:'rgb(193 245 255)',
        top: '30rem',
        width: '21rem',
        height: '11rem',
        left: '-7rem'
        }}
      ></div>
      </div>
    </div>
  )
}

export default Intro
