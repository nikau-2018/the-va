import React from 'react'

import ReactPlayer from 'react-player'
import legendOfTelesaImage from '../../images/the-legend-of-telesa.png'
import ilongaHaTahaImage from '../../images/I-longa-ha-taha.png'
import iThoughtIRecognisedHerImage from '../../images/i-thought-i-recognised-her.png'
import styles from './styles.css'

const Village = (props) => {
  return (
    <div className='village'>
      <h2><span className='underline underlineTriangles'>Village</span></h2>
      <div>
        <ReactPlayer className='player' width="94%" height="30%" url='https://soundcloud.com/jahrarager/a-first-reading-i-say-my-name-with-a-mouth-full-of-dirt'/>
        <p>I Say My Name With A Mouth Full of Dirt</p>
        <p className='body'>A daughter of diaspora returns home with her siblings and estranged father for the first time for a ritual of death. Expecting shame and guilt, she is met with rebirth and a ritual of renaming. But at the end of the day, they are still no one's son, and no one's daughter. What is a motherland to do when she can only recognise parts of her children?
        </p>
      </div>
      <div>
        <a href ={'http://www.thecoconet.tv/know-your-roots/pacific-history-legends/the-legend-of-telesa/'}><img className='village-images' src ={legendOfTelesaImage}></img></a>
        <p>The Legend of Telesa</p>
        <p className='body'>Ever been told to cover the mirror up at night? Or comb your hair in the moonlight? this is in case you attract or offend the Teine Sa..
        </p>
      </div>
      <div>
        <br/>
        <a href ={'http://www.thecoconet.tv/songbook/learn-language-songs-from-the-pacific/ilonga-ha-taha-indira/'}><img className='village-images' src ={ilongaHaTahaImage}></img></a>
        <p>I longa ha taha - Indira Moala</p>
        <p className='body'>A stunning accoustic rendition of the traditional Tongan Methodist hymn 'Ilonga ha taha!</p>
      </div>
      <div>
        <br/>
        <a href ={'http://www.thecoconet.tv/songbook/learn-language-songs-from-the-pacific/ilonga-ha-taha-indira/'}><img className='village-images' src ={iThoughtIRecognisedHerImage}></img></a>
        <p>I thought I recognised her</p>
        <p className='body'>Josie Èdan Oloito'a talks about being a Samoan feminist comfortable with talking about sex, Instagram nudes and the increasingly popular Josie & T Youtube video series she co-hosts.</p>
      </div>

    </div>
  )
}

export default Village
