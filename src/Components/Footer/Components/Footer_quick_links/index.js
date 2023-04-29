import React from 'react'


import './index.css'
import { FACEBOOK_URL, INSTAGRAM_URL, TWITTER_URL, YOUTUBE_URL } from '../../../../Utils/utils'

export default function Index() {
  return (
    <div className='quick-links-container__div'>

      <ul className='quicker-links-gear__div'>
        <li className='quick-links-topic__li'>GEAR</li>
        <li><a href='/#'>Hats</a></li>
        <li><a href='/#'>T-shirts</a></li>
        <li><a href='/#'>Performance</a></li>
        <li><a href='/#'>Youth</a></li>
        <li><a href='/#'>Gift Cards</a></li>
        <li><a href='/#'>Shop All</a></li>
      </ul>

      <ul className='quick-links-tackle__div'>
        <li className='quick-links-topic__li'>TACKLE</li>
        <li><a href='/#'>Rods</a></li>
        <li><a href='/#'>Soft Baits</a></li>
        <li><a href='/#'>Hard Baits</a></li>
        <li><a href='/#'>Storage</a></li>
      </ul>

      <ul className='quick-links-bundles__div'>
        <li className='quick-links-topic__li'>BUNDLES</li>
        <li><a href='/#'>Exclusive Bundles</a></li>
        <li><a href='/#'>Mando Kits</a></li>
        <li><a href='/#'>Catchsmart Bundles</a></li>
        <li><a href='/#'>Bulk</a></li>
      </ul>

      <ul className='quick-links-help__div'>
        <li className='quick-links-topic__li'>NEED HELP?</li>
        <li><a href='/#'>FAQs</a></li>
        <li><a href='/#'>Contact Us</a></li>
      </ul>

      <ul className='quick-links-other__div'>
        <li className='quick-links-topic__li'>OPEN.SNIFF.CATCHI</li>
        <li><a href='/#'>Wholesale</a></li>
        <li><a href='/#'>Reviews</a></li>
        <li><a href='/#'>Team Googan</a></li>
        <li><a href='/#'>Refer-A-Friend</a></li>
        <li><a href='/#'>help@googansquad.com</a></li>
        <li className='social-media-icon-container__div'>
          <a href={TWITTER_URL}><span className='iconfont icon-twitter_footer'></span></a>
          <a href={INSTAGRAM_URL}><span className='iconfont icon-instagram_footer'></span></a>
          <a href={FACEBOOK_URL}><span className='iconfont icon-facebook_footer'></span></a>
          <a href={YOUTUBE_URL}><span className='iconfont icon-youtube_footer'></span></a>
        </li>
      </ul>
    </div>
  )
}
