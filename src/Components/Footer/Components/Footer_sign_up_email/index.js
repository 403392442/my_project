import React, { useState } from 'react'

import './index.css'

export default function Index() {

  const [email, setEmail] = useState('')

  const handleEmailInput = (e) => {
    const email = e.target.value;
    setEmail(setEmail(email))
  }

  return (
    <div className='sign-up-container__div'>
        <p>SIGN UP FOR NEWS & UPDATES</p>
        <form action='#'>
          <input placeholder='Enter your email' type='email' value={email} onChange={e => handleEmailInput(e)} />
          <span className='iconfont icon-email'></span>
        </form>
        
    </div>
  )
}
