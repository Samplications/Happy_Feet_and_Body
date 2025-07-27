import React from 'react';
import styled from 'styled-components';
import siteData from '../data/siteData.json';
import contactImage from '../assets/contact-image.jpg'; // Replace with your image path
import whatsappIcon from '../assets/whatsapp.png'; // Import WhatsApp icon
import facebookIcon from '../assets/facebook.png'; // Import Facebook icon

const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  padding: 20px;
  box-sizing: border-box;
  color: var(--c-black);
  margin: 5em auto 0;
`;

const ContainerContent = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
  }
`;

const ContactInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 50%;

  @media (max-width: 768px) {
   max-width: 100%;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ContactImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
`;

const OpeningHours = styled.div`
  margin: 20px 0;
  text-align: left;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: start;
  gap: 15px;
  margin: 20px 0;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-size: 24px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const SocialImage = styled.img`
  width: 60px;
  height: 60px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 150px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: var(--c-secondary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SubTitle = styled.h2`
  color: var(--c-black);
  font-size: 1.5rem;
  margin-bottom: 0.4rem;
`;

const Paragraph = styled.p`
  margin: 0.5rem 0;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const OpeningsUur = styled.li`
  padding: 4px;
`;

const ContactLink = styled.a`
    text-decoration: none;
    color: var(--c-black);

    &:hover{
        text-decoration: underline;
        color: var(--c-black);

    }
`;

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <ContainerContent>
        <ContactInfoContainer>
          <h1>Contact</h1>
          <ContactInfo>
            <SubTitle>Mijn Studio</SubTitle>
            <Paragraph>{siteData.name} Studio</Paragraph>
            <Paragraph>
              {siteData.contact.address.split(', ').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </Paragraph>
            <br />
            <SubTitle>Contacteer mij</SubTitle>
            <Paragraph>
                <ContactLink href={`tel:${siteData.contact.tel}`}>{siteData.contact.tel}</ContactLink>
            </Paragraph>
            <Paragraph>
                <ContactLink href={`mailto:${siteData.contact.email}`}>{siteData.contact.email}</ContactLink>
            </Paragraph>
          </ContactInfo>
          <OpeningHours>
            <SubTitle>Openingsuren</SubTitle>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {Object.entries(siteData.contact.opening).map(([day, hours]) => (
                <OpeningsUur key={day}>
                  <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong> {hours}
                </OpeningsUur>
              ))}
            </ul>
            <Paragraph style={{ fontWeight: 'bold', marginTop: '1rem' }}>ENKEL OP AFSPRAAK</Paragraph>
          </OpeningHours>
          <SubTitle>Stuur mij direct een bericht!</SubTitle>
          <SocialLinks>
            {siteData.socials.facebook && (
              <SocialLink href={siteData.socials.facebook} target="_blank" rel="noopener noreferrer">
                <SocialImage src={facebookIcon} alt="Facebook" />
              </SocialLink>
            )}
            {siteData.socials.whatsapp && (
              <SocialLink href={siteData.socials.whatsapp} target="_blank" rel="noopener noreferrer">
                <SocialImage src={whatsappIcon} alt="WhatsApp" />
              </SocialLink>
            )}
          </SocialLinks>
        </ContactInfoContainer>
        <ImageContainer>
          <ContactImage src={contactImage} alt="Contact Us" />
        </ImageContainer>
      </ContainerContent>
    </ContactPageContainer>
  );
};

export default ContactPage;
