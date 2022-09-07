import React from 'react';
import './Contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="c-left">
        <span>Get in Touch</span>
        <span>Contact me</span>
      </div>
      <div className="c-right">
        <from>
            <input type="text" name='user_name' className='user' placeholder='Name' />
            <input type="email" name='user_email' className='user' placeholder='Email' />
            <textarea name='message' className='user' placeholder='Message' />
            <input type='submit' value='Send' className='button' />
            <div 
            className='blur c-blur' style={{
              background:'var(--purple)'
            }}
            ></div>
        </from>
      </div>
    </div>
  )
}

export default Contact
