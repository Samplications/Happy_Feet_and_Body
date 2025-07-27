import React from 'react';
import styled from 'styled-components';

import siteData from '../data/siteData.json';

const AlignDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
`;

const DisclaimerContainer = styled.div`
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

const DisclaimerPage = () => {
  return (
    <AlignDiv>
      <DisclaimerContainer>
        <Title>Disclaimer</Title>

        <Section>
          <SectionTitle>Copyright</SectionTitle>
          <SectionContent>
            Het is niet toegestaan om zonder uitdrukkelijke toestemming van {siteData.name} informatie of beeldmateriaal van de website openbaar te maken, te kopiëren, te downloaden of te verspreiden. De informatie mag wel worden afgedrukt en/of gedownload voor eigen gebruik. Voor meer informatie kunt u via de e-mail contact opnemen met de beheerders van deze website: lindavranken@hotmail.com.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Aansprakelijkheid</SectionTitle>
          <SectionContent>
            {siteData.name} is niet aansprakelijk voor schade, van welke aard ook, die is ontstaan doordat de klant de salon onjuist en/of onvolledig heeft ingelicht over relevante lichamelijke aandoeningen, medicijngebruik, werkzaamheden of vrijetijdsbesteding.
          </SectionContent>
          <SectionContent>
            {siteData.name} is niet aansprakelijk voor verlies, diefstal of beschadiging van persoonlijke bezittingen die door de klant zijn meegenomen naar de salon.
          </SectionContent>
          <SectionContent>
            {siteData.name} besteedt de uiterste zorg aan de informatie die op de website beschikbaar wordt gesteld, maar kan op geen enkele wijze instaan voor de juistheid of volledigheid van deze informatie. {siteData.name} aanvaardt geen enkele aansprakelijkheid voor schade die is ontstaan door gebruik van de website of vanwege de onvolledigheid of onjuistheid van de aangeboden informatie op de website. Komt u onvolledigheden of onjuistheden tegen op de website, dan stellen we het op prijs dat u de beheerder van de website via de e-mail hierover contacteert: {siteData.contact.email}.
          </SectionContent>
          <SectionContent>
            {siteData.name} is niet verantwoordelijk voor wat bezoekers op de website plaatsen, bijvoorbeeld als reactie op een bericht, en kan dan ook niet voor eventuele schade als gevolg hiervan aansprakelijk gesteld worden.
          </SectionContent>
          <SectionContent>
            {siteData.name} kan niet aansprakelijk gesteld worden voor het plaatsen van auteursrechtelijk materiaal door bezoekers van de website.
          </SectionContent>
          <SectionContent>
            {siteData.name} streeft ernaar dat de website voortdurend toegankelijk is, maar is niet aansprakelijk voor de mogelijke gevolgen wanneer om welke reden dan ook de website niet beschikbaar is of niet correct functioneert. {siteData.name} kan niet garanderen dat de website vrij is van virussen of andere verstorende elementen.
          </SectionContent>
          <SectionContent>
            De website van {siteData.name} kan hyperlinks naar websites van derden bevatten of hier onrechtstreeks naar verwijzen. Dit impliceert geen goedkeuring van de inhoud hiervan. {siteData.name} is niet aansprakelijk voor de inhoud en kenmerken van deze websites en eventuele schade die hierdoor wordt veroorzaakt.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Wijzigingen</SectionTitle>
          <SectionContent>
            {siteData.name} behoudt zich het recht voor om zonder voorafgaande aankondiging de website naar eigen inzicht en op welk moment dan ook te veranderen. {siteData.name} is niet aansprakelijk voor de gevolgen van de verandering of de beëindiging van de website.
          </SectionContent>
        </Section>
      </DisclaimerContainer>
    </AlignDiv>
  );
};

export default DisclaimerPage;
