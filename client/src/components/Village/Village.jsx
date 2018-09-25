import React from 'react'
import ReactPlayer from 'react-player'

import BottomTabs from '../BottomTabs/BottomTabs'

const Village = (props) => {
  return (
    <div className='village'>
      <h2><span className='underline underlineTriangles'>Talanoa</span></h2>
      <div>
        <ReactPlayer className='player' width="60%" height="30%" url='https://soundcloud.com/jahrarager/a-first-reading-i-say-my-name-with-a-mouth-full-of-dirt' />
      </div>
      <BottomTabs />      
    </div>
  )
}

export default Village
