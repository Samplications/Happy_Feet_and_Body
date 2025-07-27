import React from 'react';
import styled from 'styled-components';

import siteData from '../data/siteData.json';

const AlignDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
`;

const RulesContainer = styled.div`
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

const RuleSection = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const RuleTitle = styled.h2`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const RuleDescription = styled.p`
  color: #555;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const HouseRulesPage = () => {
  return (
    <AlignDiv>
      <RulesContainer>
        <Title>Algemene Voorwaarden {siteData.name}</Title>

        <RuleSection>
          <RuleTitle>1. Algemeen</RuleTitle>
          <RuleDescription>
            Deze algemene voorwaarden zijn van toepassing op alle behandelingen en diensten die worden aangeboden door Happy Feet & Body. Door een afspraak te maken, gaat de klant akkoord met deze voorwaarden.
          </RuleDescription>
        </RuleSection>

        <RuleSection>
          <RuleTitle>2. Afspraken & Annuleringen</RuleTitle>
          <RuleDescription>
            Afspraken kunnen uitsluitend telefonisch of via WhatsApp worden geannuleerd of verzet op het nummer {siteData.contact.tel}. Annuleringen via social media (Facebook, Instagram, etc.) zijn niet geldig.
          </RuleDescription>
          <RuleDescription>
            Indien een afspraak binnen 24 uur voor de afgesproken tijd wordt geannuleerd, wordt het betaalde voorschot niet teruggegeven of omgezet in een waardebon.
          </RuleDescription>
        </RuleSection>

        <RuleSection>
          <RuleTitle>3. Voorschotten & Betalingen</RuleTitle>
          <RuleDescription>
            Bij het boeken van een afspraak is een voorschot van 50% van het totale bedrag verplicht. De afspraak is pas definitief na ontvangst van het voorschot.
          </RuleDescription>
          <RuleDescription>
            Het resterende bedrag dient op de dag van de behandeling contant, met de kaart of via een betaalapp te worden voldaan.
          </RuleDescription>
        </RuleSection>

        <RuleSection>
          <RuleTitle>4. Gezondheid & Hygiëne</RuleTitle>
          <RuleDescription>
            De klant is verplicht om eventuele medische aandoeningen, allergieën of huidproblemen voorafgaand aan de behandeling te melden.
          </RuleDescription>
        </RuleSection>

        <RuleSection>
          <RuleTitle>5. Aansprakelijkheid</RuleTitle>
          <RuleDescription>
            Happy Feet & Body is niet aansprakelijk voor schade, letsels of allergische reacties als gevolg van de behandelingen of het gebruik van producten, tenzij sprake is van aantoonbare nalatigheid.
          </RuleDescription>
        </RuleSection>

        <RuleSection>
          <RuleTitle>6. Cadeaubonnen & Acties</RuleTitle>
          <RuleDescription>
            Cadeaubonnen kunnen niet worden ingewisseld voor contant geld.
          </RuleDescription>
        </RuleSection>

        <RuleSection>
          <RuleTitle>7. Overmacht</RuleTitle>
          <RuleDescription>
            In geval van overmacht (zoals ziekte, technische storingen of onvoorziene omstandigheden) behoudt Happy Feet & Body zich het recht voor om afspraken te verplaatsen. In dit geval wordt het voorschot niet ingehouden.
          </RuleDescription>
        </RuleSection>
      </RulesContainer>
    </AlignDiv>
  );
};

export default HouseRulesPage;
