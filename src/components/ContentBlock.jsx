import React, { useState } from 'react';
import styled from 'styled-components';

const HalfScreenContainer = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  overflow: hidden;
  flex-direction: ${props => props.$imageOnLeft ? 'row' : 'row-reverse'};

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const HalfScreen = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  ${props => props.withImage ? `
    background-image: url(${props.$backgroundImage});
    background-size: cover;
    background-position: center;
  ` : ''}

  @media (max-width: 768px) {
    width: 100%;
    min-height: 50vh;
  }
`;

const TextContent = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${props => props.withImage ? 'white' : 'black'};

  h1 {
    margin-bottom: 0.7rem;
    font-size: clamp(2rem, 10vw, 2.8rem); 
    
    // first one is the minimum allowed font-size.
    // second argument is font-size that you wish to always have. Its unit must be relative(vw, vh, ch) and not absolute(i.e not px, mm, pt). relative unit will make it change its size w.r.t the changing screen sizes.
    // third one is the maximum allowed font-size.
    
  }

  p {
    margin-top: 0.7rem;
    font-size: clamp(0.5rem, 3vw, 1.4rem);
  }

  @media (max-width: 768px) {
    padding: 1rem;

    p {
      margin-top: 0;
    }

    h1 {
      margin-bottom: 0.4rem;
      font-size: clamp(2rem, 1vw, 2.8rem);
    }
  }
`;

const ContentBlock = ({ initialImageOnLeft = true, name, description, image }) => {
  const [imageOnLeft, setImageOnLeft] = useState(initialImageOnLeft);

  return (
    <HalfScreenContainer $imageOnLeft={imageOnLeft}>

      <HalfScreen withImage $backgroundImage={image} />
      <HalfScreen>
        <TextContent withImage={false}>
          <h1>{name}</h1>
          <p>
            {description.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </TextContent>
      </HalfScreen>
    </HalfScreenContainer>
  );
};

export default ContentBlock;
