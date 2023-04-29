import React, { useState } from 'react'

import './index.css'
import {
  FACEBOOK_STRING,
  INSTAGRAM_STRING,
  TWITTER_STRING,
  YOUTUBE_STRING,
  TWITTER_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  YOUTUBE_URL
} from '../../../../Utils/utils';

export default function Index() {

  const [hoverTwitter, setHoverTwitter] = useState(false);
  const [hoverFacebook, setHoverFacebook] = useState(false);
  const [hoverInstagram, setHoverInstagram] = useState(false);
  const [hoverYoutube, setHoverYoutube] = useState(false);

  function handleMouseEvent(target) {
    const [hover, setHover] = getTargetSetFunction(target)
    setHover(!hover)
  }

  function getTargetSetFunction(target) {
    switch (target) {
      case TWITTER_STRING:
        return [hoverTwitter, setHoverTwitter];
      case INSTAGRAM_STRING:
        return [hoverInstagram, setHoverInstagram];
      case FACEBOOK_STRING:
        return [hoverFacebook, setHoverFacebook];
      case YOUTUBE_STRING:
        return [hoverYoutube, setHoverYoutube];
      default:
        break;
    }
  }

  return (
    <div className="social-media-container">
      <ul className="social-media-list">

        <li>
          <a target='_blank' rel="noreferrer" href={TWITTER_URL} title='Googan Squad on Twitter'>
            <span
              className={hoverTwitter ? "iconfont icon-twitter_fill" : "iconfont icon-twitter"}
              onMouseEnter={() => handleMouseEvent(TWITTER_STRING)}
              onMouseLeave={() => handleMouseEvent(TWITTER_STRING)}>
            </span>
          </a>
        </li>

        <li>
          <a target='_blank' rel="noreferrer" href={FACEBOOK_URL} title='Googan Squad on Facebook'>
            <span
              className={hoverFacebook ? "iconfont icon-facebook_fill" : "iconfont icon-facebook"}
              onMouseEnter={() => handleMouseEvent(FACEBOOK_STRING)}
              onMouseLeave={() => handleMouseEvent(FACEBOOK_STRING)}>
            </span>
          </a>
        </li>

        <li>
          <a target='_blank' rel="noreferrer" href={INSTAGRAM_URL} title='Googan Squad on Instagram'>
            <span className={hoverInstagram ? "iconfont icon-instagram_fill" : "iconfont icon-instagram"}
              onMouseEnter={() => handleMouseEvent(INSTAGRAM_STRING)}
              onMouseLeave={() => handleMouseEvent(INSTAGRAM_STRING)}>
            </span>
          </a>
        </li>

        <li>
          <a target='_blank' rel="noreferrer" href={YOUTUBE_URL} title='Googan Squad on Youtube'>
            <span
              className={hoverYoutube ? "iconfont icon-youtube_fill" : "iconfont icon-youtube"}
              onMouseEnter={() => handleMouseEvent(YOUTUBE_STRING)}
              onMouseLeave={() => handleMouseEvent(YOUTUBE_STRING)}>
            </span>
          </a>
        </li>

      </ul>
    </div>
  )
}
