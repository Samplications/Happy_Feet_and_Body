import siteData from '../data/siteData.json';
import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/background-image.jpg'; // Replace with your image path

const FullWidthImageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* Ensures no overflow and thus no scrollbars */
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover; /* Ensures the image covers the entire container */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2rem;
  text-align: center;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;

const HeroComponent = () => {
  return (
    <FullWidthImageContainer>
      <BackgroundImage />
      <OverlayText>
        <h1>Welkom bij {siteData.name}</h1>
        <p>{siteData.about.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</p>
      </OverlayText>
    </FullWidthImageContainer>
  );
};

export default HeroComponent;
