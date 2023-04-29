import React from 'react'

import { POLICY_URL, PRIVACY_URL } from '../../../../Utils/utils'
import './index.css'

export default function Index() {
  return (
    <div className='policy-links-container__div'>
      <p><a rel="noreferrer" href={POLICY_URL} title='Googan Squad on Twitter'>Privacy Policy</a></p>
      <p>|</p>
      <p><a rel="noreferrer" href={PRIVACY_URL} title='Googan Squad on Twitter'>Terms of Service</a></p>
    </div>
  )
}
