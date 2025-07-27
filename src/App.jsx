import siteData from './data/siteData.json';
import { useState } from 'react'
import {BrowserView, MobileView} from 'react-device-detect';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import Hero from './components/Hero';
import ContentBlock from './components/ContentBlock';

import dermaplaning from './assets/dermaplaning.jpg';
import gelaatsverzorging from './assets/gelaatsverzorging.jpg';
import ontspanningsmassage from './assets/ontspanningsmassage.jpg';
import voetreflexologie from './assets/voetreflexologie.jpg';

// Create a map from filenames to imports
const images = {
  'dermaplaning.jpg': dermaplaning,
  'gelaatsverzorging.jpg': gelaatsverzorging,
  'ontspanningsmassage.jpg': ontspanningsmassage,
  'voetreflexologie.jpg': voetreflexologie,
};

function App() {

  return (
    <>
      <Hero/>
      {siteData.services.map((service, index) => (
        <ContentBlock 
          key={index}
          name={service.name}
          description={service.description}
          initialImageOnLeft={index % 2 === 0} // true for even indices: 0, 2, 4...
          image={images[service.image]}
        />
      ))}

    </>
  )
}

export default App
