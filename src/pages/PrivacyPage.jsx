import React from 'react';
import styled from 'styled-components';

import siteData from '../data/siteData.json';

const AlignDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
`;

const PrivacyContainer = styled.div`
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

const Section = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const SectionContent = styled.p`
  color: #555;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const PrivacyPage = () => {
  return (
    <AlignDiv>
      <PrivacyContainer>
        <Title>Privacybeleid</Title>

        <Section>
          <SectionTitle>Persoonsgegevens</SectionTitle>
          <SectionContent>
            {siteData.name} respecteert de privacy van haar klanten en de bezoekers van de website. Persoonlijke gegevens die door de klant worden verschaft, worden met uiterste zorg en vertrouwelijkheid behandeld. De verwerking van persoonsgegevens gebeurt in overeenstemming met de eisen die worden gesteld door de Privacywet.
          </SectionContent>
          <SectionContent>
            De klant verstrekt aan {siteData.name} persoonlijke gegevens voor het opstellen van een klantenfiche, dat wordt verwerkt in het klantenbestand. De klant voorziet {siteData.name} voorafgaand aan de behandeling van alle gegevens die van belang zijn voor het zorgvuldig uitvoeren van de overeengekomen behandeling. {siteData.name} zal de gegevens van de klant niet zonder schriftelijke toestemming van de klant verkopen of verhuren aan derden.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Geheimhouding</SectionTitle>
          <SectionContent>
            {siteData.name} is verplicht tot geheimhouding van alle vertrouwelijke informatie die de klant tijdens de behandeling verstrekt. Wij beschouwen informatie als vertrouwelijk als dit door de klant wordt meegedeeld of als dit voortvloeit uit de aard van de informatie. Op basis van een wettelijke bepaling of een rechterlijke uitspraak vervalt de geheimhoudingsplicht en is {siteData.name} verplicht om de vertrouwelijke informatie aan derden te verstrekken.
          </SectionContent>
        </Section>
      </PrivacyContainer>
    </AlignDiv>
  );
};

export default PrivacyPage;
