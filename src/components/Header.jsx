import siteData from '../data/siteData.json';
import React from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const HeadDiv = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000;
  background-color: var(--c-primary);
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 3px var(--c-black);
`;

const Bview = styled(BrowserView)`
  width: 70%;
  flex-wrap: no-wrap;
  display: flex;
  justify-content: space-between;
`;

const Mview = styled(MobileView)`
  width: 90%;
  flex-wrap: no-wrap;
  display: flex;
  flex-direction: column;
  padding: 0.5em 0;
  align-items: center;
`;

const LeftDiv = styled.div``;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
`;

const LogoDiv = styled(RouterLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--c-white);
`;

const ImgLogo = styled.img`
  height: 60px;
  width: 60px;
`;

const BtnList = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledLink = styled(RouterLink)`
  color: var(--c-white);
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 40px;
  &:hover {
    text-decoration: underline;
  }
`;

const ButtonLink = styled(RouterLink)`
  background-color: var(--c-secondary);
  color: var(--c-white);
  border: 2px solid;
  border-color: var(--c-secondary);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  height: 40px;
  text-decoration: none;
  display: flex;
  align-items: center;

  padding: 0 0.7rem;
  transition: 0.3s;

  &:hover {
    background-color: var(--c-white);
    color: var(--c-black);
    border: 2px solid;
    border-color: var(--c-secondary);
  }
`;

const Header = () => {
  return (
    <HeadDiv>
      <Bview>
        <LeftDiv>
          <LogoDiv to="/">
            <ImgLogo src={logo} alt="site logo" />
            <p>{siteData.name}</p>
          </LogoDiv>
        </LeftDiv>
        <RightDiv>
          <BtnList>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/Prijslijst">Prijslijst</StyledLink>
            <StyledLink to="/Contact">Contact</StyledLink>
            <ButtonLink to="/Contact">Boek Nu</ButtonLink>
          </BtnList>
        </RightDiv>
      </Bview>
      <Mview>
        <LogoDiv to="/">
          <ImgLogo src={logo} alt="site logo" />
        </LogoDiv>
        <BtnList>
          <StyledLink to="/Prijslijst">Prijslijst</StyledLink>
          <StyledLink to="/Contact">Contact</StyledLink>
          <ButtonLink to="/Contact">Boek Nu</ButtonLink>
        </BtnList>
      </Mview>
    </HeadDiv>
  );
};

export default Header;
