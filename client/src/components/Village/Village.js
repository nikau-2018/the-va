import React from 'react'
import {Link} from 'react-router-dom'

import ReactSoundcloud from 'react-soundcloud'

const Village = (props) => {
  return (
    <div className='village'>
      <h2><span className='underline underlineTriangles'>Talanoa</span></h2>
      React.render(<ReactSoundcloud url="https://soundcloud.com/jahrarager/a-first-reading-i-say-my-name-with-a-mouth-full-of-dirt"/>
    </div>
  )
}

export default Village
