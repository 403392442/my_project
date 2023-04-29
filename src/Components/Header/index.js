import React from 'react'

import HeaderSocialMedia from './Components/Header_social_media'
import HeaderNaviBar from './Components/Header_navi_bar'
import HeaderBanner from './Components/Header_banner'
import './index.css'

export default function Index() {
  return (
    <div>
        <HeaderSocialMedia />
        <div className='divide-line'></div>
        <HeaderNaviBar />
        <HeaderBanner />
    </div>
  )
}
