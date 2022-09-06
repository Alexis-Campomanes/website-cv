import React from 'react';
import './Archievement.scss'

const Archievement = ({add, text, text1}) => {
  return (
    <div className='a-conteiner'>
      <div className='circle'>
        <span>{add}</span>
      </div>
      <span>{text}</span>
      <span>{text1}</span>
    </div>
    )
}

export default Archievement
