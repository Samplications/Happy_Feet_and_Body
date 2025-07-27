import React from 'react';
import styled from 'styled-components';
import siteData from '../data/siteData.json';
import logo from '../assets/logo.png'; // Replace with your logo path
import { Link as RouterLink } from 'react-router-dom';

// Define a styled component for the links
const FooterLink = styled(RouterLink)`
  color: var(--c-link); // Use your CSS variable for link color
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterContainer = styled.footer`
  background-color: var(--c-primary);
  color: white;
  padding: 2rem 1rem;
  width: 100%;
  box-sizing: border-box;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;

  color: var(--c-transparent-text);
  
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  padding: 0 1rem;
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
  margin-right: 1rem;
`;

const LegalInfo = styled.div`
  text-align: left;

  p{margin:0;
    font-size: 0.9rem;}
`;

const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const ServicesListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ddd; 
  margin: 1rem 0;
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 1rem;

  p{margin:0;
    font-size: 0.7rem;}
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <FooterSection>
            <FooterLogo>
              <Logo src={logo} alt="Logo" />
              <h3>{siteData.name}</h3>
            </FooterLogo>
            <LegalInfo>
              <p>Eigenaar: {siteData.owner}</p>
              <p>BTW nummer: {siteData.vatNumber}</p>
              <p>Adres: {siteData.contact.address}</p>
              <p>Email: {siteData.contact.email}</p>
              <p>Nummer: {siteData.contact.tel}</p>
            </LegalInfo>
          </FooterSection>
          <FooterSection>
            <h3>Onze Diensten</h3>
            <ServicesList>
              {siteData.services.map((service, index) => (
                <ServicesListItem key={index}>{service.name}</ServicesListItem>
              ))}
            </ServicesList>
          </FooterSection>
        </FooterTop>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4267.971385922549!2d5.366454697337067!3d50.98426077581817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c127e8e411c047%3A0xbe64d613d91cca49!2sHappy%20Feet%20%26%20Body!5e1!3m2!1sen!2sde!4v1753303533684!5m2!1sen!2sde"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </MapContainer>

        <FooterBottom>
          <p>&copy; {currentYear} {siteData.name}</p>
          <p>
            <FooterLink to="/HouseRules">House Rules</FooterLink> | <span> </span>
            <FooterLink to="/Privacy">Privacy Statement</FooterLink> | <span> </span>
            <FooterLink to="/Disclaimer">Disclaimer</FooterLink>
          </p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
