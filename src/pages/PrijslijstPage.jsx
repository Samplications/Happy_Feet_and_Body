import React from 'react';
import styled from 'styled-components';
import siteData from '../data/siteData.json';

const AlignDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
`;

const PriceListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  max-width: 68%;
  margin: 5em auto 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 300;
`;

const ServiceCategory = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const ServiceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ServiceInfo = styled.div`
  flex: 1;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const ServiceName = styled.h3`
  margin: 0;
  color: #333;
  font-size: 1.3rem;
`;

const ServiceDescription = styled.p`
  margin: 5px 0;
  color: #777;
  font-size: 0.9rem;
  white-space: normal;
`;

const ServicePrice = styled.p`
  margin: 0;
  color: var(--c-black);
  font-size: 1.2rem;
  font-weight: bold;
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: 768px) {
    align-self: flex-end;
  }
`;

const PrijslijstPage = () => {
  return (
    <AlignDiv>
      <PriceListContainer>
        <Title>Prijslijst</Title>
        {siteData.pricelist.map((category, categoryIndex) => (
          <ServiceCategory key={categoryIndex}>
            {category.map((service, serviceIndex) => (
              <ServiceItem key={serviceIndex}>
                <ServiceInfo>
                  <ServiceName>{service.name}</ServiceName>
                  <ServiceDescription>
                    {service.description.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </ServiceDescription>
                </ServiceInfo>
                <ServicePrice>{service.price}</ServicePrice>
              </ServiceItem>
            ))}
          </ServiceCategory>
        ))}
      </PriceListContainer>
    </AlignDiv>
  );
};

export default PrijslijstPage;
