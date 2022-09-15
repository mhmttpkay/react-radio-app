import React, { useState, useEffect } from 'react';
import './App.css';
import { DATA } from "./Data.js";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
function App() {

  const [url, setUrl] = useState(null)
  const changeUrl = (url) => {
    setUrl(url)
  };

  return (
    <div className="container">
      <div className='header-main'>
        <div className='header'>Kanallar</div>
      </div>
      <div className='stations'>
        {DATA.map((item, index) => {
          return (
            <div key={index} className='station-card'>
              <div className='statiton-img'>
                <img src={item.img} alt={item.stationName} />
              </div>
              <span className='station-name'>{item.stationName}</span>
              <span className='station-type'>{item.stationType}</span>
              <div className='play-button'>
                <a onClick={() => setUrl(item.url)} >Dinle</a>
              </div>
            </div>
          )
        })

        }
      </div>
      <div className='player'>
        <AudioPlayer
          autoPlay
          src={url}
          onPlay={e => console.log("onPlay")}
        // other props here
        />
      </div>
    </div>
  );
}

export default App;
